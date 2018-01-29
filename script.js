var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button_trigger = document.getElementById("enter");

//==Functions==
	function setGradient() {
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
	}//end setGradient


	//Function obtained from "https://stackoverflow.com/questions/1573053/javascript-function-to-convert-color-names-to-hex-codes"
	//to convert string colours, to hex values.
	function getHexColor(colorStr) {
	    var a = document.createElement('div');
	    a.style.color = colorStr;
	    var colors = window.getComputedStyle( document.body.appendChild(a) ).color.match(/\d+/g).map(function(a){ return parseInt(a,10); });
	    document.body.removeChild(a);
	    return (colors.length >= 3) ? '#' + (((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2]).toString(16).substr(1)) : false;
	}//end getHexColor


	function setColours(){

		//console.log("Button Pushed!");
		var color1 = '#'+Math.floor(Math.random()*16777215).toString(16);
		var color2 = '#'+Math.floor(Math.random()*16777215).toString(16);

		//Set colour inputs to rando values that were chosen :)
		color1.value = color1;
		color2.value = color2;

		//console.log(color1 +" " + color2);

		body.style.background = 
		"linear-gradient(to right, " 
		+ color1
		+ ", " 
		+ color2 
		+ ")";

		css.textContent = body.style.background + ";";

	}//end setColours


//==Code to make colour inputs match the background generated on the first page load==
	//Get current background color!
	var bodyStyle = window.getComputedStyle(document.body, null);
	bgColor = bodyStyle.background;
	//console.log(bgColor);

	//Strip out the colours from the current background color
	var res = bgColor.split(" ");
	var colorStart1 = res[6].slice(0,-1);
	var colorStart2 = res[7].slice(0,-1);
	//console.log("First color: "+colorStart1);
	//console.log("Second color: "+colorStart2);

	//Set the input colurs to the current background
	color1.value = getHexColor(colorStart1);
	color2.value = getHexColor(colorStart2);

//==Display the initial CSS linear gradient property on page load==
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

	css.textContent = body.style.background + ";";

//==BONUS: Add a random button which generates two random numbers for the colour inputs.==

//==Setup event listeners==
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);
	button_trigger.addEventListener("click", setColours);  //if anyone clicks on the button, call this function.




