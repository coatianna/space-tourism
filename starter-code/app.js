const btn = document.querySelector(".toggleButton")
const menu = document.querySelector(".dropdown-content")
btn.addEventListener("click", function() {
    console.log("hello");
    menu.classList.toggle("is-open")
})