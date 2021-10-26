//slider video//
const video = document.getElementsByClassName('video');
const nbSlide = video.length;
const suivant = document.querySelector('.rightvideo');
const precedent = document.querySelector('.leftvideo');
let count = 0;

function slideSuivante(){
    video[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    video[count].classList.add('active')
    console.log(count);
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    video[count].classList.remove('active');
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    video[count].classList.add('active')
    console.log(count);
    // console.log(count);
}
precedent.addEventListener('click',
slidePrecedente)

function keyPress(e){
    if(e.keyCode === '37'){
        slidePrecedente();
    } else if(e.keyCode === '39'){
    slideSuivante();
  }
}
document.addEventListener('keydown', keyPress)



// slider photo //
const items = document.getElementsByClassName('slider');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
}
suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    console.log(count);
    // console.log(count);
}
precedent.addEventListener('click',
slidePrecedente)

function keyPress(e){
    if(e.keyCode === '37'){
        slidePrecedente();
    } else if(e.keyCode === '39'){
    slideSuivante();
  }
}
document.addEventListener('keydown', keyPress)