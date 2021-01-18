let num1 = Number(prompt("insert Number 1"));
let num2 = Number(prompt("insert Number 2"));
let gcd;

while (num1!=num2)
{
	if (num1>num2)
	{
		num1 = num1 -num2;
	}
	else
	{
		num2 = num2 - num1;
	}
}
gcd = num1;
alert(gcd);
