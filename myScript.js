function rot(phrase) {
let phraseArray = phrase.toLowerCase().split('');
let subArray = [];

// push cipher's letter based on phrases letter
for (let i = 0; i < phraseArray.length; i++){
  if (phraseArray[i] == 'a') {
    subArray.push('n');
  } else if (phraseArray[i] == 'b') {
    subArray.push('o');
  } else if (phraseArray[i] == 'c') {
    subArray.push('p');
  } else if (phraseArray[i] == 'd') {
    subArray.push('q');
  } else if (phraseArray[i] == 'e') {
    subArray.push('r');
  } else if (phraseArray[i] == 'f') {
    subArray.push('s');
  } else if (phraseArray[i] == 'g') {
    subArray.push('t');
  } else if (phraseArray[i] == 'h') {
    subArray.push('u');
  } else if (phraseArray[i] == 'i') {
    subArray.push('v');
  } else if (phraseArray[i] == 'j') {
    subArray.push('w');
  } else if (phraseArray[i] == 'k') {
    subArray.push('x');
  } else if (phraseArray[i] == 'l') {
    subArray.push('y');
  } else if (phraseArray[i] == 'm') {
    subArray.push('z');
  } else if (phraseArray[i] == 'n') {
    subArray.push('a');
  } else if (phraseArray[i] == 'o') {
    subArray.push('b');
  } else if (phraseArray[i] == 'p') {
    subArray.push('c');
  } else if (phraseArray[i] == 'q') {
    subArray.push('d');
  } else if (phraseArray[i] == 'r') {
    subArray.push('e');
  } else if (phraseArray[i] == 's') {
    subArray.push('f');
  } else if (phraseArray[i] == 't') {
    subArray.push('g');
  } else if (phraseArray[i] == 'u') {
    subArray.push('h');
  } else if (phraseArray[i] == 'v') {
    subArray.push('i');
  } else if (phraseArray[i] == 'w') {
    subArray.push('j');
  } else if (phraseArray[i] == 'x') {
    subArray.push('k');
  } else if (phraseArray[i] == 'y') {
    subArray.push('l');
  } else if (phraseArray[i] == 'z') {
    subArray.push('m');
  } else if (phraseArray[i] == ' ') {
    subArray.push(' ');
  } 
}
  return subArray.toString().replaceAll(',', '')
}

function scramble(phrase) {
    // turn phrase into array 
    let array = phrase.toLowerCase().split('');

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array.toString().replaceAll(',', '');
  }

function caesar(phrase) {
    let caesarArray = phrase.toLowerCase().split('');
    let cipherArray = [];

    for (let i = 0; i < caesarArray.length; i++){
        if (caesarArray[i] == 'a') {
           cipherArray.push('x') 
        } else if (caesarArray[i] == 'b') {
            cipherArray.push('y') 
         } else if (caesarArray[i] == 'c') {
            cipherArray.push('z') 
         } else if (caesarArray[i] == 'd') {
            cipherArray.push('a') 
         } else if (caesarArray[i] == 'e') {
            cipherArray.push('b') 
         } else if (caesarArray[i] == 'f') {
            cipherArray.push('c') 
         } else if (caesarArray[i] == 'g') {
            cipherArray.push('d') 
         } else if (caesarArray[i] == 'h') {
            cipherArray.push('e') 
         } else if (caesarArray[i] == 'i') {
            cipherArray.push('f') 
         } else if (caesarArray[i] == 'j') {
            cipherArray.push('g') 
         } else if (caesarArray[i] == 'k') {
            cipherArray.push('h') 
         } else if (caesarArray[i] == 'l') {
            cipherArray.push('i') 
         } else if (caesarArray[i] == 'm') {
            cipherArray.push('j') 
         } else if (caesarArray[i] == 'n') {
            cipherArray.push('k') 
         } else if (caesarArray[i] == 'o') {
            cipherArray.push('l') 
         } else if (caesarArray[i] == 'p') {
            cipherArray.push('m') 
         } else if (caesarArray[i] == 'q') {
            cipherArray.push('n') 
         } else if (caesarArray[i] == 'r') {
            cipherArray.push('o') 
         } else if (caesarArray[i] == 's') {
            cipherArray.push('p') 
         } else if (caesarArray[i] == 't') {
            cipherArray.push('q') 
         } else if (caesarArray[i] == 'u') {
            cipherArray.push('r') 
         } else if (caesarArray[i] == 'v') {
            cipherArray.push('s') 
         } else if (caesarArray[i] == 'w') {
            cipherArray.push('t') 
         } else if (caesarArray[i] == 'x') {
            cipherArray.push('u') 
         } else if (caesarArray[i] == 'y') {
            cipherArray.push('v') 
         } else if (caesarArray[i] == 'z') {
            cipherArray.push('w') 
         }
    }
    return cipherArray.toString().replaceAll(',', '');
} 
let button = document.querySelector('button'); 
button.addEventListener('click', giveCiphers)
function giveCiphers(event) {
    let phraseInput = document.querySelector('#phrase');
    let phraseValue = phraseInput.value;
    let rotDom = document.querySelector('.rot');
    let scrambleDom = document.querySelector('.scramble');
    let caesarDom = document.querySelector('.caesar');
    rotDom.textContent = rot(phraseValue);
    scrambleDom.textContent = scramble(phraseValue);
    caesarDom.textContent = caesar(phraseValue);
    event.preventDefault();
}
   