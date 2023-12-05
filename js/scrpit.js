const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const btn = document.querySelector("#refresh") 

const jump = () => {
    mario.classList.add('jump'); 

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);


    if (pipePosition <= 120  && pipePosition >0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`


        mario.src= 'imagens/game-over.png';
        mario.style.width= '75px';
        mario.style.marginLeft = '50px';

        btn.classList.add("open")
        
        clearInterval(loop);

    }

}, 10)

document.addEventListener('keydown', jump)

btn.addEventListener("click", () => {
    location.reload()
})
