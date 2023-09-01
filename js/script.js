const belmont = document.querySelector('.belmont');
const zombie = document.querySelector('.zombie')
const contador = document.querySelector('.contador')
const background = document.querySelector('.tela-do-jogo')

const pulo = (event) => {
    if (event.keyCode == 32) {
        belmont.classList.add('pulo');
        belmont.src = './img/stephenBelmontPulo.gif'

        setTimeout(() => {
            belmont.classList.remove('pulo');
            belmont.src = './img/stephenBelmont.gif'
        }, 500);
    }
}

var px = 0
var tela = document.getElementById("tela")

const divTela = setInterval(() => {
    px = px - 30
    tela.style.backgroundPositionX = px + "px"
    console.log(tela.style.backgroundPositionX)

    if (px == -1410) {
        tela.style.backgroundImage = "url('./img/bg-3.png')"
        zombie.src = './img/skeletonEnemie2.gif'
        zombie.style.transform = "rotateY(180deg)"
        zombie.style.width = "135px"
        zombie.style.marginBottom = "-1px"
        zombie.style.animationDuration = "1.15s"
    } else if (px == -3420) {
        tela.style.backgroundImage = "url('./img/bg-2.png')"
        zombie.src = './img/skeletonEnemie.gif'
        zombie.style.transform = "rotateY(180deg)"
        zombie.style.width = "152px"
        zombie.style.marginBottom = "-1px"
        zombie.style.animationDuration = "1.25s"
    } else if (px == -6630) {
        tela.style.backgroundImage = "url('./img/bgFinal.png')"
        zombie.src = './img/cavalo.gif'
        zombie.style.transform = "none"
        zombie.style.width = "244px"
        zombie.style.marginBottom = "-26px"
        zombie.style.animationDuration = "0.75s"
    }

}, 100)

const loop = setInterval(() => {

    const zombiePosition = zombie.offsetLeft;
    const belmontPosition = +window.getComputedStyle(belmont).bottom.replace('px', '')

    if (zombiePosition <= 80 && zombiePosition > 0 && belmontPosition < 45) {

        zombie.style.animation = 'none'
        zombie.style.left = `${zombiePosition}px`

        belmont.style.animation = 'none'
        belmont.style.bottom = `${belmontPosition}px`

        belmont.src = './img/giphy.gif'
        belmont.style.margin = "-29px"
        belmont.style.width = "150px"

        clearInterval(loop)
        clearInterval(divTela)

    }

}, 10)

document.addEventListener('keydown', pulo);