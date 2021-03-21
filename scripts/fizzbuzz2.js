/** A function that takes 2 numbers from a form and put an answer about divisibility of two numbers to the end of  main block in the html page. */
function check_nums() {
	var first_number =  parseInt(document.getElementById("first_number").value);
	var second_number =  parseInt(document.getElementById("second_number").value);
	var list_to_modify = document.getElementsByTagName("li");
	var new_text = "asd";

	var form_fizzbuzz = document.getElementsByTagName("form");
	if (checkDivision(first_number, second_number)) {
		// creating a string for output
		if (first_number > second_number) {
			new_text = first_number + " is divided by " + second_number + ".";
		} else {
			new_text = second_number + " is divided by " + first_number + ".";
		}
	} else {
		new_text = first_number + " and " + second_number + " are not divisible.";
	}
		
	new_p = document.createElement("p");
	var text_for_p = document.createTextNode(new_text);
	new_p.appendChild(text_for_p);
	form_fizzbuzz[0].parentNode.appendChild(new_p);	
}

/** a function that takes 2 numbers, and checks if one is evenly divisible by the other.*/
function checkDivision(num1, num2) {
	var is_divisible = false;
	if ((num1 % num2 === 0) || (num2 % num1 === 0)) {
		is_divisible = true;
	}
	return is_divisible;
}
