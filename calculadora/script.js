var botao = document.getElementById('somar')
var adição = document.getElementById('Adiçao')
var subtração = document.getElementById('subtraçao')
var multiplicação = document.getElementById('multiplicaçao')
var divisão = document.getElementById('divisao')
var elemento = document.getElementById('elemento')
var ress = document.getElementById('res')
adição.addEventListener('click' , adiçao)
subtração.addEventListener('click' , subtraçao)
multiplicação.addEventListener('click' , multiplicaçao)
divisão.addEventListener('click' , divisao)
botao.addEventListener('click' , somar)

function adiçao() {
    var tn1 = window.document.getElementById('valor1')
    var tn2 = window.document.getElementById('valor2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultadodiv = n1 + n2 
    ress.innerHTML = resultadodiv
}

function subtraçao() {
    var tn1 = window.document.getElementById('valor1')
    var tn2 = window.document.getElementById('valor2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultadodiv = n1 - n2 
    ress.innerHTML = resultadodiv
}

function multiplicaçao() {
    var tn1 = window.document.getElementById('valor1')
    var tn2 = window.document.getElementById('valor2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultadodiv = n1 * n2 
    ress.innerHTML = resultadodiv
}

function divisao() {
    var tn1 = window.document.getElementById('valor1')
    var tn2 = window.document.getElementById('valor2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var resultadodiv = n1 / n2 
    ress.innerHTML = resultadodiv
}