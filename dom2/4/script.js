let cores = ["green", "yellow", "blue"];
let indice = 0;

function mudarCor() {
    let texto = document.getElementById("texto");
    texto.style.color = cores[indice];
    indice = (indice + 1) % cores.length;
}