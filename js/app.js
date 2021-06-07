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
    }
    return word;
}

/**
 * 
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