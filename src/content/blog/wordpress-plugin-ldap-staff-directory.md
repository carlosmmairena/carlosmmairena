---
title: 'LDAP Staff Directory: Olvídate de actualizar tu directorio de empleados a mano 🚀'
pubDate: 2026-03-05
description: 'Si gestionas un sitio en WordPress, seguro que conoces el dolor de cabeza que significa mantener actualizado un directorio de personal...'
author: 'Carlos Mairena'
image:
    url: '/images/posts/wordpress-plugin-ldap-staff-directory.png'
    alt: 'Imagen del plugin'
tags: ["wordpress", "plugins", "ldap"]
---
Si gestionas un sitio en WordPress, seguro que conoces el dolor de cabeza que significa mantener actualizado un directorio de personal. Alguien entra, alguien sale, alguien cambia de puesto... y ahí estás tú, editando filas manualmente.

He creado **LDAP Staff Directory** precisamente para terminar con eso. Es un plugin de código abierto que conecta tu WordPress con tu servidor LDAP (Active Directory u OpenLDAP) para mostrar a tu equipo en tiempo real, de forma elegante y totalmente automática.

## 💡 ¿Para quién es este plugin?

Si te encuentras en alguna de estas situaciones, este plugin te va a encantar:
* **Intranets corporativas:** Muestra a tus empleados directamente desde Active Directory sin duplicar ni un solo dato. 🏢
* **Universidades y organismos:** Publica el listado de docentes o funcionarios desde OpenLDAP o Samba sin esfuerzo. 🎓
* **Agencias de desarrollo:** Dale a tus clientes una solución profesional usando Elementor o Beaver Builder con un par de clics. 🛠️
* **Entornos Multisite:** Cada sitio puede tener su propia configuración y filtrar por unidades organizativas (OU) específicas.  


## 🛠️ ¿Qué hace a este plugin diferente?

No es solo un conector; es una herramienta pensada para que no pierdas tiempo en configuraciones complejas de servidor.

* **Navegación por departamentos:** Tus visitantes primero ven un menú con los departamentos y cuántas personas hay en cada uno; al entrar a uno, encuentran búsqueda y paginación listas para usar.
* **Seguridad:** La contraseña de tu cuenta de servicio LDAP se resguarda de forma segura. Implementé el **Cifrado XSalsa20-Poly1305** para protegerla en reposo, derivando claves dinámicamente de tus salts de WordPress. 🔒
* **Caché inteligente:** Si tu servidor LDAP se cae un momento, ¡no pasa nada! El plugin sirve los datos almacenados para que tus usuarios no vean un error. ⚡
* **Cero complicaciones:** Soporta certificados autofirmados (puedes subir tu propio `.pem` o `.crt`) y filtra automáticamente las cuentas deshabilitadas de AD.

## 🚀 Instalación rápida

He simplificado el proceso para que no tengas que tocar ni una carpeta del servidor. Tienes dos formas de empezar:

### Opción A: Directo desde tu WordPress (Recomendado) 💻
1. Entra al panel de administración de tu sitio.
2. Ve a **Plugins → Añadir nuevo**.
3. En el buscador, escribe: `LDAP Staff Directory`.
4. Haz clic en **Instalar ahora** y luego en **Activar**. ¡Y listo!

