const copy = document.getElementById('copy');
const textArea = document.getElementById('textArea');
const textAreas = document.getElementById('textAreas');
const image = document.getElementById('miImagen');
const buttonEncript = document.getElementById('encript');
const buttonDesencript = document.getElementById('desencript');

function showText(){
    textAreas.style.display = 'none';
    copy.style.display = 'none';
}

copy.addEventListener('click', copyText);

function copyText(){
    textAreas.select();
    try {
        navigator.clipboard.writeText(textArea.value);
        alert('Texto copiado');
        console.log('Texto copiado');
        console.log(textArea.value);
    } catch (err) {
        console.error('Error al copiar al portapapeles', err);
    }
}

function toggleImageVisibility(textArea) {
    if (textArea.value.trim() !== '') {
        image.style.display = 'none';
        textAreas.style.display = 'block';
        copy.style.display = 'block';
    } else {
        image.style.display = 'block';
        textAreas.style.display = 'none';
        copy.style.display = 'none';
    }
}

function updateTextArea(sourceTextArea) {
    if (sourceTextArea.value.trim() !== '') {
        //let textoEncriptado = encriptarTexto(sourceTextArea.value);
        //textAreas.value = textoEncriptado;
    } else {
        textAreas.value = '';
    }
}

buttonEncript.addEventListener('click', function() {
    let textoEncriptado = encriptarTexto(textArea.value);
    textAreas.value = textoEncriptado;
    textArea.value = "";
});

textArea.addEventListener('input', function() {
    updateTextArea(this);
});

buttonDesencript.addEventListener('click', function() {
    let textoDesencriptado = desencriptarText(textAreas.value);
    textArea.value = textoDesencriptado;
});

function encriptarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');

    return texto;
}

function desencriptarText(texto) {
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');

    return texto;
}

showText();