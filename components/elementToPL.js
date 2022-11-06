const elementToPL = (element) =>
	element === "newgame"
		? "Nowa gra"
		: element === "ranking"
		? "Ranking"
		: "Wyjście";

module.exports = elementToPL;
