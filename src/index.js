const keys = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M',]

const finalWord = 'teste'
const charArray = finalWord.split("")
const wrongLettersArray = []
const correctLetters = []
let vidas = 0;

function generateKey(){

    const keyArray = keys.map((key)=>{
        const keyFormated = 
                            `<div class="key" onclick="setValueKeyBoard('${key}')">`+
                                `<p>${key}</p>`+
                            `</div>`

        return keyFormated
    })

    return keyArray
    

}

function generateCharArray(isVisible){

    

    const result = charArray.map((char)=>{
        const charFormated = `<li class="letter">`+
                                `<p class="word" id=${char}>${isVisible ? char.toUpperCase() : ''}</p>`+
                                `<img src="./assets/tracoNew.png" alt="">`+
                            `</li>`
        return charFormated
    })

    return result

}

function generateForca(){

    const charArray = generateCharArray(false)
    //console.log(charArray)
    const gameBoard = document.querySelector('.wordsContainer')
    //console.log(gameBoard)

    charArray.forEach((char)=>{
        gameBoard.innerHTML += char
    })


}


function showHiddenWord(letter){

    const teste = document.querySelectorAll(`#${letter.toLowerCase()}`)

    teste.forEach((item)=>{
        item.innerText = letter.toUpperCase();
    })


}

generateForca()

function submitWord(event){

    event.preventDefault()

    let word = event.target[0].value

    if(charArray.includes(word.toLowerCase())){

        showHiddenWord(word)
        correctLetters.push(word)
        
    }else{

        if(!wrongLettersArray.includes(word)){

            const wrongLetters = document.querySelector('.words2Container')
            const component = generateWrongLetterComponent(word)
            wrongLetters.innerHTML += component
            wrongLettersArray.push(word)
            vidas +=1;
            if(vidas <= 6){

                updateForca(vidas)

            }else{
                
                gameOver();
                
            }
            
        }

    }
    
    
    event.target[0].value = ''

}

function updateForca(vidas){

    const forca = document.querySelector('#forca')
    forca.src = `./assets/${vidas}.png`
    console.log(forca.src)

}

function gameOver(){

    const forca = document.querySelector('#forca')
    forca.src = `./assets/gameOver.png`

}

function generateWrongLetterComponent(word){

    const component = `<li class="usedLetter">`+
                        `<p class="word">${word.toUpperCase()}</p>`+
                        `<img src="./assets/tracoNew.png" alt="">`+
                      `</li>`

    return component

}

function setValueKeyBoard(letra){
   const input =  document.getElementById("palavra")
   input.value += letra
//    console.log(input.value)
}

function insertKeysToKeyboard(){

    const keyboard = document.getElementById("keyboard")
    // console.log(keyboard)
    const keysArray = generateKey();
    // console.log(keysArray)
    keysArray.forEach((key)=>{
        keyboard.innerHTML += key
    })

}

insertKeysToKeyboard();