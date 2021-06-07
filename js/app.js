/**
 * Palindroma
 * Chiedere all’utente di inserire una parola. 
 * Creare una funzione per capire se la parola inserita è palindroma
 */

//Chiedere all'utente di inserire una parola
var strWord = promtStr('Inserisci una parola');

var strReverse = reverseWord(strWord);

var message = 'NON fa parte della categoria Palindroma';

if(strWord === strReverse){
    message = 'Fa parte della categoria Palindroma';
}

document.getElementById('word').innerHTML = strWord;
document.getElementById('message').innerHTML = message;


//Funzioni
/**
 * @param {string} text - testo da inserire nel prompt
 * @returns {string} - parola inserita dall'utente
 */
function promtStr(text){
    var word = '';
    while(!word){
       word =  prompt(text)?.trim().toLowerCase();
       if(word && word.length < 3){
            word = ''; 
            alert('inserisci una parola più lunga');
        }
        if(word && !isNaN(word)){
            word = ''; 
            alert('Non puoi inserire caratteri numerici');
        }
    }
    return word;
}

/**
 * @param {string} str 
 * @returns stringa al contrario senza l'utilizzo dei metodi di JS
 */
function reverseWord(str){
    var reverseStr = '';
    for(i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}


/**
 * Esercizio numero 2 - Pari e Dispari 
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri.
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
 * Dichiariamo chi ha vinto.
 */


//Chiedere all'utente di scrivere pari o dispari
var evenOdd = promtStr('Pari o Dispari?');
//Numero scelto dall'utente
var numUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
//Numero random del computer
var numCpu = getRndInteger(1, 5);

//Sommiamo il numero dell'user + quello generato dal computer
var numTotal = numUser + numCpu;

//tramite la funzione verifichiamo se il numero è pari o dispari
var message = evenOrOdd(numTotal);

//Stampiamo nel dom il numero 
document.getElementById('number').innerHTML = numTotal;

if(evenOdd === message){
    //Stampiamo nel dom il risultato della vincita
    document.getElementById('message-game').innerHTML = `Congratulazioni hai vinto, il risultato da te scelto è ${message}`;
}else{
    //Stampiamo nel dom il risultato della sconfitta
    document.getElementById('message-game').innerHTML = `Mi spiace il risultato è ${message} ma tu avevi detto ${evenOdd}`;
}


/**
 * Generare un numero random compreso il min e max
 * @param {number} min 
 * @param {number} max 
 * @returns volore di tipo number
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

/**
 * Funzione per vedere se il numero è pari o dispari
 * @param {number} num
 * @returns {stirng} Ritorna la stringa pari o dispari
 */
function evenOrOdd(num){
    var result = 'dispari';
    if(num % 2 === 0){
        result = 'pari';
    }
    return result;
}