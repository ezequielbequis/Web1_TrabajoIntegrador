//-- Elementos del DOM --
//  -- Inputs --
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputAsunto = document.querySelector('#asunto');
const buttonEnviar = document.querySelector('#enviar');
//  -- TextoValidaciones --
const textNombre = document.querySelector('.nombreValidacion');
const textEmail = document.querySelector('.emailValidacion');
const textAsunto = document.querySelector('.asuntoValidacion');
//  -- Validacion del correo --
const emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Objeto de Validación
const validaciones = {
    nombre:  false,
    email: false,
    asunto: false,
};

//Funcion para mostrar mensajes
function mensajeError(clase, mensaje, color){
    const elemento = document.querySelector(clase);
    elemento.textContent = mensaje;
    elemento.style.color = color;
}

//Validacion en tiempor real
inputNombre.addEventListener("input", function(){
    const value = this.value.trim();
    if(value.length >= 10 && value.length <= 20){
        this.style.borderColor = "green";
        validaciones.nombre = true;
    }else{
        this.style.borderColor = "red";
        validaciones.nombre = false;
    }
});

inputEmail.addEventListener("input", function(){
    const value = this.value.trim();
    if(emailValidacion.test(value)){
        this.style.borderColor = "green";
        validaciones.email = true;
    }else{
        this.style.borderColor = "red";
        validaciones.email = false;
    }
});

inputAsunto.addEventListener("input",function(){
    const value = this.value.trim();
    if(value.length > 0){
        this.style.borderColor = "green";
        validaciones.asunto = true;
    }else{
        this.style.borderColor = "red";
        validaciones.asunto = false;
    }
});

buttonEnviar.addEventListener("click",function(){
    textNombre.innerHTML = "";
    textEmail.innerHTML = "";
    textAsunto.innerHTML = "";
    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const asunto = inputAsunto.value.trim();

    //Mensajes para Nombre
    if(nombre === ""){
        mensajeError('.nombreValidacion','El casillero Nombre esta vacio.','red');
    }else if(nombre.length < 10){
        mensajeError('.nombreValidacion','El Nombre debe ser Mayor a 10 caracteres.','red');
    }else if(nombre.length > 20){
        mensajeError('.nombreValidacion','El Nombre debe ser Menor a 20 caracteres.','red');   
    }

    //Mensajes para Email
    if(email === ""){
        mensajeError('.emailValidacion','El casillero Email esta vacio.','red');
    }else if(!emailValidacion.test(email)){
        mensajeError('.emailValidacion','El formato del email es incorrecto.','red');
    }

    //Mensaje para Asuntos

    if(asunto === ""){
        mensajeError('.asuntoValidacion','El casillero Asuntos esta vacio.','red');
    }

});