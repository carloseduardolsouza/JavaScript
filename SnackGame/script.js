const gameOver = document.querySelector(".gameOver")

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const audio = new Audio("../ascets/audio.mp3")

const tamanho = 30

const snack = [
    {x:150 , y:150},
    {x:180 , y:150}
]

let direction , loopId

const randomNumber = (min , max) => {
    return Math.round(Math.random() * (max - min) + min)
}

const randomPosition = () => {
    const number = randomNumber(0 , canvas.width - tamanho)
    return Math.round(number / tamanho) * tamanho
}

const randomColor = () => {
    const red = randomNumber(0, 255)
    const green = randomNumber(0, 255)
    const blue = randomNumber(0, 255)

    return `rgb(${red} , ${green} , ${blue})`
}

const drawSize = () => {
    ctx.fillStyle = "#7D34C2"
    snack.forEach((position, index) => {
        if(index == snack.length - 1) {
            ctx.fillStyle = "#953EE6"
        }

        ctx.fillRect(position.x , position.y , tamanho , tamanho)
    })
}

let food = {
    x: randomPosition(),
    y: randomPosition(),

    color: randomColor(),
}

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for(let i = 30; i < canvas.width; i+= 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }
}

const drawFood = () => {
    const {color , x , y} = food

    ctx.shadowColor = color
    ctx.shadowBlur = 6
    ctx.fillStyle = color
    ctx.fillRect(x , y , tamanho , tamanho)
    ctx.shadowBlur = 0
}

const moveSnack = () => {
    if(!direction) return

    const cabeça = snack[snack.length -1]

    snack.shift()

    if(direction == "ArrowRight") {
        snack.push({x: cabeça.x + tamanho , y: cabeça.y})
    }

    if(direction == "ArrowLeft") {
        snack.push({x: cabeça.x - tamanho , y: cabeça.y})
    }

    if(direction == "ArrowUp") {
        snack.push({x: cabeça.x , y: cabeça.y - tamanho})
    }

    if(direction == "ArrowDown") {
        snack.push({x: cabeça.x , y: cabeça.y + tamanho})
    }
}

const checkFood = () => {
    const head = snack[snack.length - 1]

    if(head.x == food.x && head.y == food.y) {
        snack.push(head)
        audio.play()

        let x = randomPosition()
        let y = randomPosition()

        while(snack.find((position) => position.x == x && position.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }

        food.x = x
        food.y = y
        food.color = randomColor()
    }
}

const checkOver = () => {
    const head = snack[snack.length -1]

    if(head.x == 0 || head.x == 600 || head.y == 0 || head.y == 600) {
        gameOver.style.display = "flex"
        clearInterval(gameLoop)
    }
}

const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0,0 , 600,600)
    
    moveSnack()
    drawFood()
    drawGrid()
    drawSize()
    checkFood()
    checkOver()

    loopId = setInterval(() => gameLoop(), 250)
}

gameLoop()

document.addEventListener("keydown" , ({key}) => {
    if(key == "ArrowUp" || key =="w" && direction != "ArrowDown") {
        direction = "ArrowUp"
    }

    if(key == "ArrowDown" || key =="s" && direction != "ArrowUp") {
        direction = "ArrowDown"
    }

    if(key == "ArrowRight" || key =="d" && direction != "ArrowLeft") {
        direction = "ArrowRight"
    }

    if(key == "ArrowLeft" || key =="a" && direction != "ArrowRight") {
        direction = "ArrowLeft"
    }
})