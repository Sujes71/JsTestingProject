"use strict";
//!Usos como al cambiar de pestaña se pause un vide, lo mismo con un juego etc...
//*visibilityChange
addEventListener("visibilitychange", (e) => {
    if (e.target.visibilityState == "visible") {
        document.write("Cambiaste de pestaña jo...");
    } else alert("Bienvenido de vuelta");
});
//!Sirve para enviar y manejar notificaciones de
//*Notifications

if (!('Notification' in window)) {
    console.log("No estan en tu navegador");
}

Notification.requestPermission(() => {
    if (Notification.permission == "granted") {
        console.log("Permiso aceptado!");
    }
});
new Notification("First Notification!");