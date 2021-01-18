let num1 = Number(prompt("insert Number 1"));
let num2 = Number(prompt("insert Number 2"));
let num3 = Number(prompt("insert Number 3"));
if (num1>0 && num2>0 && num3>0)
{
       alert("The sign is +");
}
else if (num1<0 && num2<0 && num3<0)
        {
            alert("The sign is -");
        }
        else if  (num1>0 && num2<0 && num3<0)
        {
            alert("The sign is +");
        }
        else if (num1<0 && num2>0 && num3<0)   
        {
            alert("The sign is +");
        }
        else
        {
          alert("The sign is -");
        }