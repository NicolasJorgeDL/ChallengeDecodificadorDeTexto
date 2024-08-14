function TextoVazio(texto) {
  if (texto == "") {
    document.getElementsByClassName("resultado__card")[0].innerHTML =
      '<img class="resultado__img" src="/assets/Imagen-nenhuma-mensagem.svg"><h3 class="resultado__card__destaque">Nenhuma mensagem encontrada</h3><p class="resultado__card__texto">Digite um texto que você deseja criptografar ou descriptografar.</p>';
    return true;
  }
  return false;
}

function TextoValido(texto) {
  if (TextoVazio(texto)) {
    return false;
  }
  if (/[^a-z\s]/.test(texto)) {
    document.getElementsByClassName("resultado__card")[0].innerHTML =
      '<img class="resultado__img" src="/assets/Imagen-nenhuma-mensagem.svg"><h3 class="resultado__card__destaque">Mensagem invalida</h3><p class="resultado__card__texto">O texto está invalido, por favor altere o texto para apenas conter letras minúsculas e sem acento.</p>';
    return false;
  }
  return true;
}

function CriptografiaSecreta(texto, criptografar) {
  if (criptografar) {
    return texto
      .split("")
      .map((char, i) => {
        if (char == "e") {
          return "enter";
        }
        if (char == "i") {
          return "imes";
        }
        if (char == "a") {
          return "ai";
        }
        if (char == "o") {
          return "ober";
        }
        if (char == "u") {
          return "ufat";
        }
        return char;
      })
      .join("");
  } else {
    var textoTraduzido = texto.replace(/enter/g, "e");
    textoTraduzido = textoTraduzido.replace(/imes/g, "i");
    textoTraduzido = textoTraduzido.replace(/ai/g, "a");
    textoTraduzido = textoTraduzido.replace(/ober/g, "o");
    textoTraduzido = textoTraduzido.replace(/ufat/g, "u");
    return textoTraduzido;
  }
}

function Criptografar() {
  var texto = document.getElementsByClassName("texto_entrada")[0].value;
  if (!TextoValido(texto)) {
    return false;
  }
  let textoCriptografado = CriptografiaSecreta(texto, true);
  document.getElementsByClassName("resultado__card")[0].innerHTML =
    '<textarea class="resultado__texto" wrap="hard" readonly>' +
    textoCriptografado +
    '</textarea><button class= "resultado__button_copiar" onclick="CopiarTextoResultado()">Copiar</button>';
}

function Descriptografar() {
  var texto = document.getElementsByClassName("texto_entrada")[0].value;
  if (!TextoValido(texto)) {
    return false;
  }
  let textoDescriptografado = CriptografiaSecreta(texto, false);
  document.getElementsByClassName("resultado__card")[0].innerHTML =
    '<textarea class="resultado__texto" wrap="hard" readonly>' +
    textoDescriptografado +
    '</textarea><button class= "resultado__button_copiar" onclick="CopiarTextoResultado()">Copiar</button>';
}

// O comando execCommand foi descontinuado, então ele vai ser apenas utilizado quando não tiver a permissão para acessar o clipboard, permitindo funcionar na maioria dos navegadores
function CopiarTextoResultado() {
  let texto = document.getElementsByClassName("resultado__texto")[0].value;
  if (!navigator.clipboard) {
    document.getElementsByClassName("resultado__texto")[0].select();
    document.execCommand("copy");
  } else {
    navigator.clipboard.writeText(texto);
  }
}
