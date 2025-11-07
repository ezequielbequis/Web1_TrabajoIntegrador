//-- Elementos del DOM --
//  -- Inputs --
const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputTelefono = document.querySelector('#telefono');
const inputAsunto = document.querySelector('#asunto');
const buttonEnviar = document.querySelector('#enviar');
//  -- TextoValidaciones --
const textNombre = document.querySelector('.nombreValidacion');
const textEmail = document.querySelector('.emailValidacion');
const textTelefono = document.querySelector('.telefonoValidacion');
const textAsunto = document.querySelector('.asuntoValidacion');

//  -- Validacion del correo y telefono / Expresion Regular --
const emailValidacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoValidacion = /^\+?[1-9]\d{1,14}$/;

//Objeto de Validación
const validaciones = {
    nombre:  false,
    email: false,
    telefono: true,
    asunto: false,
};

//Funcion para mostrar mensajes
function mensajeError(clase, mensaje, color){
    const elemento = document.querySelector(clase);
    elemento.textContent = mensaje;
    elemento.style.color = color;
}

//-- Validacion en tiempor real--

//-- Nombre --
inputNombre.addEventListener("input", function(){
    textNombre.innerHTML="";
    const value = this.value.trim();
    if(value.length >= 10 && value.length <= 20){
        this.style.borderColor = "green";
        validaciones.nombre = true;
    }else{
        this.style.borderColor = "red";
        validaciones.nombre = false;
    }
});

//-- Correo Electronico / Email
inputEmail.addEventListener("input", function(){
    textEmail.innerHTML = "";
    const value = this.value.trim();
    if(emailValidacion.test(value)){
        this.style.borderColor = "green";
        validaciones.email = true;
    }else{
        this.style.borderColor = "red";
        validaciones.email = false;
    }
});

//-- Telefono --
inputTelefono.addEventListener("input",function(){
    textTelefono.innerHTML ="";
    const value = this.value.trim();
    if(telefonoValidacion.test(value)){
       this.style.borderColor = "green";
       validaciones.telefono = true;
    }else{
        this.style.borderColor = "red";
        validaciones.telefono = false;
    }
});

//-- Asunto --
inputAsunto.addEventListener("input",function(){
    textAsunto.innerHTML = "";
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
    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const telefono = inputTelefono.value.trim();
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

    //Mensajes para Telefono
    if(telefono === ""){
        mensajeError('.telefonoValidacion','El casillero Telefono esta vacio.','red');
    }else if(!telefonoValidacion.test(telefono)){
        mensajeError('.telefonoValidacion', 'El formato del telefono es incorrecto.','red');
    }

    //Mensaje para Asuntos
    if(asunto === ""){
        mensajeError('.asuntoValidacion','El casillero Asuntos esta vacio.','red');
    }

});