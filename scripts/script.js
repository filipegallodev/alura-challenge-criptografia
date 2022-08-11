var entradaTexto = document.querySelector("#criptografia-entrada");
var resultadoCriptografia = document.querySelector("#criptografia-resultado");
var botaoCriptografa = document.querySelector(".botao-criptografa");
var botaoDescriptografa = document.querySelector(".botao-descriptografa");

var textoOriginal = entradaTexto.value;
var textoCriptografado, textoDescriptografado = "";

function criptografaTexto() {

   textoCriptografado = trocaLetras(textoOriginal);

   resultadoCriptografia.value = textoCriptografado;
}

function descriptografaTexto() {

   textoDescriptografado = retornaLetra(textoCriptografado);

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

function retornaLetra(palavraCriptografada) {

   return palavraCriptografada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
}

botaoCriptografa.onclick = criptografaTexto;

botaoDescriptografa.onclick = descriptografaTexto;
