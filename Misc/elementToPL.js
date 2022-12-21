const elementToPL = (element) =>
	element === "newgame"
		? "Nowa gra"
		: element === "ranking"
		? "Ranking"
		: element === "web"
		? "Tryb Graficzny"
		: "Zamknij grę";

module.exports = elementToPL;
