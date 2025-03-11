let saudacao = function (nome){
    console.log ("oi", nome)
}
saudacao ("Erick")

// arrow function (funcao da seta)
let cumprimento = (nome) => {
    console.log ("oi", nome)
}
cumprimento ("Heitor")

//funcao anonima
let soma = function (a,b){
    let resultado = a + b
    return resultado
}
console.log(soma (5,3))

//arrow function
let adicao = (a,b)=>{
    let resultado = a + b
    return resultado
}
console.log (adicao(6,4))

//funcao anonima
let evzesdois = function(numero){
    let resultado = numero * 2
}
console.log (evzesdois(8)
)