const React = require("react");
const { Box, Text, useInput } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const PlayerInput = importJsx("./PlayerInput");

const ChoosePlayerMenu = ({
	setShowPlayers,
	setPickTheme,
	showPlayers,
	players,
}) => {
	const [pickedColor, setPickedColor] = useState(-1);
	const theme = ["red", "green", "blue", "yellow"];

	useInput((_, key) => {
		if (key.tab) {
			setPickedColor((pickedColor + 1) % theme.length);
		}
		if (key.return) {
			setPickTheme(theme[pickedColor]);
			setPickedColor(-1);
			setShowPlayers(false);
		}
	});

	return (
		<Box
			display={showPlayers ? "flex" : "none"}
			flexDirection="column"
			alignItems="center"
		>
			<Box flexDirection="row">
				<PlayerInput theme={theme[0]} player={players[theme[0]]?.username} />
				<PlayerInput theme={theme[1]} player={players[theme[1]]?.username} />
			</Box>
			<Text>[Tab], aby wybrać kolor</Text>
			<Text>[Enter], aby wybrać gracza z listy lub wystartować grę,</Text>
			<Text>gdy wszyscy gracze zostali wybrani</Text>
			<Box flexDirection="row">
				<PlayerInput theme={theme[2]} player={players[theme[2]]?.username} />
				<PlayerInput theme={theme[3]} player={players[theme[3]]?.username} />
			</Box>
		</Box>
	);
};

module.exports = ChoosePlayerMenu;
