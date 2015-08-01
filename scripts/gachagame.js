/* The database for all the gachapon series
 * and their capsule objects
 */


// capsule constructor
function Capsule(name, rarity, rarityPercentage) {
	this.name = name;
	this.rarity = rarity;
	this.rarityPercentage = rarityPercentage;
	this.series;
	this.hidden = false;
	this.quantityCollected = 0;
} 

// series constructor
function GachaSeries(name) {
	this.name = name;
	this.capsules;
	this.unlocked = false;

};

// all serieses are "series_[NAME]"
var series_PETS = new GachaSeries("PETS");
var series_SWEETS = new GachaSeries("SWEETS");
var series_DINOS = new GachaSeries("DINOS");

// assignment of capsules to the serieses
series_PETS.capsules = [
	new Capsule("Dog", "common", 0.40),
	new Capsule("Cat", "common", 0.40),
	new Capsule("Fish", "uncommon", 0.15),
	new Capsule("Hamster", "rare", 0.05)
	];
series_PETS.unlocked = true;

series_SWEETS.capsules = [
	new Capsule("Candy", "common", 0.24),
	new Capsule("Cupcake", "common", 0.24),
	new Capsule("Pudding", "common", 0.24),
	new Capsule("Ice Cream", "uncommon", 0.12),
	new Capsule("Lollipop", "uncommon", 0.12),
	new Capsule("Chocolate Bar", "rare", 0.04)
	];
series_SWEETS.unlocked = true;

series_DINOS.capsules = [
	new Capsule("Velociraptor", "common", 0.27),
	new Capsule("Stegosaurus", "common", 0.27),
	new Capsule("Diplodocus", "common", 0.27),
	new Capsule("Tyrannosaurus", "uncommon", 0.15),
	new Capsule("Triceratops", "rare", 0.04)
	];

//list of all series
var seriesList = [
	series_PETS,
	series_SWEETS,
	series_DINOS
];

// item constructor
function Item(name, exchangeFor, quantityToExchange, type) {
	this.name = name;
	this.exchangeFor = exchangeFor;
	this.quantityToExchange = quantityToExchange;
	this.type = type;
}

