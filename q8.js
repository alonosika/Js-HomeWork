function happy_number(num) 
{
    let sum, number ;
    let c = [] ;
 
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        sum= 0 ;
        while (num > 0) {
            number = num % 10 ;
            sum += number * number ;
            num = (num  - number) / 10 ;
        }
        num = sum ;
    }
    return (num == 1) ;
}
 
let cnt = 5;
let num = 1;
let first5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
first5 = first5+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+first5);