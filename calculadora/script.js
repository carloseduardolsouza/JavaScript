var botao = document.getElementById('somar')
botao.addEventListener('click' , somar)
        
function somar() {
    var tn1 = window.document.getElementById('valor1')
    var tn2 = window.document.getElementById('valor2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var ress = document.getElementById('res')
    var resultado = n1 + n2
    ress.innerHTML = resultado
}