// list of all buyable/findable items
var itemsList = [
	new Item("GPMiner", new Capsule
	

// stats for the player, should be saved
// notice, the inventory is for things other than the prizes themselves,
// stuff like, helper items and misc
var playerStats = {
	name : "",
	gachaPoints : 0,
	updateGP : function(value) {
		this.gachaPoints+=value;
	}
	
	inventory : []
};

function GachaponMachine(series) {
	this.series = series;
	this.capsules = this.series.capsules;
	this.dispenseCost = 5;
	this.dispenseCapsule = function() {
		if(playerStats.gachaPoints>=this.dispenseCost) {
			// subtract GP
			playerStats.updateGP(-this.dispenseCost);
			// determine capsule
			var chanceArray = [];
			var counter = 0;
			for(var i=0;i<this.capsules.length;i++) {
				for(var x=0;x<this.capsules[i].rarityPercentage*100;x++) {
					chanceArray[counter] = this.capsules[i];
					counter++;
				}
			}
			
			var result = Math.floor((Math.random() * chanceArray.length));
			var capsule = chanceArray[result];
			// increment quantity collected in series
			capsule.quantityCollected++;
			eventAnnouncement = "You got a "+capsule.name+"! "+"("+capsule.rarity+")";
		}
		else
			eventAnnouncement = "You don't have enough GP! Need "+this.dispenseCost;
	};
}


// iterate to create global vars for active machines
seriesList.forEach(function(item) {
	var machineName = item.name + "_MACHINE";
	window[machineName] = new GachaponMachine(item);
})


// active machine variable
var activeGachaponMachine;

// event announcer- announces capsule gets, lack of funds, etc
var eventAnnouncement = "";

// mainly for increasing GP
function oneSecInterval() {
	playerStats.updateGP(1);
}

// show all unlocked machines
function showUnlockedSerieses() {
	document.getElementById("shopInfo").style.display = "none";
	document.getElementById("unlockedSerieses").style.display = "inline";
	document.getElementById("defaultMenu").style.display = "none";
	
	seriesList.forEach(function(item) {
		if(item.unlocked == true) {
			console.log(item);
			document.getElementById(item.name+"_SERIES").style.display = "inline";
		}
	})
}

// to change the active machine
function changeActiveGachaponMachine(selection) { activeGachaponMachine = selection; }

// show the default gacha screen, changing all three panels
function showDefault() {
	showMenu();
	showCollectionPanel();
	showGachaponMachineArt();
}

// show the default menu
function showMenu() {
	document.getElementById("shopInfo").style.display = "none";
	document.getElementById("unlockedSerieses").style.display = "none";
	document.getElementById("defaultMenu").style.display = "inline";
}

// show the collection panel default
function showCollectionPanel() {
	document.getElementById("collectionPanel").style.display = "inline";
	document.getElementById("shopSelection").style.display = "none";
}


// show the default gacha machine art
function showGachaponMachineArt() {
	document.getElementById("gachaponMachineArt").style.display = "inline";
	document.getElementById("shopkeeperArt").style.display = "none";
}

// show the shop- entails changing main, left, and right panels
function showShop() {
	showShopkeeperArt();
	showShopInfo();
	showShopSelection();
}

// show the shop info menu on the left panel
function showShopInfo() {
	document.getElementById("shopInfo").style.display = "inline";
	document.getElementById("unlockedSerieses").style.display = "none";
	document.getElementById("defaultMenu").style.display = "none";
}

// show the shop selection on the right panel
function showShopSelection() {
	document.getElementById("collectionPanel").style.display = "none";
	document.getElementById("shopSelection").style.display = "inline";
}

// show the shopkeeper art
function showShopkeeperArt() {
	document.getElementById("gachaponMachineArt").style.display = "none";
	document.getElementById("shopkeeperArt").style.display = "inline";
}
	

// buy an item
function buyItem(item) {
	if(
	playerStats.inventory.push(item);
}



// toggle the credits pop thing in the corner
function credits() {
	if(document.getElementById("creditsBox").style.display == "inline") {
		document.getElementById("creditsBox").style.display = "none";
	} else {
		document.getElementById("creditsBox").style.display = "inline";
	}
}

// toggle the help pop thing
function help() {
	if(document.getElementById("helpBox").style.display == "inline") {
		document.getElementById("helpBox").style.display = "none";
	} else {
		document.getElementById("helpBox").style.display = "inline";
	}
}

// toggle the info box for confused souls
function info() {
	if(document.getElementById("infoBox").style.display == "inline") {
		document.getElementById("infoBox").style.display = "none";
	} else {
		document.getElementById("infoBox").style.display = "inline";
	}
}

// mainly for keeping all counters updated
function tenthSecInterval() {
	document.getElementById("gachaPoints").innerHTML = playerStats.gachaPoints;
	document.getElementById("eventAnnouncement").innerHTML = eventAnnouncement;
	
	document.getElementById("collectionSeries").innerHTML = activeGachaponMachine.series.name;
	for(var i=0;i<8;i++) {
		
		if(activeGachaponMachine.capsules[i] != undefined) {
			document.getElementById("capsule"+i.toString()).innerHTML = activeGachaponMachine.capsules[i].name;
			document.getElementById("counter"+i.toString()).innerHTML = activeGachaponMachine.capsules[i].quantityCollected;
		}
		else {
			document.getElementById("capsule"+i.toString()).innerHTML = "";
			document.getElementById("counter"+i.toString()).innerHTML = "";
		}
	}
	
}



// Setting everything into motion
window.onload = function() {
	activeGachaponMachine = PETS_MACHINE;
};

window.setInterval(this.tenthSecInterval.bind(this),100);
window.setInterval(this.oneSecInterval.bind(this),1000);


	