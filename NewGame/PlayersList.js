const React = require("react");
const { Box, Text, useInput } = require("ink");
const importJsx = require("import-jsx");
const { getUsers } = require("./misc/getUsers");
const Menu = importJsx("../components/Menu");

const { playerToPL } = require("./misc/theme");

const PlayersList = ({
	showPlayers,
	setShowPlayers,
	pickTheme,
	addPlayer,
	players,
}) => {
	const users = getUsers();
	useInput((_, key) => {
		if (key.return) {
			setShowPlayers(true);
		}
	});

	return (
		<Box
			display={showPlayers ? "none" : "flex"}
			flexDirection="column"
			alignItems="center"
			alignSelf="center"
		>
			<Text color={pickTheme}>GRACZ {playerToPL(pickTheme).toUpperCase()}</Text>
			{!showPlayers && (
				<Menu
					theme={pickTheme}
					setOption={addPlayer}
					players={players}
					{...users}
				/>
			)}
		</Box>
	);
};

module.exports = PlayersList;
