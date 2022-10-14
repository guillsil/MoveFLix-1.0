/* crear diccionario con clave y valor */
var dic = {
    "silvaguille@gmail.com": "moveflix",
    "codoacodo@gmail.com": "moveflix",
    "admin@gmail.com": "moveflix"
};
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
/* funciones para validar el foemulario */
