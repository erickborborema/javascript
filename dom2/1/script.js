function alternarImagem() {
    let imagem = document.getElementById("imagem");
    if (imagem.style.display === "none") {
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }
}