const hamburger = document.getElementById("btn");
const closeMark = document.getElementById("close")
let box = document.getElementById("box")


hamburger.addEventListener("click", () => {
    box.classList.remove("hide")
    hamburger.classList.add("hide")
    closeMark.classList.remove("hide")
});

closeMark.addEventListener("click", () => {
    box.classList.add("hide")
    hamburger.classList.remove("hide")
    closeMark.classList.add("hide")
});

 const drey = (obj, theory) => {
    return obj + theory;
}

function khal(obj) {
    return 2 + 3;
}

console.log(drey(10, 2))