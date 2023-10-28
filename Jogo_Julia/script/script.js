const pag_inicio = document.querySelector('.pag_inicio')
const pag_final = document.querySelector('.pag__final')
const bttPlay = document.querySelector('.bttplay')
const peg1 = document.querySelector('.peg1')
const peg2 = document.querySelector('.peg2')
const peg3 = document.querySelector('.peg3')
const peg4 = document.querySelector('.peg4')
const peg5 = document.querySelector('.peg5')

bttPlay.addEventListener('click' , iniciar)

function iniciar() {
    pag_inicio.style.display = 'none'
    peg1.style.display = 'flex'

}

function apertou1(key) {
    if(key == 'b') {
        peg1.style.display = 'none'
        peg2.style.display = 'flex'
    } else {
        window.alert('nossa amo ,to decepcionado')
    }
}

function apertou2(key) {
    if(key == 'a') {
        peg2.style.display = 'none'
        peg3.style.display = 'flex'
    } else {
        window.alert('nossa amo ,to decepcionado')
    }
}

function apertou3(key) {
    if(key == 'b') {
        peg3.style.display = 'none'
        peg4.style.display = 'flex'
    } else {
        window.alert('nossa amo ,to decepcionado')
    }
}

function apertou4(key) {
    if(key == 'b') {
        peg4.style.display = 'none'
        peg5.style.display = 'flex'
    } else {
        window.alert('nossa amo ,to decepcionado')
    }
}

function apertou5(key) {
    if(key == 'd') {
        peg5.style.display = 'none'
        pag_final.style.display = 'flex'
    } else {
        window.alert('nossa amo ,to decepcionado')
    }
}