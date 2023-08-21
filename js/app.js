const image = document.getElementById("main-img");
const hoverImage = document.getElementById("hover-img");
const mainHolder = document.querySelector(".hoveredImageHolderHolder");

const circleR = 150/2;

// handled for mouse

image.addEventListener("mousemove", (e)=>{
    e.preventDefault();
    mainHolder.style.top = e.screenY - circleR * 3 + 'px';
    mainHolder.style.left = e.screenX + circleR + 'px';

    hoverHappening(e.offsetX,e.offsetY);
});

image.addEventListener("mouseleave", ()=>{
   mainHolder.style.display = "none";
});
image.addEventListener("mouseover", ()=>{
    mainHolder.style.display = "flex"
})

// touch controls handle

image.addEventListener("touchmove", (e)=>{
    e.preventDefault();

    updateDisplayOnTouch(e);
});

image.addEventListener("touchend",()=>{mainHolder.style.display = "none"});
image.addEventListener("touchstart",(e)=>{
    mainHolder.style.display = "flex";
    updateDisplayOnTouch(e);
});

function updateDisplayOnTouch(e) {
    mainHolder.style.top = e.touches[0].screenY - circleR * 4 + 'px';
    mainHolder.style.left = e.touches[0].screenX + circleR + 'px';

    hoverHappening(e.touches[0].clientX, e.touches[0].clientY, true);
}

function hoverHappening(x,y, isTouch = false) { // type: 0 -> mouse controlls, 1 -> touch controlls
    let left = 0;
    let top = 0;

    if (isTouch) {
        const offsetValues = image.getClientRects()[0];
        console.log(offsetValues)
        top = offsetValues.top;
        left = offsetValues.left;
    }

    console.log(top,left);

    hoverImage.style.setProperty("--x-dis", `${-x + circleR + left}px`);
    hoverImage.style.setProperty("--y-dis", `${-y + circleR + top}px`);
}