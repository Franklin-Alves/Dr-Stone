const characters = document.querySelectorAll(".character")
const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn, indice) => {
    btn.addEventListener("click", () => {

        removeClassBtn()
        removeClassCharacter()

        btn.classList.add("selected")
        
        let imageBtnName = btn.querySelector("img").getAttribute("src")
        .substring(15).split(".jpg")[0]
        
        let imageCharacterName = characters[indice].querySelector("img").getAttribute("src")
        .substring(20).split(".png")[0]
        
        imageBtnName !== imageCharacterName ? findImageCharacter(imageBtnName) : characters[indice].classList.add("selected")
        
        
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

function findImageCharacter(name){
    characters.forEach((character, ind) => {
        let x = character.querySelector("img").getAttribute("src").substring(20).split(".png")[0]
        if (x == name) characters[ind].classList.add("selected")
    })
}