### Opción B: Descarga manual 📥
Si prefieres el método tradicional o quieres revisar el código antes, puedes bajarlo desde:
* **Tienda oficial:** [wordpress.org/plugins/ldap-staff-directory](https://wordpress.org/plugins/ldap-staff-directory)
* **Repositorio GitHub:** [github.com/carlosmmairena/ldap-staff-directory](https://github.com/carlosmmairena/ldap-staff-directory)

### Pasos finales
* Una vez activado, ve a **Ajustes → LDAP Directory**.
* Configura tus datos de conexión y usa el botón **Test Connection** para verificar que todo esté en orden.
* ¡Inserta el shortcode `[ldap_directory]` o usa el widget de tu constructor favorito y disfruta de la automatización! ⚡


## 🎨 Personalización a tu medida

No importa qué constructor uses, me he asegurado de que se vea bien.

### Shortcode sencillo

Usa `[ldap_directory]` donde quieras.  

¿Quieres algo más específico? Prueba esto:
`[ldap_directory fields="name,title" per_page="10" search="false"]`

### Constructores de páginas (En mejora constante) 👷‍♂️

* **Elementor:** Tienes un widget nativo con previsualización en vivo.
* **Beaver Builder:** Módulo nativo con previsualización en vivo para que veas los cambios mientras los haces.

---

## ⚙️ Detalles Técnicos (Para los que nos gusta el código)

He organizado el panel de administración en **Ajustes → LDAP Directory** para que sea intuitivo:

### Conexión y Seguridad

|  | Lo que necesitas saber |
| --- | --- |
| **Servidor y Puerto:** | La IP de tu servidor LDAP y el puerto { `ldap://` 👉🏽 puerto 389 y `ldaps://` 👉🏽 puerto 636 } |
| **Bind Password:** | Tu contraseña del servidor LDAP. Seguridad total en tu base de datos con **Cifrado XSalsa20** (vía libsodium). |
| **Test Connection:** | Un botón para saber cuántos usuarios encuentra antes de publicar nada. |

### Visualización y Rendimiento

* **Filtros:** Elige qué mostrar (email, cargo, departamento, teléfono).
* **Control de Caché:** Tú decides el tiempo de vida (TTL) de los datos para no sobrecargar el servidor.

*Configuración:*
![Opciones de pruebas en el plugin de wordpress](/images/posts/ldap-staff-directory/campos-plugin.png)


*Cómo se ve*
![Visualización del directori](/images/posts/ldap-staff-directory/example-directory.png)

---

## 🆕 Lo que ha mejorado desde el lanzamiento

Desde que lo lancé no he parado de recibir feedback (¡gracias! 🙏) y varias de esas conversaciones se convirtieron en funcionalidades reales:

* **Directorio por departamentos:** Ya no muestro un listado plano de golpe. Ahora tus visitantes ven primero un menú con los departamentos y cuántas personas hay en cada uno, y entran al que les interesa. Mucho más ordenado si tu organización tiene decenas o cientos de personas.
* **Ajustes más amigables:** Reorganicé todo en pestañas (Conexión, Empleados, Campos) con explicaciones en lenguaje sencillo junto a cada campo técnico — no necesitas saber qué es un `Bind DN` para configurarlo. Las opciones avanzadas quedan ocultas hasta que las necesitas.
* **"Copiar solicitud para TI":** Si administras el sitio pero no el servidor LDAP, este botón te arma un mensaje listo para copiar y pegar, pidiéndole al equipo de TI justo los datos de conexión que te faltan.
* **Orden de empleados a tu gusto:** Puedes decidir si se listan por nombre o por cargo, y en qué dirección — ascendente o descendente.
* **Control fino de departamentos:** Excluye los que no quieres mostrar (por ejemplo, cuentas de servicio o departamentos internos) y elige si el listado se ordena alfabéticamente o por cantidad de personas.
* **Campo de extensión telefónica:** Si usas una central telefónica (PBX/IP-PBX), ahora puedes mostrar el anexo de cada empleado junto a su teléfono.
* **Listo para directorios grandes:** Si tu LDAP tiene más de mil usuarios, el plugin ahora pagina las consultas del lado del servidor para no saturar la conexión ni tu sitio.

Como siempre, todo esto llega vía actualización automática desde el repositorio de plugins de WordPress — no tienes que hacer nada más que darle a "Actualizar" en tu instalación de WordPress. 🔄

---

## ❤️ Open Source y comunidad

Este proyecto es **GPLv2**; puedes usarlo, modificarlo y compartirlo libremente. Si te ahorra horas de trabajo y quieres apoyar el desarrollo, puedes invitarme a un café a través de **[GitHub Sponsors](https://github.com/sponsors/carlosmmairena)**. ¡Cualquier aporte ayuda muchísimo a seguir mejorando!
