//cada pergunta tem: uma pergunta, as opções e, alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Qual é a principal função do sistema respiratório humano?",
        opcoes: ["Bombear sangue para o corpo", "Produzir hormônios", "Trocar gases com o ambiente", "Digestionar alimentos"],
        correta: 2
    },
    {
        pergunta: "Qual planeta do sistema solar é conhecido como 'planeta vermelho'?",
        opcoes: ["Júpiter", "Vênus", "Marte", "Saturno"],
        correta: 2
    },
    {
        pergunta: "A fotossíntese é um processo realizado principalmente por:",
        opcoes: ["Animais", "Fungos", "Plantas", "Vírus"],
        correta: 2
    },
    {
        pergunta: "Qual dessas opções representa um exemplo de energia renovável?",
        opcoes: ["Carvão mineral", "Petróleo", "Gás natural", "Energia solar"],
        correta: 3
    },
    {
        pergunta: "A água é composta por quais elementos químicos?",
        opcoes: ["Oxigênio e carbono", "Hidrogênio e oxigênio", "Nitrogênio e hidrogênio", "Carbono e nitrogênio"],
        correta: 1
    },
    {
        pergunta: "Em qual parte da célula ocorre a respiração celular?",
        opcoes: ["Núcleo", "Ribossomo", "Mitocôndria", "Lisossomo"],
        correta: 2
    },
    {
        pergunta: "Qual é a unidade de medida usada para expressar a força?",
        opcoes: ["Metro", "Newton", "Watt", "Pascal"],
        correta: 1
    },
    {
        pergunta: "O que é necessário para que ocorra uma combustão?",
        opcoes: ["Água, calor e vento", "Oxigênio, combustível e calor", "Luz, ar e metal", "Gás, terra e eletricidade"],
        correta: 1
    },
    {
        pergunta: "O que acontece com a água ao atingir 100 °C ao nível do mar?",
        opcoes: ["Ela congela", "Ela evapora", "Ela derrete", "Ela se solidifica"],
        correta: 1
    },
    {
        pergunta: "Qual é a camada da Terra onde ocorrem os terremotos?",
        opcoes: ["Núcleo interno", "Manto", "Crosta terrestre", "Atmosfera"],
        correta: 2
    },
];
//variáveis para controlar o quiz
let perguntaAtual = 0 //qual pergunta está sendo mostrada
let pontuacao = 0 //quantidade de acertos
let erros = 0 //quantidade de erros
let opcaoSelecionada = null //qual opção o usuário selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document. getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById ("erros")
const acertos = document.getElementById ("acertos")

// função que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}  
// função que mostra a pergunta atual
function mostrarPergunta() {
//Pega a pergunta atual
const perguntaAtualObj = perguntas[perguntaAtual]
// Mostra o texto da pergunta
pergunta.textContent = perguntaAtualObj.pergunta
opcoes.textContent = "" //limpa as opcoes anteriores

// Cria um botão para cada opção de resposta
perguntaAtualObj.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement ("button")
    botao.textContent = opcao
    botao.classList.add("opcao")
    botao.addEventListener("click", () => selecionarOpcao(indice))
    opcoes.appendChild(botao)
 })
opcaoSelecionada = null
botaoProxima.disabled = true //desabilita o botão de proxima
}
// Para quando o usuário escolher uma opção
function selecionarOpcao(indice) {
opcaoSelecionada = indice
//atualiza o visual da opção selecionada
const opcoes = document.querySelectorAll(".opcao")
opcoes.forEach((opcao, i) => {
opcao.classList.toggle("selecionada", i == indice)
})
 botaoProxima.disabled = false //habilita o botao de proxima
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal. classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima.addEventListener("click", () => {
// Verifica se a resposta está correta
if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
pontuacao++
} else {
erros++
}
atualizarPlacar()

perguntaAtual++
if(perguntaAtual < perguntas.length) {
    mostrarPergunta()
    } else {
    mostrarPontuacao()
}
 })
//botao para reiniciar o quiz
    botaoReiniciar.addEventListener("click", () => {
        // Reseta todas as variáveis
        perguntaAtual = 0
        pontuacao = 0
        erros = 0
   //o quiz aparece e a pontuação final some     
        quiz.classList.remove("esconder")
        pontuacaoFinal. classList.add("esconder")
         atualizarPlacar()
         mostrarPergunta()
})

mostrarPergunta()