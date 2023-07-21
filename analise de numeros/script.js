let numb = document.getElementById('camponum')
let salvarr = document.getElementById('salvar')
let enviarr = document.getElementById('enviar')
let lista = document.getElementById('lista')
let valores = []
let resust = document.getElementById('resultado')
salvarr.addEventListener('click' , salvar)
enviarr.addEventListener('click' , enviar)

function enumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function tanalista(num , val) {
    if(val.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function salvar() {
    if(enumero(numb.value) && !tanalista(numb.value , valores)) {
        valores.push(Number(numb.value))
        let item = document.createElement('option')
        item.text = ` ${numb.value} adicionado`
        lista.appendChild(item)
        resust.innerHTML = ``
    } else {
        window.alert('numero invalido ou ja existente')

    }
    numb.value = ''
    numb.focus()
}

function enviar() {
    if(valores.length == 0) {
        window.alert('adicione valores antes de enviar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        resust.innerHTML = `<p>Ao todo tem ${tot} numeros cadastrados</p>`
        resust.innerHTML += `<p>o maior numero é ${maior}</p>`
        resust.innerHTML += `<p>o menor numero é ${menor}</p>`
        resust.innerHTML += `<p>a soma dos valores é igual a ${soma}</p>`
        resust.innerHTML += `<p>a media dos valores é igual a ${media}</p>`

    }

}