var entradaTexto = document.querySelector(".criptografia-entrada");
var botaoCriptografa = document.querySelector(".botao-criptografa");

var textoPuro = entradaTexto.value;
var textoCriptografado = "";

function criptografaTexto() {

   for (var posicao = 0; posicao < textoPuro.length; posicao++) {

      var letraOriginal = textoPuro[posicao];
      var letraConvertida = converteLetra(letraOriginal);
      textoCriptografado = textoCriptografado.concat(letraConvertida);
   }
   alert(textoCriptografado);
   alert(textoPuro);
}

function converteLetra(letraOriginal) {

   if (letraOriginal == "a") {

      return "ai";
   }
   else if (letraOriginal == "e") {

      return "enter";
   }
   else if (letraOriginal == "i") {

      return "imes";
   }
   else if (letraOriginal == "o") {

      return "ober";
   }
   else if (letraOriginal == "u") {

      return "ufat";
   }
   else {

      return letraOriginal;
   }
}

function descriptografaTexto() {

   
}

function desconverteLetra() {


}

botaoCriptografa.onclick = criptografaTexto;


/*
   textoPuro = textoPuro.replace('a', 'ai');
   textoPuro = textoPuro.replace('e', 'enter');
   textoPuro = textoPuro.replace('i', 'imes');
   textoPuro = textoPuro.replace('o', 'ober');
   textoPuro = textoPuro.replace('u', 'ufat');
*/

/*
textoPuro = textoPuro.replace('ai', 'a');
textoPuro = textoPuro.replace('enter', 'e');
textoPuro = textoPuro.replace('imes', 'i');
textoPuro = textoPuro.replace('ober', 'o');
textoPuro = textoPuro.replace('ufat', 'u');
*/