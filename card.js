var p = 1
var trenutnaVrednost = 2
var karta
var broj
function Start(id, slika) {
    karta = slika
    broj = id
    console.log(id, slika, karta)
    p = document.getElementById(id)
    trenutnaVrednost = parseInt(p.innerHTML)
    if (trenutnaVrednost < 4) {
        p.innerHTML = trenutnaVrednost + 1
    }
    if (trenutnaVrednost == 3) {
        document.getElementById(slika).style.opacity = 0.3
        document.getElementById(id).style.color = "#d9d9d9"
    }
}

function Undo() {
    console.log(trenutnaVrednost)
    if (trenutnaVrednost < 4) {
        p.innerHTML = trenutnaVrednost
    }
    if (trenutnaVrednost == 3) {
        document.getElementById(karta).style.opacity = 1
        document.getElementById(broj).style.color = "#1b4b7b"
    }
}

function Rest() {
    for (let i = 1; i < 14; i++) {
        console.log(i)
        document.getElementById('r' + i).innerHTML = 0
        document.getElementById('slika' + i).style.opacity = 1
        document.getElementById('r' + i).style.color = "#1b4b7b"
    }
}
