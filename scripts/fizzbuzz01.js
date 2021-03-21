function greeting() {
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var middle_initial = document.getElementById("middle_initial").value;
	var full_name = first_name + " " + middle_initial + ". " + last_name
	alert("Hello, " + full_name + "!");
	
	var greeting_header = document.getElementById("greeting_header");
	greeting_header.textContent = greeting_header.textContent.replace("!", " " + full_name + "!");
	
	var submit_button = document.getElementById("submit_fizzbuzz");
	var ordered_list = document.createElement("ol");
	ordered_list.setAttribute("class", "tasty_cakes");
	submit_button.parentNode.parentNode.appendChild(ordered_list);
	
	for (var i = 0; i < 125; i++) {
		var element1 = document.createElement("li");
		var cakes = document.createTextNode("Tasty cakes");
		element1.appendChild(cakes);
		ordered_list.appendChild(element1);
	}	

}