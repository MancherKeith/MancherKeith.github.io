function makePhrases() {
	var words1 = ["24/7", "multi-Tier", "30000 foot", "B-to-B", "win-win"];
	var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
	
	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	
	var phrase = words1[rand1] + " " + words2[rand2];
	var phraseElement = document.getElementById("phrase");
	phraseElement.innerHTML = phrase;
}
window.onload = makePhrases;