let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
document.addEventListener('click' , jump)
let loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '')
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 60) {
        pipe.style.animation = 'nome'
        pipe.style.left = `${pipePosition}px`
        mario.style.animation = 'nome'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'imagens/game-over.png'
        mario.style.width = '50px'
        mario.style.marginLeft = '30px'

        clearInterval(loop)
    }
} , 10)

function jump() {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    } , 700)
}


