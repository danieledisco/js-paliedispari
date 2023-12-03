/**
 * Here are reported the functions needed
 */

function isEven( input )
{
    if ( input%2 == 0 )
        return true;
    else
        return false;
}

function isOdd ( input )
{
    if ( input%2 != 0)
        return true;
    else
        return false;


}

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