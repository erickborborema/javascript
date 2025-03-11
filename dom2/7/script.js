function redimensionar() {
    let imagem = document.getElementById("imagem");
    let novoTamanho = Math.floor(Math.random() * (300 - 20 + 1)) + 20;   
    imagem.style.width = novoTamanho + "px";
}
