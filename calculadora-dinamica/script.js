let butt1 = document.getElementById('butt1')
let butt2 = document.getElementById('butt2')
let butt3 = document.getElementById('butt3')
let butt4 = document.getElementById('butt4')
let butt5 = document.getElementById('butt5')
let butt6 = document.getElementById('butt6')
let butt7 = document.getElementById('butt7')
let butt8 = document.getElementById('butt8')
let butt9 = document.getElementById('butt9')
let butt0 = document.getElementById('butt0')
let buttx = document.getElementById('buttx')
let buttme = document.getElementById('buttme')
let buttdiv = document.getElementById('buttdiv')
let buttma = document.getElementById('buttma')
let buttig = document.getElementById('buttig')
let buttCE = document.getElementById('buttCE')
let viewport = document.getElementById('viewport')
butt1.addEventListener('click' , nu1)
butt2.addEventListener('click' , nu2)
butt3.addEventListener('click' , nu3)
butt4.addEventListener('click' , nu4)
butt5.addEventListener('click' , nu5)
butt6.addEventListener('click' , nu6)
butt7.addEventListener('click' , nu7)
butt8.addEventListener('click' , nu8)
butt9.addEventListener('click' , nu9)
butt0.addEventListener('click' , nu0)
buttx.addEventListener('click' , vezes)
buttme.addEventListener('click' , menos)
buttdiv.addEventListener('click' , divisao)
buttma.addEventListener('click' , mais)
buttig.addEventListener('click' , igual)
buttCE.addEventListener('click' , apagar)

function nu1() {
    viewport.innerHTML += ('1')
    valores.push (1)
}

function nu2() {
    viewport.innerHTML += ('2')
    valores.push (2)
}

function nu3() {
    viewport.innerHTML += ('3')
    valores.push (3)
}

function nu4() {
    viewport.innerHTML += ('4')
    valores.push (4)
}

function nu5() {
    viewport.innerHTML += ('5')
    valores.push (5)
}

function nu6() {
    viewport.innerHTML += ('6')
    valores.push (6)
}

function nu7() {
    viewport.innerHTML += ('7')
    valores.push (7)
}

function nu8() {
    viewport.innerHTML += ('8')
    valores.push (8)
}

function nu9() {
    viewport.innerHTML += ('9')
    valores.push (9)
}

function nu0() {
    viewport.innerHTML += ('0')
    valores.push (0)
}

function vezes() {
    viewport.innerHTML += (' * ')
}

function menos() {
    viewport.innerHTML += (' - ')
}

function divisao() {
    viewport.innerHTML += (' / ')
}

function mais() {
    viewport.innerHTML += (' + ')
}

function igual() {
    let result = document.getElementById('viewport').innerHTML
    viewport.innerHTML = eval(result)
}

function apagar() {
    viewport.innerHTML = ``
}