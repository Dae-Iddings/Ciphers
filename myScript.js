function subCreator(phrase) {
let phraseArray = phrase.toLowerCase().split('');
let subArray = [];
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

