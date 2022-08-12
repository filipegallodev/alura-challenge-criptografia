var entradaTexto = document.querySelector("#criptografia-entrada");
var resultadoCriptografia = document.querySelector("#criptografia-resultado");

var botaoCriptografa = document.querySelector(".botao-criptografa");
var botaoDescriptografa = document.querySelector(".botao-descriptografa");
var botaoCopiar = document.querySelector(".copia-resultado");

resultadoCriptografia.value = "Nenhuma mensagem encontrada...";

var textoCriptografado, textoDescriptografado = "";

function criptografaTexto() {

   textoCriptografado = trocaLetras(entradaTexto.value.toLowerCase());

   limpaArea();
   resultadoCriptografia.value = textoCriptografado;
}

function descriptografaTexto() {

   textoDescriptografado = retornaLetras(entradaTexto.value);

   limpaArea();
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

function copiaResultado() {

   resultadoCriptografia.select();
   document.execCommand("copy");
}

botaoCriptografa.onclick = criptografaTexto;
botaoDescriptografa.onclick = descriptografaTexto;
botaoCopiar.onclick = copiaResultado;
