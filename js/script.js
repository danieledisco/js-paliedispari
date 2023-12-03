/**
 * Here is reported thr javascript needed
 */

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/*
Palindroma

 - Si fa immettere la parola dall'utente
 - Si imposta come risultato true
 - Tramite .length si calcola la sua lunghezza
 - si verifica se la lunghezza len è pari o dispari
 - Nel primo caso definiamo half = len/2 nel seconodo caso half = (len-1)/2
 - si effettua il ciclo da i ad half escluso e si verificano 
        se c[i] =?= c[len-i-1]
 - Alla prima i in cui i caratteri sono diversi si cambia result in false e si interrompe il ciclo
        se non capita allora sono tutti uguali e result resta true.

*/

const input = prompt("Per cortesia introduci una parola");

const result = isPalindrome(input);

if (result)
    confirm("L'input è palindromo" )
else
    confirm("L'input non è palindromo")