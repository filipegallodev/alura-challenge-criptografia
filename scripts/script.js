var entradaTexto = document.querySelector("#criptografia-entrada");
var resultadoCriptografia = document.querySelector("#criptografia-resultado");
var botaoCriptografa = document.querySelector(".botao-criptografa");
var botaoDescriptografa = document.querySelector(".botao-descriptografa");

var textoCriptografado, textoDescriptografado = "";

function criptografaTexto() {

   textoCriptografado = trocaLetras(entradaTexto.value);

   limpaArea();
   resultadoCriptografia.value = textoCriptografado;
}

function descriptografaTexto() {

   textoDescriptografado = retornaLetras(entradaTexto.value);

   resultadoCriptografia.value = textoDescriptografado;
}

function trocaLetras(textoOriginal) {

   return textoOriginal
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
}

function retornaLetras(palavraCriptografada) {

   return palavraCriptografada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

function limpaArea() {

   textoOriginal = "";
   entradaTexto.value = "";
}

botaoCriptografa.onclick = criptografaTexto;

botaoDescriptografa.onclick = descriptografaTexto;
