let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("mensaje");
function quitarError(){
    let x = document.querySelectorAll(".campo");
    let i;
    for( i = 0; i < x; i++){
        x[i].classList.remove('invalido');
    }
}
function contacto(){
    quitarError();
    if (nombre.value === ""){
        alert("Por favor, escriba su nombre");
        nombre.classList.add("invalido");
        nombre.focus();
        return;
    }
    if (apellido.value === ""){
        alert("Por favor, escriba su apellido");
        apellido.classList.add("invalido");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        alert("Por favor, escriba su correo electrónico");
        mail.classList.add("invalido");
        mail.focus();
        return;
    }
    const mailValido = mail =>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!mailValido(mail.value)){
        alert("Por favor, escriba su correo electrónico valido");
        mail.classList.add("invalido");
        mail.focus();
        return;
    }
    if ((mensaje.value === "" )){
        alert("Por favor, ingrese un mensaje");
        cantidad.classList.add("invalido");
        cantidad.focus();
        return;
    }
}
enviar.addEventListener('click', contacto)
function resetear(){
    quitarError();
    nombre.value="";
    apellido.value="";
    mail.value="";
    mensaje.value="";
}
limpiar.addEventListener('click', resetear)