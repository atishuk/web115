/** function to add ordered list with a check for an existing list*/
function submit_click() {	
	var name = add_name();
	var num = prompt("How high do you want to count, " + name + "?");
	var or_list = document.getElementsByTagName("ol");
	
	if (!or_list[0]) {	
		add_list(num);
	} else {
		for (var j = 0; j < or_list.length; j++) {
			or_list[j].parentNode.removeChild(or_list[j]);
		}	
		add_list(num);
	}
}

function add_name() {
	var first_name = document.getElementById("first_name").value;
	var last_name = document.getElementById("last_name").value;
	var middle_initial = document.getElementById("middle_initial").value;
	var full_name = first_name + " " + middle_initial + ". " + last_name;
	var greeting_header = document.getElementById("greeting_header");
	var greeting_text = greeting_header.textContent;
	if (greeting_text.slice(-(full_name.length + 1)) != (full_name + "!")) {
		greeting_header.textContent = greeting_header.textContent.replace("!", " " + full_name + "!");
	}
	return first_name;
}

function add_list(len) {
	var submit_form = document.getElementById("fizzbuzz_form");
	var ordered_list = document.createElement("ol");
	ordered_list.setAttribute("class", "tasty_cakes");
	submit_form.parentNode.appendChild(ordered_list);
	
	for (var i = 1; i <= len; i++) {
		var element1 = document.createElement("li");
		var cakes = document.createTextNode("Cakes.");
		element1.appendChild(cakes);
		ordered_list.appendChild(element1);
	}
}	

/** function to modify the existing list to change the text content of every element of the list that number divisible by 3 and 5*/
function modify_list() {
	var list_to_modify = document.getElementsByTagName("li");
	if (not_modified_list(list_to_modify)) {
		if (!list_to_modify[0]) {
			alert("Create the list first.");
		} else {
			add_content_to_element_by_divider(1, list_to_modify, "Cakes.")
			add_content_to_element_by_divider(3, list_to_modify, " Biscuits.")
			add_content_to_element_by_divider(5, list_to_modify, " Pies.")
			add_content_to_element_by_divider(7, list_to_modify, " BANG.")
		} 
	} else {
		alert("This list was just modified.");
	}
}
/** function to add new content to the element*/
function add_content_to_element_by_divider(divider, list_to_modify, new_content, main_content = "Cakes.") {
	for (var i = 0; i < list_to_modify.length; i++) {
		var num = i + 1;
		var element_content = list_to_modify[i].textContent;
		if (num % divider == 0) {
			if (element_content == main_content) {
				list_to_modify[i].textContent = new_content;
			} else {
				list_to_modify[i].textContent = element_content + new_content;
			}
		}
	}
}

function not_modified_list(new_list) {
	let is_not_modified = true;
	for (let i = 0; i < new_list.length - 1; i++) {
		if (new_list[i].textContent !== new_list[i+1].textContent) {
			is_not_modified = false;
		}
	}
	if (new_list[0].textContent !== new_list[new_list.length - 1].textContent) {
		is_not_modified = false;
		}
	return is_not_modified;
}