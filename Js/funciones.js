"use strict";

export const suma = (a, b) => a + b;

export const sumarArray = (array) => {
    let suma = 0;
    for (const i of array) {
        suma += i;
    }
    return suma;
};