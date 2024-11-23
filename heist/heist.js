var boxes = [
	"Genestealers",
	"Malstrain Genestealers",
	"Carnifex",
	"Ghouls",
	"Big Ghouls",
	"C'tan Shard of the Void Dragon",
	"Orks",
	"Ghazghkull Mag Uruk Thraka",
	"A Malifaux Gang",
	"Daemonic Possession"
]

var loot = [
	"Barrel of Laughs",
	"Ghast"
]

var festiveTypeButton = document.getElementById('festiveTypeButton');
festiveTypeButton.addEventListener('click', function() {
		// TODO: Load festive data.
	});

var openBoxButton = document.getElementById('openBoxButton');
openBoxButton.addEventListener('click', OpenBox);

var openLootButton = document.getElementById('openLootButton');
openLootButton.addEventListener('click', OpenLoot);

var output = document.getElementById('output');

function GetRandom(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function OpenBox()
{
	output.innerHTML = boxes[GetRandom(0, boxes.length-1)]	
}

function OpenLoot()
{
	output.innerHTML = loot[GetRandom(0, loot.length-1)]	
}
