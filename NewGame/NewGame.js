const React = require("react");
const { Box, useInput } = require("ink");
const importJsx = require("import-jsx");
const { useState, useCallback } = require("react");
const ChoosePlayerMenu = importJsx("./ChoosePlayerMenu");
const PlayersList = importJsx("./PlayersList");
const Title = importJsx("../components/Title");
const GameBoard = importJsx("./Board/GameBoard");

const NewGame = () => {
	const [players, setPlayers] = useState({});
	const [showPlayers, setShowPlayers] = useState(true);
	const [pickTheme, setPickTheme] = useState("");
	const [startGame, setStartGame] = useState(false);

	const addPlayer = useCallback((player, color) => {
		setPlayers((prev) => ({ ...prev, [color]: player }));
	}, []);

	useInput((_, key) => {
		if (key.return) Object.keys(players).length >= 4 && setStartGame(true);
	});

	return (
		<Box flexDirection="column">
			{!startGame ? (
				<>
					<Title name="morning" text="Ludo Game" font="block" />
					<Box
						borderStyle="round"
						borderColor={pickTheme}
						width={80}
						height={30}
						alignSelf="center"
						justifyContent="center"
						flexDirection="column"
					>
						<ChoosePlayerMenu
							{...{
								showPlayers,
								setShowPlayers,
								setPickTheme,
								pickTheme,
								players,
							}}
						/>
						<PlayersList
							{...{
								showPlayers,
								setShowPlayers,
								setPickTheme,
								pickTheme,
								addPlayer,
								players,
							}}
						/>
					</Box>
				</>
			) : (
				<GameBoard {...{ players }} />
			)}
		</Box>
	);
};

module.exports = NewGame;
