function showalert() {
	alert("Thank you for visit my site!");
}

var name = "Tasia";
var product = "Cakes";
var price = 4.99;

function brandCreator() {
	var userName = prompt("Enter your name:", name);
	var userProduct = prompt("Enter your product:", product);
	var userBrand = userName + "'s " + userProduct;
	alert("Your brand:\n" + userBrand);
}


function estimate() {
	var num = prompt("One cake is $" + price + "\nHow many cakes do you want?");
	var total = price * num;
	alert("You will pay $" + total);
}

function tips() {
	var userAnswer = prompt("Do you like our cake(s)?", "Yes");
	if (userAnswer.charAt(0).toLowerCase() === 'y') {
		var tip = prompt("Tip: $", 3.00);
		if (tip > 0) {
			alert("Thank you!");
		} else if (tip == 0) {
			alert("Really? So sad :-(");
		} else {
			alert("Tips should be greater than 0.");
		}
	} else {
		alert("Try another cake.");
	}
}

function gift() {
	var cakes = parseInt(document.getElementById("cakesGift").value);
	var donuts = Number(document.getElementById("donutsGift").value);
	var gift = document.getElementById("gift");
	var message = "You bought " + (cakes + donuts).toString() + " baked goods. ";
	if (cakes > 2 || donuts > 4 || (cakes + donuts) > 5) {
		message = message + "You've got a free cake.";
	} else {
		message = message + "To receive a gift you need to buy more.";
	}
	gift.textContent = message;
}

var products = ["Biscuit", "Bun", "Cake", "Cookie", "Pie", "Donut"];
var newProduct = "Muffin";
products.push(newProduct);
var productList = document.getElementById("products");
function addProduct() {
	var newmsg = "Now we have: ";
	for (var i = 0; i < products.length; i++) {
		newmsg = newmsg + products[i] + ", ";
	}
	newmsg = newmsg.slice(0,-2) + "."
	productList.textContent = newmsg;
}

function game() {
	var userNum = parseInt(prompt("Enter number from 1 to 10:", "1"));
	var randomNum = (Math.random() * 10) + 1;
	var randomInt = Math.floor(randomNum);
	if (userNum > randomInt) {
		alert("Your number " + userNum + " is bigger than my number " + randomInt);
	} else if (userNum < randomInt) {
		alert("Your number " + userNum + " is less than my number " + randomInt);
	} else {
		alert("Your number " + userNum + " is equal to my number " + randomInt);
	}
}

function sale() {
	var saleMessage = document.getElementById("sale");
	var numBuns = 3;
	var priceBuns = 5;
	var priceOneBun = priceBuns / numBuns;
	var str = priceOneBun.toString();
	if (str.charAt(str.length - 1) === "5") {
		str = str.slice(0, str.length - 1) + "6";
	}
	bun = Number(str);
	bunPrice = bun.toFixed(2);
	message = "Now " + numBuns + " buns is $" + priceBuns + "! Just " + bunPrice + " each." 
	saleMessage.textContent = message;
}

document.getElementById("dateBtn").onclick = function() { 
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dateIs = document.getElementById("forDate");
	var today = new Date();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var year = today.getFullYear();
	var weekDayName = dayNames[today.getDay()];
	var todayMDY = month + '/' + day + '/' + year;
	dateIs.textContent = "Today is " + weekDayName + ", "+ todayMDY + ".";
}

function numOfGoods() {
	var cake = Number(document.getElementById("cakes").value);
	var donut = Number(document.getElementById("donuts").value);
	var cookie = Number(document.getElementById("cookies").value);
	var biscuit = Number(document.getElementById("biscuits").value);
	return [cake, donut, cookie, biscuit];
}

function userOrder(goods) {
	var baked = ["cake", "donut", "cookie", "biscuit"];
	var message = "You ordered "
	for (var i = 0; i < goods.length; i++) {
		if (goods[i] > 0 ) {
			if (goods[i] > 1 ) {
				message = message + goods[i] + " " + baked[i] + "s, ";
			} else {				
				message = message + goods[i] + " " + baked[i] + ", ";
			}
		}
	}
	if (message === "You ordered ") {
		message = message + "nothing.";
	} else {
		message = message.slice(0,-2) + ".";
	}
	document.getElementById("forFunctions").textContent = message;
}
document.getElementById("order").onclick = function() {
	userOrder(numOfGoods());
}

function discount() {
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var dateIs = document.getElementById("forSwitch");
	var today = new Date();
	var weekDay = today.getDay();
	var weekDayName = dayNames[weekDay];
	var discountmsg = "";
	var message = "Today is " + weekDayName + ". ";
	switch(weekDay) {
		case 0:
			discountmsg = "You've got a discount of 20%.";
			break;
		case 5:
			discountmsg = "You've got a discount of 10%.";
			break;
		case 6:
			discountmsg = "You've got a discount of 15%.";
			break;
		default:
			discountmsg = "You don't have a discount."
	}
	message += discountmsg;
	document.getElementById("forSwitch").textContent = message;
}

function tryCake() {
	var userNum = Number(prompt("How many pieces do you want to try?", "1"));
	var i = 0;
	var j = 0;
	var forWhile = document.getElementById("forWhile");
	while (i < userNum) {
		var imgCake = document.createElement("img");
		imgCake.setAttribute("src", "images/cake-piece.png");
		imgCake.setAttribute("class", "expampleimg");
		forWhile.appendChild(imgCake);
		i++;
	}
	var p = document.createElement("p");
		var txt1 = document.createTextNode("This is gift for you:");
		p.appendChild(txt1);
		forWhile.appendChild(p);
	do {
		var imgMuffin = document.createElement("img");
		imgMuffin.setAttribute("src", "images/muffin.png");
		imgMuffin.setAttribute("class", "expampleimg");
		forWhile.appendChild(imgMuffin);
		j++;
	} while (j < userNum);
}

function newStyle() {
	var slogon = document.getElementById("forStyles");
	slogon.style.fontSize = "2em";
}

function listStyle() {
	var bakedGoods = document.getElementsByTagName("li");
	for (var i = 0; i < bakedGoods.length; i++) {
		bakedGoods[i].style.marginLeft = "3em";
	}
}

function favouriteBG() {
	var userNum = prompt("Choose number from 1 to 9.");
	var bakedGoods = document.getElementsByTagName("li");
	var userBG = bakedGoods[userNum - 1].textContent.toLowerCase();
	document.getElementById("favourite").textContent = "I know that you like " + userBG + "s.";
}












