let peso = document.querySelector('.peso')
let altura = document.querySelector('.altura')

const form = document.querySelector('form')
const Resultado = document.querySelector('.resultado')
const button = document.querySelector('.submit')
const calcNovamente = document.querySelector('.calcNovamente')
const escrever = document.querySelector('.escrever')
const voceEsta = document.querySelector('.voceEsta')

button.addEventListener('click' , (event) => {
    event.preventDefault()
    calcular()
})

calcNovamente.addEventListener('click' , () => {
    Resultado.style.display = 'none'
    form.style.display = 'block'
    peso.value = ''
    altura.value = ''
})

const calcular = () => {
    let resultado = peso.value/(altura.value*altura.value)
    escrever.innerText = resultado.toFixed(2)
    if(resultado < 17) {
        voceEsta.innerText = 'Muito abaixo do peso'
    }
    if(resultado > 17 && resultado < 18.49){
        voceEsta.innerText = 'Abaixo do peso'
    }
    if(resultado > 18.5 && resultado < 24.99){
        voceEsta.innerText = 'Peso normal'
    }
    if(resultado > 25 && resultado < 29.99){
        voceEsta.innerText = 'Acima do peso'
    }
    if(resultado > 30 && resultado < 34.99){
        voceEsta.innerText = 'Obesidade I'
    }
    if(resultado > 35 && resultado < 39.99){
        voceEsta.innerText = 'Obesidade II (severa)'
    }
    if(resultado > 40){
        voceEsta.innerText = 'Obesidade III (mórbida)'
    }
    form.style.display = 'none'
    Resultado.style.display = 'block'
}