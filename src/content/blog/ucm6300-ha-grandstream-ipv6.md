---
title: 'UCM6300 HA + IPv6 — confirmado en producción ☎️'
pubDate: 2026-09-13
description: 'Les comparto el procedimiento correcto para que IPv6 funcione en un cluster HA con UCM6300...'
author: 'Carlos Mairena'
image:
    url: '/images/posts/central-voip-ipv6.png'
    alt: 'Imagen del articulo'
tags: ["ucm6300", "ipv6", "voip", "ha"]
---

Hola a todos,

Luego de pruebas exhaustivas en un ambiente de producción, quiero compartir el procedimiento correcto para que IPv6 funcione en un cluster HA con UCM6300. Hay una configuración documentada por Grandstream — sin embargo, considero que la documentación oficial únicamente menciona que ambas centrales deben tener una dirección IPv6 estática antes de habilitar la opción, pero no explica un orden o el mecanismo a detalle detrás del funcionamiento.  

---

**Cómo funciona realmente IPv6 en HA con UCM6300 (confirmado en producción)**

El cluster HA **no genera ni calcula una VIP IPv6 independiente**. El comportamiento real es el siguiente:

* La dirección IPv6 configurada en el nodo Primary es tratada como cualquier otro parámetro de configuración del sistema.
* Cuando se habilita `Enable IPv6` en la configuración de HA, esa configuración IPv6 se replica al Secondary como parte del proceso de sincronización estándar.
* Ambos nodos quedan con la **misma dirección IPv6** en su configuración interna.
* El Secondary tiene esa IPv6 configurada pero **inactiva** a nivel de interfaz de red.
* Cuando ocurre un failover y el Secondary asume el rol Active, **activa** la dirección IPv6 en su interfaz LAN.

Esto significa que la IPv6 no es una VIP calculada de forma independiente (como sucede en IPv4) — es la IP estática del Primary, heredada por el Secondary y activada selectivamente cuando corresponde.  

---

**Orden de configuración que recomiendo**

Para este orden no recomiendo saltarse pasos o invertirlos, luego que se comprende el comportamiento juegan como quieran para que el Secondary quede alineado con la dirección IPv6 que se necesita.

1. Configurar direcciones IPv4 estáticas individuales en ambos nodos.
2. Habilitar HA únicamente en IPv4 (la opción `Enable IPv6` debe quedar **desactivada**). Guardar y reiniciar ambos nodos. Esperar la sincronización completa del HA — esto puede demorar hasta **20 minutos**.
3. Una vez que el cluster esté sincronizado y ambos nodos muestren estado Dual, ingresar a la interfaz web mediante la **VIP IPv4 del cluster** y configurar la dirección IPv6 en `Network Settings → Basic Settings`.
4. Ir a `System Settings → HA → HA Settings` y habilitar `Enable IPv6`. Guardar y reiniciar. Esperar a que finalice la sincronización.
5. Una vez completada la sincronización, el Secondary tendrá la misma dirección IPv6 en su configuración — pero inactiva. La activará automáticamente cuando ocurra un failover.


|                     | IPv4                                | IPv6                                    |
| ------------------- | ----------------------------------- | --------------------------------------- |
| Primary (activo)    | IP estática propia + VIP flotante   | IP estática compartida — **activa**     |
| Secondary (standby) | IP estática propia                  | IP estática compartida — **inactiva**   |
| Tras failover       | Secondary toma la VIP IPv4 flotante | Secondary **activa** la IPv6 compartida |


---

**Algo importante:**  

Si se intenta configurar IPv6 antes de que el cluster HA esté completamente sincronizado en IPv4, se está configurando un nodo de forma independiente — no como miembro del cluster. La IPv6 no se va a propagar porque el canal de sincronización aún no está establecido. El cluster debe estar completamente operativo en IPv4 primero.

---

Espero que esto le ahorre a alguien varias horas de troubleshooting. 🙂 