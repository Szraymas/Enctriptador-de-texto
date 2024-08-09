function encriptar(){
    let text = document.getElementById("text").value;
    let cajaEncriptado = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textCifrado = text
        .replace("a", "ai")
        .replace("e", "enter")
        .replace("i", "imes")
        .replace("o", "ober")
        .replace("u", "ufat");
    
    if (text.length != 0){
        document.getElementById("text").value = textCifrado;
        cajaEncriptado.textContent = textCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        imagen.textContent = imagen.remove();
    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Debes ingresar el texto que deseas encriptar";
        imagen.textContent = "";
    }
}

function desencriptar() {
    let text = document.getElementById("text").value;
    let cajaEncriptado = document.getElementById("presentacion__contenido__caja");
    let tituloMensaje = document.getElementById("titulo__mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textCifrado = text
        .replace("imes", "i")
        .replace("ai", "a")
        .replace("enter", "e")
        .replace("ober", "o")
        .replace("ufat", "u");

    if (text.length != 0){
        document.getElementById("text").value = textCifrado;
        cajaEncriptado.textContent = textCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        imagen.textContent = imagen.remove();

    } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Debes ingresar el texto que deseas desencriptar";
        imagen.textContent = "";
    }
}
