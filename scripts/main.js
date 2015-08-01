//MAIN VARS
var SPEARMEN_TO_ARCHERS = 5;
var ARCHERS_TO_SWORDSMEN = 3;
 

//unit objects
var spearmen = {
	count : 0,
	POWER : 1,
	totalPower : this.POWER*this.count
}

var archers = {
	count : 0,
	POWER : 3,
	totalPower : this.POWER*this.count
}

var swordsmen = {
	count : 0,
	POWER : 5,
	totalPower : this.POWER*this.count
}
	
//update unit quantities	
function updateSpearmen(value) {
	spearmen.count+=value;
}

function updateArchers(value) {
	archers.count+=value;
}

function updateSwordsmen(value) {
	swordsmen.count+=value;
}


function convertSpearmenToArchers(value) {
	if(spearmen.count>=SPEARMEN_TO_ARCHERS) {
		spearmen.count-=SPEARMEN_TO_ARCHERS;
		updateArchers(1);
	}
}

function convertArchersToSwordsmen(value) {
	if(archers.count>=ARCHERS_TO_SWORDSMEN) {
		archers.count-=ARCHERS_TO_SWORDSMEN;
		updateSwordsmen(1);
	}
}

// the interval functions
function oneSecInterval() {
	updateSpearmen(1);
}

function tenthSecInterval(){
	document.getElementById("spearmen").innerHTML = spearmen.count;	
	document.getElementById("archers").innerHTML = archers.count;
	document.getElementById("swordsmen").innerHTML = swordsmen.count;
	
	// setting every button to disabled
	document.getElementById("archersButton").disabled = true;
	document.getElementById("swordsmenButton").disabled = true;
	
	if(spearmen.count>=SPEARMEN_TO_ARCHERS) {
		document.getElementById("archersButton").disabled = false;
	}
	
	if(archers.count>=ARCHERS_TO_SWORDSMEN) {
		document.getElementById("swordsmenButton").disabled = false;
	}
}


// Setting everything into motion
window.onload = function() {
	updateSpearmen(0);
	updateArchers(0);
	updateSwordsmen(0);
}

window.setInterval(this.tenthSecInterval.bind(this),100);
window.setInterval(this.oneSecInterval.bind(this),1000);


	