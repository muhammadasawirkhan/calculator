function calculate(button_value,op)
{
	if(op!='+')
	document.querySelector("#result").value=document.querySelector("#result").value+button_value;
	if(op=="+" || op=='-')
	document.querySelector("#result").value="";
}