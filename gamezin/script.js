const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

let ação = 1

const randomNumber = (min , max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const drawNav = (posX="350") => {
    ctx.clearRect(0,500 , 700,700)
    ctx.fillStyle = "blue"
    ctx.fillRect(posX, 500 ,size , size)
}

const drawEnemies = () => {
    posY = 0
    posX = randomNumber(10, 690)

    const enemiesLoop = setInterval(() => {
        if(posY < 700) {
            ctx.clearRect(0,0 , 700,500)
            ctx.fillStyle = "red"
            ctx.fillRect(posX, posY , 30, 30)
            posY = posY +7
        } if (posY >= 700) {
            ctx.clearRect(0,0 , 700,500)
            posY = 0
            clearInterval(enemiesLoop)
        }
    }, 20)
}

const tiro = (posX) => {
    posY = 490

    const tiroLoop = setInterval(() => {
        if(posY > 0) {
            ctx.clearRect(0,0 , 700,500)
            ctx.fillStyle = "white"
            ctx.fillRect(posX, posY , 10, 10)
            posY = posY -7
        } if(posY <= 0) {
            ctx.clearRect(0,0 , 700,500)
            posY = 500
            ação = 1
            clearInterval(tiroLoop)
        }
    }, 1)

}

canvas.addEventListener("mousemove", (event) => {
    let posX = event.offsetX
    drawNav(posX)
})

canvas.addEventListener("click", (event) => {
    if( ação == 1 ) {
        ação = 0
        let posX = event.offsetX
        tiro(posX + 10)
    }
})

drawEnemies()
drawNav()
