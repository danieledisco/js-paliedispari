/**
 * Qui ci sono le funzioni necessarie
 */
/**
 * function isEven(input)
 * se input%2 è 0 input è pari altrimenti dispari
 */
/**
 * function isOdd(input)
 * se input%2 è diverso da 0 input è dispari altrimenti dispari
 */

/*
function isPalindrome(input)
Pseudocodice
 - Si imposta come risultato true
 - Tramite .length si calcola la lunghezza di input
 - si verifica se la lunghezza len è pari o dispari
 - Nel primo caso definiamo half = len/2 nel seconodo caso half = (len-1)/2
 - si effettua il ciclo da i ad half escluso e si verificano 
        se c[i] =?= c[len-i-1]
 - Alla prima i in cui i caratteri sono diversi si cambia result in false e si interrompe il ciclo
        se non capita allora sono tutti uguali e result resta true.
*/

/*
function doRandomForPc()
Pseudocodice
    Essenzialmente si tratta di utilizzare l'istruzione
    Math.floor((Math.random() * 5) + 1)
    Math.random genera un numero casuale uniformemente distribuito tra 0 ed 1
    Moltiplicandolo per 5 il numero ha estensione tra 0 e 5
    Math.floor arrotonda verso il basso (pavimento) all'intero.
    In questo modo i numeri saranno compresi tra 0 e 4 quindi aggiungendo 1 si ottoene
    il risultato cercato              
*/








/**
 * Function isEven(input)
 * Accetta in ingresso un numero e restituisce
 * true se è pari e false se è dispari
 * TODO: gestire il caso in cui input non sia un numero
 */
function isEven( input )
{
    if ( input%2 == 0 )
        return true;
    else
        return false;
}

/**
 * Function isOdd(input)
 * Accetta in ingresso un numero e restituisce
 * true se è dispari e false se è pari
 * TODO: gestire il caso in cui input non sia un numero
 */
function isOdd ( input )
{
    if ( input%2 != 0)
        return true;
    else
        return false;
}

/**
 * Function isPalindrome(input)
 * Accetta in ingresso una stringa
 * e restituisce true se l'imput è palindromo altrimenti false
 */
function isPalindrome(input)
{
    let result = true;
    const len = input.length;
    let half;

    if (isEven(len))
        half = len/2;
    else
        half = (len-1)/2;

    for (i=0; i<half; i++)
    {
        if (input[i] != input[len-i-1])
        {
            result = false;
            break;
        }
    }
    return result;
}

/**
 * Function doRandomForPc()
 * Produce un numero casuale tra 1 e 5
 */
function doRandomForPc()
{
    const out = Math.floor((Math.random() * 5) + 1);
    return out;
}