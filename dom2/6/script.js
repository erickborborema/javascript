function escolherPorta(porta) {
    let imagem = document.getElementById("imagem");
    imagem.style.display = "block";  // Exibe a imagem de resultado

    if (porta === 1) {
        alert("Você ganhou um carro!");
        imagem.src = "1.png"; // Substitua com o caminho da imagem do carro
    } else if (porta === 2) {
        alert("Você não ganhou nada!");
        imagem.src = "2.png"; // Substitua com o caminho da imagem de uma caixa vazia
    } else if (porta === 3) {
        alert("Parabéns, você encontrou o tesouro!");
        imagem.src = "3.png"; // Substitua com o caminho da imagem do tesouro
    }
}