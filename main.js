let prev = document.getElementById('prev');

let next = document.getElementById('next');

let img1 = document.getElementById('img1');

let img2 = document.getElementById('img2');

let img3 = document.getElementById('img3');

let img4 = document.getElementById('img4');

let currentImg = document.getElementById('currentImg');

let images = [img1, img2, img3, img4];
let currentImgList = Array.from(currentImg.children)
let x = 0;



prev.addEventListener('click', previous);
next.addEventListener('click', nextt);

function previous(){
    reset()
    if(x != 0){
        x--
    }else{
        x = images.length -1
    }
    images[x].classList.remove('hide')
    currentImgList[x].classList.add('current')
    //
}

function nextt(){
    reset()
    if(x != 3){
        x++
    }else{
        x = 0
    }
    images[x].classList.remove('hide')
    currentImgList[x].classList.add('current')
    //
}

function reset(){
    for(let y =0; y < images.length; y++){
        images[x].classList.add('hide')
        currentImgList[x].classList.remove('current')
    }
    //
}