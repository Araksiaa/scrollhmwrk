const pages = document.querySelectorAll(`.container .page`);
const prev =document.querySelector(`.prev`);
const next =document.querySelector(`.next`);

let current=0;


const nextSlide = () =>{
pages[current].classList.remove(`active`);
current++;

if (current === pages.length) {
current=0;

}
pages[current].classList.add(`active`);

};



next.addEventListener(`click`, nextSlide);

prev.addEventListener(`click`, ()=> {
pages[current].classList.remove(`active`);
current--;

if (current <0){

    current =pages.length-1;
}
pages[current].classList.add(`active`);
});


setInterval(nextSlide, 2000)

