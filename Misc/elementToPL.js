const elementToPL = (element) =>
	element === "newgame"
		? "Nowa gra"
		: element === "ranking"
		? "Ranking"
		: element === "web"
		? "Tryb Graficzny"
		: "Wyjście";

module.exports = elementToPL;
