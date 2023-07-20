var submit = document.getElementById('submit')
submit.addEventListener('click' , clicar)

function clicar() {
    var velocidadestr = document.getElementById('velocidade')
    var velocidade = Number(velocidadestr.value)
    var resultado = document.getElementById('resultado')
    if (velocidade >= 100) {
        resultado.innerHTML = (`sua velociade e de ${velocidade}km/h`)
        resultado.innerHTML += (`<p>VOCE ESTA MULTADO</p>`)
    } else {
        resultado.innerHTML = (`sua velociade e de ${velocidade}km/h`)
        resultado.innerHTML += (`<p>VOCE <strong>NÂO</strong> EXEDEU O LIMITE DE 100km/h</p>`)
    }
}