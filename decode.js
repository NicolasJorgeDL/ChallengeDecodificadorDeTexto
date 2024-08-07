
function TextoVazio(texto){
    if (texto == ""){
        document.getElementById("texto_resultante").value = "Digite o texto para ser criptografado ou descriptografado";
        return true;
    }
    return false;
}

function TextoValido(texto){
    if (TextoVazio(texto)){
        return false;
    }
    if (/[^a-z\s]/.test(texto)){
        document.getElementById("texto_resultante").value = "O texto está invalido, por favor altere o texto para apenas conter letras minúsculas e sem acento.";
        return false;
    }
    return true;
}

function CifraVigenere(texto, criptografar){
    const chave = "laranjabananamaca";
    var chaveExpandida = chave.repeat(Math.ceil(texto.length / chave.length));
    chaveExpandida = chaveExpandida.substring(0, texto.length);

    if (criptografar){      
        return texto.split('').map((char, i) => {
            if (char >= 'a' && char <= 'z') { 
              const code = char.charCodeAt(0);
              const deslocamento = chaveExpandida[i].charCodeAt(0) - 97; 
        
              return String.fromCharCode(((code - 97 + deslocamento) % 26) + 97);
            }
            return char;
          }).join('');
    }else {
        return texto.split('').map((char, i) => {
            if (char >= 'a' && char <= 'z') {
              const code = char.charCodeAt(0);
              const deslocamento = chaveExpandida[i].charCodeAt(0) - 97; 
        
              return String.fromCharCode(((code - 97 - deslocamento + 26) % 26) + 97);
            }

            return char;
          }).join('');
    }
}


function CriptografiaSecreta(texto, criptografar){
    
    if (criptografar){
        return texto.split('').map((char, i) =>{
            if (char == 'e'){
                return 'enter';
            }
            if (char == 'i'){
                return 'imes';
            }
            if (char == 'a'){
                return 'ai';
            }
            if (char == 'o'){
                return 'ober';
            }
            if (char == 'u'){
                return 'ufat';
            }
            return char;
        }).join('');   
    }else {
        var textoTraduzido = texto.replace(/enter/g,"e");
        textoTraduzido = textoTraduzido.replace(/imes/g,"i");
        textoTraduzido = textoTraduzido.replace(/ai/g,"a");
        textoTraduzido = textoTraduzido.replace(/ober/g,"o");
        textoTraduzido = textoTraduzido.replace(/ufat/g,"u");
        return textoTraduzido;
    }
}

function Criptografar(){
    var texto = document.getElementById("texto_entrada").value;
    if (!TextoValido(texto)){
        return false;
    }

    let textoCriptografado = CriptografiaSecreta(texto, true);

    document.getElementById("texto_resultante").value = textoCriptografado;
}

function Descriptografar(){
    var texto = document.getElementById("texto_entrada").value;
    if (!TextoVazio(texto)){
        console.log(texto)
        document.getElementById("texto_resultante").value = CriptografiaSecreta(texto, false);
    }
}

