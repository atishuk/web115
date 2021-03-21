function choice() {
	var num = parseInt(prompt("Number of your favorite baked good:"));
	while( num < 1 || num > 9) {
		num = prompt("Choose right number:");
	}
	var baked_goods = document.getElementsByTagName("li");
	var user_choice = ", great choice!";
	user_choice = baked_goods[num-1].textContent + user_choice;
	var add_text = document.createTextNode(user_choice);
	var choice_p = document.createElement("p");
	choice_p.setAttribute("id", "user_choice");
	choice_p.appendChild(add_text);
	var dom_div = document.getElementById("dom");
	dom_div.childNodes[2].appendChild(choice_p);
}