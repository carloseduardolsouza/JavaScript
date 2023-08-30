const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const tamanho = 30

const snack = [
    {x:150 , y:150},
    {x:180 , y:150},
    {x:210 , y:150},
    {x:240 , y:150}
]

let direction , loopId

const drawSize = () => {
    ctx.fillStyle = "#7D34C2"
    snack.forEach((position, index) => {
        if(index == snack.length - 1) {
            ctx.fillStyle = "#953EE6"
        }

        ctx.fillRect(position.x , position.y , tamanho , tamanho)
    })
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

const gameLoop = () => {
    clearInterval(loopId)

    ctx.clearRect(0,0 , 600,600)
    
    moveSnack()
    drawSize()

    loopId = setInterval(() => gameLoop(), 120)
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
