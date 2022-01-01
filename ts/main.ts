const container = document.querySelector(".container");
const btn = document.querySelector(".main__btn");

btn?.addEventListener("click", () => {
    container?.classList.toggle("container--no-transform");
});