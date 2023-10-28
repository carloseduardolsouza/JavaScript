const space_game = document.querySelector('.space_game')
const nave_you = document.querySelector('.nave_you')

document.addEventListener('mousemove', (event) => {
    let posX = event.clientX
    
    nave_move(posX)
})

const nave_move = (posX) => {
    const altura = window.screen.height
    
    let posiçaoY = altura/2 - 225
    let posiçaoX = posX -18

    nave_you.style.left = `${posiçaoX}px`
    nave_you.style.bottom = `${posiçaoY}px`
}