let buttCE = document.getElementById('buttCE')
let viewport = document.getElementById('viewport')
buttig.addEventListener('click' , igual)
buttCE.addEventListener('click' , apagar)

function numero(num) {
    viewport.innerHTML += (num)
}

function igual() {
    let result = document.getElementById('viewport').innerHTML
    viewport.innerHTML = eval(result)
}

function apagar() {
    viewport.innerHTML = ``
}