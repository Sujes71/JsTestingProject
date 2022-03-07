"use strict";

let min = document.querySelector(".min");

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
};
const updateWatch = () => {
    const time = new Date();
    min.innerHTML = addZeros(time.getMinutes());
    min.nextElementSibling.innerHTML = addZeros(time.getSeconds());
    min.previousElementSibling.innerHTML = addZeros(time.getHours());
};
setInterval(updateWatch, 1000);