function total(num1, operator, num2)	{

var operatorDropdown = document.getElementById("operator")
var operator = operatorDropdown.options[operatorDropdown.selectedIndex].value
var num1 = parseInt(document.getElementById("number1").value);
var num2 = parseInt(document.getElementById("number2").value);
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;

	switch(operator)
		{case "Add":
			alert (sum)
			break
		case "Subtract":
			alert (difference)
			break
		case "Multiply":
			alert (product)
			break
		case "Divide":
			alert (quotient)
		default:
			alert ("Error, please try again!")				
		}
	}