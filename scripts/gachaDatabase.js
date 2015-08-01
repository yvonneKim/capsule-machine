/* The database for all the gachapon series
 * and their capsule objects
 */


// capsule constructor
function Capsule(name, rarity) {
	this.name = name;
	this.rarity = rarity;
	this.series;
	this.hidden = false;
} 

// series constructor
function GachaSeries(name) {
	this.name = name;
	this.capsules;

};


// all serieses are "series_[NAME]"
var series_PETS = new GachaSeries("PETS");

series_PETS.capsules = [
	new Capsule("Dog", "common"),
	new Capsule("Cat", "common"),
	new Capsule("Fish", "uncommon"),
	new Capsule("Hamster", "rare")
	];