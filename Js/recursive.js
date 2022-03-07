"use strict";

const funct = (msg) => {
    let dorsal = 30;
    let num;
    try {
        if (msg) num = prompt(msg);
        else num = prompt('Introduce el dorsal de Stephen Curry');
        num = parseInt(num);
        if (isNaN(num)) throw new Error('Introduce un valor númerico válido');
        if (dorsal == num) console.log("HAS ACERTADO EL DORSAL DEL CHEF CURRY");
        else throw new Error('Ese no es el número de Steph...');
    }
    catch (e) { funct(e); }
};
funct()