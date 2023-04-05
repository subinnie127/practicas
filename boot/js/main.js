var correo = document.getElementById("email");
var sede = document.getElementById("sede");
var detalle = document.getElementById("detalle");
var error = document.getElementById("error");

function enviar(){
    console.log('Enviando datos desde js');

    var mensaje = [];
    if (correo.value===null || correo.value===''){
        mensaje.push('Debe ingresar un correo');
}
    if (sede.value===null || sede.value===''){
        mensaje.push('Debe seleccionar una sede');
}
    if (detalle.value===null || detalle.value===''){
        mensaje.push('Debe ingresar un mensaje');
}
error.innerHTML=mensaje.join(', ');


    return false;
}