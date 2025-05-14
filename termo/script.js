//chamando os elementos html
const letras = document.querySelector(".cotainer-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhateclado1")
const linhaTeclado2 = document.querySelector("#linhateclado2")
const linhaTeclado3 = document.querySelector("#linhateclado3")

//definindo as letras de cada linha 
teclasLinha1 = ["Q","W","E","R","T","Y","U","I","O","P"]
teclasLinha2 = ["A","S","D","F","G","H","J","K","L","Ç"]
teclasLinha3 = ["Z", "X", "C", "V", "B", "N", "M" ]

//define o número de tentativas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

//variável que guarda onde o jogador está atualmente
let linhaAtual = 0
let colunaAtual= 0

//define as palavras que podem ser
const palavrasSecretas = ["CARRO", "LÁPIS", "LIVRO", "PRATO", "COPOS", "FRUTA", "CASAR", "FESTA", "ROUPA", "AREIA", "MOUSE", "SALAS", "CARTA", "FOLHA", "TRIGO", "PIANO", "CAMPO", "VENTO", "PEDRA", "TIGRE"]
let mapaPalavra = {}
let palavraSecreta = [Math.floor(Math.random()
*palavrasSecretas * length)]

for(let i = 0; i < palavraSecreta.length; i+= 1){
    mapaPalavra[palavraSecreta[i]] = i
}

// Matriz onde as tentativas serao armazenadas
const palpites = []

// Cria as linhas
for(let l=0; 1 < linhas; l+=1) { //letra L minuscula
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id", "linha" + l)
    linhasLetras.setAttribute("class", "linha-letras")

// Cria as colunas
for(let c = 0; c < colunas; c+=1) {
    const colunaLetra = document.createElement ("div")
    colunaLetra.setAttribute("id", "linha", + l + "coluna" + c)
    colunaLetra.setAttribute("class", l == 0 ? "coluna-letra digitando":"coluna-letra")
    linhasLetras.append(colunaLetra)
    palpites[l][c] = "" //inicia vazio 
}
//adiciona a linha criada ao site
letras.append(linhasLetras)
}
//verifica se a palavra digitada está correta 
function verificarPalpite() {
    const palpite = palpites[linhaAtual].join("")
    if(palpite.length !== colunas) {
        return //se o palpite estiver incompleto ele não verifica
    }
    //pega a linha atual que estamos
    const colunaAtuais = document.querySelectorAll(".digitando")
    for(let i = 0; i < colunas; i += 1) {
        const letra = palpite[i]

        if(mapaPalavra[letra] == undefined) {
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra] == i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            colunaAtuais[i].classList.add("deslocada")
        }
    }
    if(palpite == palavraSecreta) {
        window.alert("Acertou! Parabéns") //se acertar a palavra
    } else if(linhaAtual == linhas - 1) {
        //se errar a palavra e acabar as tentativas 
        window.alert("Errou")
    } else {
        //se errar a palavra mas ainda tiver tentativas
        moverParaProximaLinha()
    }
}
//move para a proxima linha
function moverParaProximaLinha(){
    const colunaDigitando = document.querySelectorAll(".digitando")
    colunaDigitando.forEach(col => {
        col.classList.remove("digitando")
    })
    linhaAtual += 1 //avança para a proxima linha
    colunaAtual = 0 //reinicia a posição da coluna 
    //adiciona a classe digitando na proxima linha
    const novaLinha = document.querySelector("#linha"+linhaAtual)
    const novaColunas = novaLinha.querySelectorAll(".coluna-letra")
    novaColunas.forEach(col => {
        col.classList.add("digitando")
    })
}
//função que insere uma listra no palpite ao clicar na tela
function clicarTecla(tecla) {
    if (colunaAtual == colunas) {
        return //limita o número de linhas por letra
    }
    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letraAtual.textContent = tecla //mostra a letra clicada
    palpites[linhaAtual][colunaAtual] = tecla // salva a tecla escolhida
    colunaAtual += 1 //vai para o próximo espaço
}
//criando os botões do teclado virtual
function criarLinhaTeclado(teclas, container) {
    teclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent = tecla
        botao.setAttribute("id", tecla)
        //ao clicar adiciona a letra
        botao.addEventListener("click", () => clicarTecla(tecla))
        container.append(botao) //adiciona o botao
    })
}
//cria as tres linhas no teclado
criarLinhaTeclado(teclalinhas1, linhaTeclado1)
criarLinhaTeclado(teclalinhas2, linhaTeclado2)
criarLinhaTeclado(teclalinhas3, linhaTeclado3)