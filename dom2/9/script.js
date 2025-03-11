function trocarImagem(genero) {
    let imagem = document.getElementById(genero);
    imagem.style.display = "block"; // Exibe a imagem do pôster
}

function voltarImagem(genero) {
    let imagem = document.getElementById(genero);
    imagem.style.display = "none"; // Esconde a imagem do pôster
}