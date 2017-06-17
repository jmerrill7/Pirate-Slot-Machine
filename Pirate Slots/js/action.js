window.onload = function setTreasure(){
	document.getElementById("reel1").src = "images/treasure.png";
	document.getElementById("reel2").src = "images/treasure.png";
	document.getElementById("reel3").src = "images/treasure.png";
}

function $(id){
	return document.getElementById(id);
}

function spinReel(){
  
	var images = ["images/sword.png", "images/map.png", "images/parrot.png", "images/rum.png", "images/shark.png", "images/skull.png", "images/spyglass.png", "images/treasure.png" ];  
	var rand = images[Math.floor(Math.random() * images.length)];
	return rand;
}

function determineWinnings(){
	
	var mapCount = 0;
	var winnings = 0;
	var bet = parseFloat( $('bet').value );
	
	var results = [spinReel(), spinReel(), spinReel()];
	
	document.getElementById("reel1").src = results[0];
	document.getElementById("reel2").src = results[1];
	document.getElementById("reel3").src = results[2];
	
	if (results[0] == "images/map.png")
		mapCount ++;
	if (results[1] == "images/map.png")
		mapCount ++;
	if (results[2] == "images/map.png")
		mapCount ++;
	
	if (mapCount == 1)
		winnings = bet * 2;	
	if (mapCount == 2)
		winnings = bet * 3;
	if (mapCount == 3)
		winnings = bet * 4;
	
	if (results[0] == "images/skull.png" || results[1] == "images/skull.png" || results[2] == "images/skull.png")
		winnings = bet * 0;	
	if (results[0] == "images/treasure.png" && results[1] == "images/treasure.png" && results[2] == "images/treasure.png")
		winnings = bet * 100;
	
	$('winnings').innerHTML = winnings.toFixed(2);
	
	console.log(results)
	console.log(bet)
	console.log(winnings)
}