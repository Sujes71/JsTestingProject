"use strict";
const zona = document.querySelector(".zona");

for (let i = 1; i < document.querySelector(".texturas").childElementCount + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart", (e) => transferTexture(i, e));
}

zona.addEventListener("dragover", (e) => e.preventDefault());
zona.addEventListener("drop", (e) => {
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("img/textura${n}.jpg")`
});

const transferTexture = (n, e) => {
    e.dataTransfer.setData("textura", n);

};