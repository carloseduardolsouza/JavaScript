let mario = document.querySelector('.mario-animed')
let pipe = document.querySelector('.pipe-animed')
let gameover = document.querySelector('.sumir')
let novamente = document.querySelector('#novo')
let score = document.querySelector('.pont')
let overpontos = document.querySelector('.realpont')
document.addEventListener('click' , jump)
document.addEventListener('keydown' , jump)
novamente.addEventListener('click' , novojogo)
let loop = setInterval(() => {
    let pipePosition = +window.getComputedStyle(pipe).left.replace('px' , '')
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '')
    if (pipePosition < 80 && pipePosition > 75) {
        score.innerText = Number(score.innerText) + 5
    }
    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 60) {
        pipe.classList.remove('pipe-animed')
        pipe.classList.add('pipe-stop')
        /*pipe.style.left = `${pipePosition}px`
        mario.style.bottom = `${marioPosition}px`*/
        mario.src = 'imagens/game-over.png'
        mario.classList.remove('mario-animed')
        mario.classList.add('mario-stop')
        gameover.style.display = 'block'
        overpontos.innerText = score.innerText

        /*clearInterval(loop)*/
    }
} , 10)

function jump() {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    } , 700)
}

function novojogo() {
    gameover.style.display = 'none'
    pipe.classList.remove('pipe-stop')
    pipe.classList.add('pipe-animed')
    mario.classList.remove('mario-stop')
    mario.classList.add('mario-animed')
    mario.src = 'imagens/mario.gif'
    score.innerHTML = 0
}


