import { Jogo } from './jogo.js';
import { Cronometro } from './cronometro.js';

const keys = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M',]

const tentativas = 0;
let wrongLettersArray = []
let correctLetters = []
let vidas = 0;
//let highScore = getHighScoreFromLocalStorage() | persistHighScoreOnLocalStorage();


function convertObjToJSON(obj) {
    return JSON.stringify(obj);
}

function persistGame(game){
    const gameJSON = convertObjToJSON(game)
    localStorage.setItem('game', gameJSON);
}

function getGame(){
    return JSON.parse(localStorage.get('game'));
}

function removeGame() {
    return localStorage.removeItem('game');
}

function getHighScoreFromLocalStorage() {
    return localStorage.getItem('highScore') | 0
}

function persistHighScoreOnLocalStorage(highScoreValue) {
    localStorage.setItem('highScore',highScoreValue)
}

function actualScoreIsHighScore(atualScore) {
    const persitedHighScore = getHighScoreFromLocalStorage();
    if (persitedHighScore & (atualScore < persitedHighScore)) persistHighScoreOnLocalStorage(atualScore);
}

function displayHighScore() {
    const highScoreValueElement = document.querySelector("#highscore_value");
    const highScoreValue = getHighScoreFromLocalStorage();
    highScoreValueElement.innerText = highScoreValue;
}

function generateKey(){

    const keyArray = keys.map((key)=>{
        const keyFormated = 
                            `<div class="key">`+
                                `<p>${key}</p>`+
                            `</div>`

        return keyFormated
    })

    return keyArray
    

}

function generateCharArray(isVisible, charArray){

    

    const result = charArray.map((char)=>{
        const charFormated = `<li class="letter">`+
                                `<p class="word" id=${char}>${isVisible ? char.toUpperCase() : ''}</p>`+
                                `<img src="./assets/tracoNew.png" alt="">`+
                            `</li>`
        return charFormated
    })

    return result

}

function generateForca(arrayPalavraSecreta){

    const charArray = generateCharArray(false, arrayPalavraSecreta)
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
    return teste.length

}


function submitLetter(event,charArray){

    event.preventDefault()
    let word = event.target[0].value

    if(isLetter(word)){
        
        if(charArray.includes(word.toLowerCase())){
            
            const len = showHiddenWord(word)
            for(let j = 0; j < len; j++) {
                correctLetters.push(word)
            }
            if (correctLetters.length == jogo.arrayPalavraSecreta().length) {
                const msg = document.querySelector('.msgError');
                const p = document.createElement('p')
                p.innerText = 'PARABÉNS'
            
                msg.appendChild(p)
            }
        }else{
    
            if(!wrongLettersArray.includes(word)){
    
                const wrongLetters = document.querySelector('.words2Container')
                const component = generateWrongLetterComponent(word)
                wrongLetters.innerHTML += component
                wrongLettersArray.push(word)
                jogo.jogador.perdeVida();
                if(jogo.jogador.vidas > 0){
                
                    updateForca(jogo.jogador.vidas)
    
                }else{
                    
                    gameOver();
                    
                }
                
            }
    
        }
        persistGame(jogo);
    }else{
        const msg = document.querySelector('.msgError');
        const p = document.createElement('p')
        p.innerText = 'Digite uma letra do alfabeto'
        setTimeout(()=>{
            removeErrorMsg()
        },2000)
        msg.appendChild(p)
        console.log(msg)
    }

    
    
    event.target[0].value = ''

}

function submitWord(event, palavraInput, charArray){

    event.preventDefault();
    let word = (palavraInput.value).split('');

    let isEqual = charArray.filter((char, index) => {
        return word[index] === char;
    }).length === word.length;

    if(isEqual){

        word.map((letter) => {
            showHiddenWord(letter);
            correctLetters.push(letter);
        });

        const msg = document.querySelector('.msgError');
                const p = document.createElement('p')
                p.innerText = 'PARABÉNS'
            
                msg.appendChild(p)
        
        
    }else{

        word.map((letter) => {
            if(!wrongLettersArray.includes(letter)){
                const wrongLetters = document.querySelector('.words2Container')
                const component = generateWrongLetterComponent(letter)
                wrongLetters.innerHTML += component
                wrongLettersArray.push(letter)
                jogo.jogador.perdeVida();
                if(jogo.jogador.vidas > 0){
                
                    updateForca(jogo.jogador.vidas);
    
                }else{
                    gameOver();
                }
            }
        });
    }
    
    palavraInput.value = ''

}

function updateForca(vidas){

    const forca = document.querySelector('#forca')
    forca.src = `./assets/${vidas}.png`
    console.log(forca.src)

}

function gameOver(){

    const forca = document.querySelector('#forca')
    forca.src = `./assets/gameOver.png`

    const msg = document.querySelector('.msgError');
    const p = document.createElement('p')
    p.innerText = 'GAME OVER'

    msg.appendChild(p)

}

function generateWrongLetterComponent(word){

    const component = `<li class="usedLetter">`+
                        `<p class="word">${word.toUpperCase()}</p>`+
                        `<img src="./assets/tracoNew.png" alt="">`+
                      `</li>`

    return component

}

function setValueKeyBoard(event){

    const letra = event.target.innerText
    if(letra.length === 1){

        const input =  document.getElementById("palavra")
        input.value += letra
    }

}

function removeErrorMsg(){

    const errorMsg = document.querySelector('.msgError p')
    if(errorMsg){
        errorMsg.remove()
    }

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

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i) || str.toLowerCase() === 'ç';
}


const form = document.getElementById('jogo');
const nickname = document.getElementById('nickname');
const resetButton = document.getElementById("resetButton")
form.addEventListener('reset', (event) => novoJogo(event, nickname));
form.addEventListener('submit', (event) => recuperaJogo(event, nickname));
resetButton.addEventListener('click', () => document.location.reload());


let jogo = undefined;

let novoJogo = (event, nickname) => {
    
    removeGame();
    //console.log(jogo.jogador);
    wrongLettersArray = [];
    correctLetters = [];
    console.log(nickname.value);
    jogo = new Jogo();

    const cronometro = new Cronometro();


    jogo.iniciarJogo(nickname.value).then(() => {

    let arrayPalavraSecreta = jogo.arrayPalavraSecreta();
    generateForca(arrayPalavraSecreta);
    insertKeysToKeyboard();
    
    cronometro.start();
    setInterval(() => {
        persistHighScoreOnLocalStorage(cronometro.convertToSeconds());
        displayHighScore();
    }, 1000)


    inicializaTela(arrayPalavraSecreta);
    });
}


let recuperaJogo = (event, nickname) => {
    alert("Recuper");
    // codigo recuperaJogo
}

function inicializaTela(arrayPalavraSecreta) {
    const keyboard = document.querySelector('#keyboard');
    keyboard.addEventListener('click', (event) => setValueKeyBoard(event));
    const form = document.querySelector('.interface');
    console.log(form);
    const palavraInput = document.getElementById('palavra');
    const chuta = document.getElementById('chutaButton');
    form.addEventListener('submit', (event) => submitLetter(event, arrayPalavraSecreta));
    chuta.addEventListener('click', (event) => submitWord(event, palavraInput, arrayPalavraSecreta));
};
