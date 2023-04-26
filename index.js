function encriptar(){
   var frase = document.getElementById("texto").value.toLowerCase();

   var textoEncriptado = frase.replace(/e/img,"enter");
   var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
   var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
   var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
   var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    document.getElementById("mensaje").innerHTML = textoEncriptado;
    document.getElementById("texto").value ="";
   var mensajetitulo = document.getElementById("titulo-mensaje");
   mensajetitulo.textContent = "Texto encriptado con éxito";
   var mensajeparrafo = document.getElementById("parrafo");
    mensajeparrafo.textContent = "";
}
function desencriptar(){
    var frase = document.getElementById("texto").value.toLowerCase();

   var textoEncriptado = frase.replace(/enter/img,"e");
   var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
   var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
   var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
   var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    document.getElementById("mensaje").innerHTML = textoEncriptado;
    document.getElementById("texto").value ="";
    var mensajetitulo = document.getElementById("titulo-mensaje");
   mensajetitulo.textContent = "Texto desencriptado con éxito";
}
function copiar(){
    var contenido = document.querySelector("#mensaje");
    contenido.select();
    document.execCommand("copy");

}

/**/