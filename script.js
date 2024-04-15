const botaoabrir = document.querySelector("header > button")
const butaofechar = document.querySelector("header nav > button")

const body = document.querySelector("body")
const nav = document.querySelector("header nav-mobile")

botaoabrir.addEventListener('click', abrirmenu)
botaofechar.addEventListener('click', fecharmenu)

function abrirmenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharmenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}