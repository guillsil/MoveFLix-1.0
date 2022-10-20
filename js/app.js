
/* scrip para verificar el login */
function validate(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "moveflix@gmail.com" && password == "moveflix"){
        window.open("index.html", "_self");
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}
/* boton de alerta de pagina no disponible */
function mostrar(){
    swal({
        title: "Lo sentimos",
        text: "Este contenido no esta disponible en tu pais",
        icon: "warning",
        button: "Aceptar",
    });
}
function mostrar2(){
    swal({
        title: "Registro exitoso",
        text: "Ya puedes iniciar sesion, con el usuario y contraseña que te proporcionaremos",
        icon: "success",
        button: "Aceptar",
    });
}
/* funciones para validar el foemulario */
function validar(){
    /* validar el usuario */
    if (document.fvalida.usuario.value.length == 0){
        alert("Por favor ingrese su Usuario");
        document.fvalida.usuario.focus();
        return false;
    }
    /* validar el nombre */
    if (document.fvalida.nombre.value.length == 0){
        alert("Por favor ingrese su nombre");
        document.fvalida.nombre.focus();
        return false;
    }
    /* validar la contraseña */
    if (document.fvalida.password.value.length == 0){
        alert("Por favor ingrese su contraseña");
        document.fvalida.password.focus();
        return false;
    }
    /* validar la confirmacion de la contraseña */
    if (document.fvalida.password2.value.length == 0 || document.fvalida.password2.value != document.fvalida.password.value){
        alert("Por favor confirme su contraseña");
        document.fvalida.password2.focus();
        return false;
    }
    /* validar el correo */
    if (document.fvalida.correo.value.length == 0 || document.fvalida.correo.value.indexOf("@") == -1){
        alert("Por favor ingrese su correo");
        document.fvalida.correo.focus();
        return false;
    }
    /* validar el telefono */
    if (document.fvalida.telefono.value.length > 0 && document.fvalida.telefono.value.length <= 11 && isNaN(document.fvalida.telefono.value)){
        alert("Por favor ingrese su telefono");
        document.fvalida.telefono.focus();
        return false;
    }
    /* validar la aceptacion de los terminos y condiciones*/
    if (document.fvalida.terminos.checked == false){
        alert("Por favor acepte los terminos y condiciones");
        document.fvalida.terminos.focus();
        return false;
    }
    mostrar2();
    /* redirigir al la pantalla principal */
    window.open("index.html", "_self");
    return true;
}

//Funcion Formulario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "inicio de sesion exitoso",
      text: "Bienvenido a MoveFlix",
      icon: "success",
    });
  }
}


