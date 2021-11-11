const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Ç",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M"
];

const finalWord = "BOLA";

function generateKey() {
  const keyArray = keys.map((key) => {
    const keyFormated =
      `<div class="key" onclick="setValueKeyBoard('${key}')">` +
      `<p>${key}</p>` +
      `</div>`;

    return keyFormated;
  });

  return keyArray;
}

function generateCharArray() {
  const charArray = finalWord.split("");

  const result = charArray.map((char) => {
    const charFormated =
      `<div class="letter">` +
      `<p class="word">${char.toUpperCase()}</p>` +
      `<img src="./assets/tracoNew.png" alt="">` +
      `</div>`;
    return charFormated;
  });

  return result;
}

function generateForca() {
  const charArray = generateCharArray();
  console.log(charArray);
  const gameBoard = document.querySelector(".wordsContainer");
  console.log(gameBoard);

  charArray.forEach((char) => {
    gameBoard.innerHTML += char;
  });
}

generateForca();

function submitWord(event) {
  event.preventDefault();
  const word = event.target[0].value;
  console.log(word);
}

function setValueKeyBoard(letra) {
  const input = document.getElementById("palavra");
  input.value += letra;
  //    console.log(input.value)
}

function insertKeysToKeyboard() {
  const keyboard = document.getElementById("keyboard");
  // console.log(keyboard)
  const keysArray = generateKey();
  // console.log(keysArray)
  keysArray.forEach((key) => {
    keyboard.innerHTML += key;
  });
}

insertKeysToKeyboard();
