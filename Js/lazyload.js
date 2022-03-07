"use strict";

const publicaciones = document.querySelector(".publicaciones");

const createPublicationCode = (name, content) => {
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("P");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder", "Comentario...");
    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const charge = (entry) => {
    if (entry[0].isIntersecting) loadPublications(4);
}

const observer = new IntersectionObserver(charge);

let contador = 0;
let flag = true;
const loadPublications = async num => {
    const request = await fetch("lazyload.txt");
    const content = await request.json();
    const arr = content.content;
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < num; i++) {
        if (arr[contador] != undefined) {
            const publication = createPublicationCode(arr[contador].nombre, arr[contador].contenido);
            fragment.appendChild(publication);
            contador++;
            if (i == num - 1) observer.observe(publication);
        } else {
            if (flag) {
                let noMore = document.createElement("H3");
                noMore.textContent = "NO HAY MAS PUBLICACIONES";
                fragment.appendChild(noMore);
                flag = false;
            }
            break;
        }
    }
    publicaciones.appendChild(fragment);
}
loadPublications(5)