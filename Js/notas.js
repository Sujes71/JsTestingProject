const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", () => {
  let result, msg;
  try {
    prevRes = parseInt(document.getElementById("nota").value);
    if (isNaN(prevRes)) {
      throw new Error("Cagaste wey");
    }
    msg = definirMensaje(prevRes);
    result = verificarAprobacion(8, 5, prevRes);
  } catch (e) {
    result = "¿Vas de gracioso?";
    msg = "He descubierto que intentaste hackear el sitio";
  }
  abrirModal(result, msg);
});

const abrirModal = (result, msg) => {
  document.querySelector(".result").innerHTML = result;
  document.querySelector(".msg").innerHTML = "Tu prueba: " + msg;
  let modal = document.querySelector(".modal-background");
  modal.style.display = "flex";
  modal.style.animation = "aparecer 1s forwards";
};
const definirMensaje = (pr) => {
  let result;
  switch (pr) {
    case 0:
      result = "F";
      break;
    case 1:
      result = "Eres un inútil";
      break;
    case 2:
      result = "Eres terrible";
      break;
    case 3:
      result = "Eres muy malo";
      break;
    case 4:
      result = "Eres malo en esto";
      break;
    case 5:
      result = "Eres mediocre pero suficiente";
      break;
    case 6:
      result = "Eres decente";
      break;
    case 7:
      result = "No está mal";
      break;
    case 8:
      result = "Esta muy bien amigo";
      break;
    case 9:
      result = "Eres excelente en mi materia";
      break;
    case 10:
      result = "Eres brutal en esto";
      break;
    default:
      result = null;
      break;
  }
  return result;
};
const verificarAprobacion = (nota1, nota2, prevRes) => {
  promedio = (nota1 + nota2 + prevRes) / 3;
  if (promedio >= 7) {
    return "<span class = 'green'>APROBADO</span>";
  }
  return "<span class = 'red'>SUSPENSO</span>";
};
