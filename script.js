const imgs = document.querySelectorAll('.header_slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // hides all images
    }
    imgs[n].style.display = 'block'; // displays the image at index n
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    if(n > 0){
        n--;
    }
    else{
        n =imgs.length -1;
    }
});
next_btn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default form submission behavior
    if(n < imgs.length -1){
        n++;
    }
    else{
        n =0;
    }
    changeSlide()
});




