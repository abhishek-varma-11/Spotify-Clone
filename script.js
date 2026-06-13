const container = document.querySelector(".cards");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");

leftBtn.onclick = () => {
    container.scrollLeft -= 600;
};

rightBtn.onclick = () => {
    container.scrollLeft += 600;
};
