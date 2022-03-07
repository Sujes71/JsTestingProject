"use strict";

const IDBRequest = indexedDB.open("database", 1);

IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
    });
});

IDBRequest.addEventListener("success", () => {
    console.log("Éxito al cargar la base de datos!");
});
IDBRequest.addEventListener("error", () => {
    console.log("Error al cargar la base de datos!");
});

document.getElementById("add").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible") != undefined) {
            if (confirm("Hay elementos sin guardar. ¿Desea continuar?")) {
                addObjeto({ nombre });
                leerObjetos();
            }
        } else {
            addObjeto({ nombre });
            leerObjetos();
        }
    }
});

const addObjeto = obj => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].add(obj);
    IDBData[1].addEventListener("complete", () => console.log("AÑADIDO SATISFACTORIAMENTE!"));
};
const leerObjetos = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment);
    });
}
//!Modificar es igual que add pero con put
const modificarObjeto = (key, obj) => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].put(obj, key);
    IDBData[1].addEventListener("complete", () => console.log("MODIFICADO CORRECTAMENTE!"));
};
//!Eliminar es igual que add pero solo recibe como parámetro el key y usa delete.
const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].delete(key);
    IDBData[1].addEventListener("complete", () => console.log("ELIMINADO CORRECTAMENTE!"));
};
//*Todo se puede simplificar simplemente utilizando IDBData[0] para el objetStore y IDBData[1] para la transiccion.

const getIDBData = (type) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", type);
    const objectStore = IDBtransaction.objectStore("nombres");
    return [objectStore, IDBtransaction];
}

const nombresHTML = (id, name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("H2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("BUTTON");
    const deleteButton = document.createElement("BUTTON");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    h2.setAttribute("spellcheck", "false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", () => {
        saveButton.classList.replace("imposible", "posible");
    });

    saveButton.addEventListener("click", () => {
        if (saveButton.className == "posible") {
            modificarObjeto(id, { nombre: h2.textContent });
            saveButton.classList.replace("posible", "imposible");
        }
    });

    deleteButton.addEventListener("click", () => {
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    });

    //!VIDEO CONTENEDOR: https://youtu.be/EbMi1Qj4rVE?t=17828
    return container;
}
addEventListener("load", () => leerObjetos());

document.addEventListener('keypress', (e) => {
    if (e.code == "Enter") {
        document.getElementById("add").click();
    }
});
