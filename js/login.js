/* crear diccionario con clave y valor */
var dic = {
    "silvaguille@gmail.com": "moveflix",
    "codoacodo@gmail.com": "moveflix",
    "admin@gmail.com": "moveflix"
};

function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email == "moveflix@gmail.com" && password == "moveflix"){
        /* abrir en la misma ventana la pagina principal */
        window.open("index.html", "_self");
        return false;
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}