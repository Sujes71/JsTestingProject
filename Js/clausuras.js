"use strict"

const cambiarTam = tam => {
    return () => {
        document.querySelector(".texto").style.fontSize = `${tam}px`;
    }
};

const px12 = cambiarTam(12);
const px14 = cambiarTam(14);
const px16 = cambiarTam(16);

document.querySelector(".btn-1").addEventListener("click", px12);
document.querySelector(".btn-2").addEventListener("click", px14);
document.querySelector(".btn-3").addEventListener("click", px16);
