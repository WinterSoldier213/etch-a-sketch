console.log("Anakin has crazy aura")
const container = document.querySelector(".container");

for (let i=0; i<16; i++) {
    for (let i=0; i<16; i++) {
        const div = document.createElement("div");
        div.classList="box";
        container.appendChild(div);
    }
}
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", ()=> {
        box.style.backgroundColor="#ccc";
    });
    box.addEventListener("mouseout", () => {
        box.style.backgroundColor="transparent";
    })
})

const button = document.querySelector("button")
button.addEventListener("click", () => {
    const yo = prompt("How drunk did you get???")
})