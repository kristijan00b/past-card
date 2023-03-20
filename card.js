var p=1
var trenutnaVrednost=2
var karta
var broj
function Start(id,slika){
    karta=slika
    broj=id
    console.log(id,slika,karta)
 p=document.getElementById(id)
 trenutnaVrednost= parseInt(p.innerHTML)
if(trenutnaVrednost<4){
    p.innerHTML=trenutnaVrednost+1
}
if(trenutnaVrednost==3){
document.getElementById(slika).style.opacity=0.3
document.getElementById(id).style.color="#d9d9d9"
}
}

function Undo(){
    console.log(trenutnaVrednost)
    if(trenutnaVrednost<4){
        p.innerHTML=trenutnaVrednost
    }
    if(trenutnaVrednost==3){
        document.getElementById(karta).style.opacity=1
        document.getElementById(broj).style.color="#1b4b7b"
        }
}

function Restart(){
    document.getElementById('r1').innerHTML=0
    document.getElementById('slika1').style.opacity=1
    document.getElementById('r1').style.color="#1b4b7b"

    document.getElementById('r2').innerHTML=0
    document.getElementById('slika2').style.opacity=1
    document.getElementById('r2').style.color="#1b4b7b"

    document.getElementById('r3').innerHTML=0
    document.getElementById('slika3').style.opacity=1
    document.getElementById('r3').style.color="#1b4b7b"

    document.getElementById('r4').innerHTML=0
    document.getElementById('slika4').style.opacity=1
    document.getElementById('r4').style.color="#1b4b7b"

    document.getElementById('r5').innerHTML=0
    document.getElementById('slika5').style.opacity=1
    document.getElementById('r5').style.color="#1b4b7b"

    document.getElementById('r6').innerHTML=0
    document.getElementById('slika6').style.opacity=1
    document.getElementById('r6').style.color="#1b4b7b"

    document.getElementById('r7').innerHTML=0
    document.getElementById('slika7').style.opacity=1
    document.getElementById('r7').style.color="#1b4b7b"

    document.getElementById('r8').innerHTML=0
    document.getElementById('slika8').style.opacity=1
    document.getElementById('r8').style.color="#1b4b7b"

    document.getElementById('r9').innerHTML=0
    document.getElementById('slika9').style.opacity=1
    document.getElementById('r9').style.color="#1b4b7b"

    document.getElementById('r10').innerHTML=0
    document.getElementById('slika10').style.opacity=1
    document.getElementById('r10').style.color="#1b4b7b"

    document.getElementById('r12').innerHTML=0
    document.getElementById('slika12').style.opacity=1
    document.getElementById('r12').style.color="#1b4b7b"

    document.getElementById('r13').innerHTML=0
    document.getElementById('slika13').style.opacity=1
    document.getElementById('r13').style.color="#1b4b7b"

    document.getElementById('r14').innerHTML=0
    document.getElementById('slika14').style.opacity=1
    document.getElementById('r14').style.color="#1b4b7b"
}