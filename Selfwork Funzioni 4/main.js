let str = prompt(`Inserischi una frase (scrivere tutto maiuscolo o tutto minuscolo)`);

let palindromo;

let splitted = str.split(``).reverse().join(``);

if(str == splitted){
  palindromo = true;
}else{
  palindromo = false;
}

console.log(`Questa frase è un palindromo? ${palindromo}`);