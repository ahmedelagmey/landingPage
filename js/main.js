let img = document.querySelector('.mainImg');
let container = document.querySelector('.container');

function changePhone(phone){// changing main image in the content div
    img.src = phone; 
}

function changeBackground(color){ // changing container background to phone color
    container.style.background = color;

}