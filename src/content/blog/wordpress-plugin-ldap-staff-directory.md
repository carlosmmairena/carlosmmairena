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

La verdad me emociona mucho compartir esta creación 😄

## 💡 ¿Para quién es este plugin?

Si te encuentras en alguna de estas situaciones, este plugin te va a encantar:
* **Intranets corporativas:** Muestra a tus empleados directamente desde Active Directory sin duplicar ni un solo dato. 🏢
* **Universidades y organismos:** Publica el listado de docentes o funcionarios desde OpenLDAP o Samba sin esfuerzo. 🎓
* **Agencias de desarrollo:** Dale a tus clientes una solución profesional usando Elementor o Beaver Builder con un par de clics. 🛠️
* **Entornos Multisite:** Cada sitio puede tener su propia configuración y filtrar por unidades organizativas (OU) específicas.  


## 🛠️ ¿Qué hace a este plugin diferente?

No es solo un conector; es una herramienta pensada para que no pierdas tiempo en configuraciones complejas de servidor.

* **Sincronización total:** Consulta los datos y los renderiza en tarjetas con búsqueda y paginación.
* **Seguridad:** La contraseña de tu cuenta de servicio LDAP se resguarda de forma segura. Implementé el **Cifrado XSalsa20-Poly1305** para protegerla en reposo, derivando claves dinámicamente de tus salts de WordPress. 🔒
* **Caché inteligente:** Si tu servidor LDAP se cae un momento, ¡no pasa nada! El plugin sirve los datos almacenados para que tus usuarios no vean un error. ⚡
* **Cero complicaciones:** Soporta certificados autofirmados (puedes subir tu propio `.pem` o `.crt`) y filtra automáticamente las cuentas deshabilitadas de AD.


## 🎨 Personalización a tu medida

No importa qué constructor uses, me he asegurado de que se vea bien.

### Shortcode sencillo

Usa `[ldap_directory]` donde quieras.  

¿Quieres algo más específico? Prueba esto:
`[ldap_directory fields="name,title" per_page="10" search="false"]`

### Constructores de páginas (En mejora constante) 👷‍♂️

* **Elementor:** Tienes un widget nativo con controles de colores, tipografías, sombras y bordes.
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


## 🔥 Instalación rápida

1. Descarga el plugin desde mi 📥 **[repo en GitHub](https://github.com/carlosmmairena/ldap-staff-directory)**.
2. Súbelo a tu carpeta de plugins y actívalo.
3. Configura tus datos en **Ajustes → LDAP Directory**.
4. ¡Listo! Usa el shortcode o el widget y disfruta de tu directorio automatizado.

> **Nota:** Estamos trabajando para que pronto esté disponible en la tienda oficial de **WordPress.org**. ¡Estate atento!

---

## ❤️ Open Source y comunidad

Este proyecto es **GPLv2**; puedes usarlo, modificarlo y compartirlo libremente. Si te ahorra horas de trabajo y quieres apoyar el desarrollo, puedes invitarme a un café a través de **[GitHub Sponsors](https://github.com/sponsors/carlosmmairena)**. ¡Cualquier aporte ayuda muchísimo a seguir mejorando!
