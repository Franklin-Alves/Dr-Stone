const characters = document.querySelectorAll(".character")
const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn, indice) => {
    btn.addEventListener("click", () => {

        removeClassBtn()
        removeClassCharacter()

        btn.classList.add("selected")
        btn.querySelector("img").getAttribute("src").substring(15).split(".jpg")[0]
        
        characters[indice].querySelector("img").getAttribute("src").substring(20).split(".png")[0]


        characters[indice].classList.add("selected")
    })
})

function removeClassBtn(){
    const buttonSelected = document.querySelector(".btn.selected")
    buttonSelected.classList.remove("selected")
}

function removeClassCharacter(){
    const characterSelected = document.querySelector(".character.selected")
    characterSelected.classList.remove("selected")
}