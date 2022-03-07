"use strict";

const worker = new Worker("Js/codeWorker.js");
document.querySelector(".button").addEventListener("click", () => loadData(".loadResults"));

//!https://youtu.be/EbMi1Qj4rVE?t=23500
//*Básicamente sirve para en otro script se permitan hacer cosas simultaneamente a la carga de datos
//*dado que el worker principal esta ocupado.
