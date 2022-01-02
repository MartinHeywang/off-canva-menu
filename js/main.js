"use strict";
const container = document.querySelector(".container");
const btn = document.querySelector(".main__btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    container === null || container === void 0 ? void 0 : container.classList.toggle("container--no-transform");
});
