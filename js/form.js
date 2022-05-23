function mostrarErrorCampo (campo){
    Swal.fire({
        icon: 'error',
        title: 'Error!!',
        text: 'Complete el campo' +  campo,
        confirmButtontext: 'Aceptar'
      })

}

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let localidad = document.getElementById("localidad").value;
    let provincia = document.getElementById("provincia").value;
    

    if (nombre.length == 0) {
        mostrarErrorCampo (" Nombre")
        return false;
    } 
    
    if (email.length == 0) {
        mostrarErrorCampo (" Email")
        return false;
    } else if (email.indexOf("@") == -1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!!',
            text: 'Coloque un Email valido',
            confirmButtontext: 'Aceptar'
          })
         return false;
    } 
 
     if ((telefono.length == 0)) {
        mostrarErrorCampo (" Telefono")
        return false;
    }

   if (direccion.length == 0) {
    mostrarErrorCampo (" Direccion")
       return false;
    } 
 
    //Creo un objeto con los datos del usuario
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email, usuario_telefono:telefono, usuario_direccion:direccion, usuario_localidad:localidad, usuario_provincia:provincia};
    //Creo una localStorage con los datos del formulario en un array
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));
    //Redireccionar mi pagina carrito.html a confirmacion.html
    document.location = "confirmacion.html";
}

document.getElementById("boton_enviar").addEventListener("click", validarFormulario);