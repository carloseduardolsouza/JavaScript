const space_game = document.querySelector('.space_game')
const nave_you = document.querySelector('.nave_you')

space_game.addEventListener('mousemove', (event) => {
    let posX = event.clientX
    
    nave_move(posX)
})

const nave_move = (posX) => {
    const altura = window.screen.height
    
    let posiçaoX = posX - altura/2

    console.log(posiçaoX)

    nave_you.style.left = `${posiçaoX}px`
}