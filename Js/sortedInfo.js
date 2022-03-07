const materiasHTML = document.querySelector(".materias");

const materias = [
  {
    nombre: "Fisica",
    nota: 5,
  },
  {
    nombre: "Informatica",
    nota: 10,
  },
  {
    nombre: "Lengua",
    nota: 6,
  },
  {
    nombre: "Matemáticas",
    nota: 9,
  },
  {
    nombre: "Sociales",
    nota: 7,
  },
  {
    nombre: "Ingles",
    nota: 4,
  },
];

const obtenerMateria = (id) => {
  return new Promise((resolve, reject) => {
    materia = materias[id];
    if (materia == undefined) reject(new Error("La materia no es válida!"));
    else
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 400);
  });
};
const devolverMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await obtenerMateria(i);
    let newHTMLCode = `<div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
    materiasHTML.innerHTML += newHTMLCode;
  }
};
devolverMaterias();
