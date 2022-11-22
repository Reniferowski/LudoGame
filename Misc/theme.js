const simulateBGColor = "                            ";
exports.simulateBGColor = simulateBGColor;
const playerToPL = (player) => {
	return player === "red"
		? "czerwony"
		: player === "green"
		? "zielony"
		: player === "blue"
		? "niebieski"
		: "żółty";
};
exports.playerToPL = playerToPL;

const writePlayer = (player) => {
	const width = 28;
	const spaces = (width - (playerToPL(player).length + 6)) / 2;
	return (
		(player === "red" ? " ".repeat(spaces) : " ".repeat(spaces + 1)) +
		"GRACZ " +
		playerToPL(player).toUpperCase() +
		" ".repeat(spaces)
	);
};

exports.writePlayer = writePlayer;

const fillPlayer = (player) => {
	if (!player) return;
	const width = 28;
	const spaces = (width - player.length) / 2;
	return player.length % 2 === 0
		? " ".repeat(spaces) + player + " ".repeat(spaces)
		: " ".repeat(spaces + 1) + player + " ".repeat(spaces);
};
exports.fillPlayer = fillPlayer;
