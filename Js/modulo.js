//!De esta manera se puede importar completo otro js sin necesidad de hacerlo 1 por 1
import * as funct from './funciones.js';
//!De esta manera se importa una función concreta de otro js y no hace falta llamarla
//!desde un as como se hace en la anterior
import { suma } from './funciones.js';

//*Se llama a suma directamente puesto que se ha importado directamente.
const sumado = suma(5, 5);
//*Se llama a sumarArray desde funct que es el nombre que le pusimos en as para invocarla.
const sumadoArray = funct.sumarArray([4, 2, 3, 4, 5, 6, 7]);

console.log(sumadoArray)
console.log(sumado)