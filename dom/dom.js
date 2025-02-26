let iamgem = document.getElementById("imagem")
iamgem.addEventListener("mouseover", function() {
    iamgem.setAttribute("src", "sowe2.png")
})
iamgem.addEventListener("mouseout", function() {
    imagem.setAttribute("src", "sowe1.png")
})

let lista = document.getElementById("lista")
let adicioar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicioar.addEventListener("click", function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo Iem"
    lista.appendChild(novoItem)
})
remover.addEventListener("click", function () {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild)
    }
})