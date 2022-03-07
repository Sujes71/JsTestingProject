const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const submit = document.getElementById("submit");
const result = document.querySelector(".result");

submit.addEventListener("click", (e)=>{
    let error = validar();  
    if(error[0]){
        e.preventDefault();
        result.innerHTML = error[1];
        result.classList.add("red");
    }else{
        result.innerHTML = "Solicitud enviada correctamente";
        result.classList.add("green");
        result.classList.remove("red");
    }
});
/*
!hola pepe

*/
const validar = () =>{
        let error = [];
        if(nombre.value.length < 5 || nombre.value.length > 40){
            error[0] = true;
            error[1] = "El nombre es inválido";
            return error;
        }
        else if(email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1 ||
                email.value.endsWith(".")){
            error[0] = true;
            error[1] = "El email es inválido";
            return error;
            }
        else if(materia.value.length < 4 ||materia.value.length > 40){
            error[0] = true;
            error[1] = "La materia no existe";
            return error;
        }
        error[0] = false;
        return error;
    }