/** function to add ordered list with a check for an existing list*/
function create_list() {		
	var or_list = document.getElementsByTagName("ol");
	
	if (!or_list[0]) {	
		add_list();
	} else {
		for (var j = 0; j < or_list.length; j++) {
			or_list[j].parentNode.removeChild(or_list[j]);
		}	
		add_list();
	}
}
function add_list() {
	var submit_button = document.getElementById("submit_fizzbuzz");
	var ordered_list = document.createElement("ol");
	ordered_list.setAttribute("class", "tasty_cakes");
	submit_button.parentNode.appendChild(ordered_list);
	
	for (var i = 1; i <= 140; i++) {
		var element1 = document.createElement("li");
		var cakes = document.createTextNode("Cakes.");
		element1.appendChild(cakes);
		ordered_list.appendChild(element1);
	}
}	

/** function to modify the existing list to change the text content of every element of the list that number divisible by 3, 5 and 15
function modify_list() {
	var list_to_modify = document.getElementsByTagName("li");
	if (!list_to_modify[0]) {
		alert("Create the list first.");
	} else {
		for (var i = 0; i < list_to_modify.length; i++) {
			var num = i + 1;
			if (num % 5  == 0 && num % 3 == 0) {
				list_to_modify[i].textContent = "Sweet biscuits and apple pies.";
			} else if (num % 5  == 0) {
				list_to_modify[i].textContent = "Apple pies.";
			} else if (num % 3  == 0) {
				list_to_modify[i].textContent = "Sweet biscuits.";
			}
			
			
		}
	}
}*/


/** function to modify the existing list to change the text content of every element of the list that number divisible by 3 and 5*/
function modify_list() {
	var list_to_modify = document.getElementsByTagName("li");
	if (!list_to_modify[0]) {
		alert("Create the list first.");
	} else {
		for (var i = 0; i < list_to_modify.length; i++) {
			var num = i + 1;
			if (num % 3  == 0) {
				add_content_to_element(list_to_modify[i], " Biscuits.");
			} 
			if (num % 5  == 0) {
				add_content_to_element(list_to_modify[i], " Pies.");
			} 
		}
	}
}
/** function to add new content to the element*/
function add_content_to_element(element_to_modify, new_content) {
	var element_content = element_to_modify.textContent;
	
	if (element_content == "Cakes.") {
		element_to_modify.textContent = new_content;
	} else {
		element_to_modify.textContent = element_content + new_content;
	}
}