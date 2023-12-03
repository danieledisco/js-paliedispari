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













const input = prompt("Per cortesia introduci una parola");
const result = isPalindrome(input);

if (result)
    confirm("L'input è palindromo" )
else
    confirm("L'input non è palindromo")

confirm("Continuiamo a giocare")
const even_odd = Number(prompt("Scegli pari o dispari -1 per pari 2 per dispari-"));
const player_number = Number(prompt("Introduci un numero tra 1 e 5"));
console.log("player_number " + player_number);
const pc_number = doRandomForPc();
console.log("pc_number " + pc_number);
const total = player_number + pc_number;
console.log("total " + total);

if ((isEven(total) && even_odd == 1) || (isOdd(total) && even_odd == 2))
{
    confirm("Tu sei il vincitore")
}
else
{
    confirm("Il pc è il vincitore")
} 