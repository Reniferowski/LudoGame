const React = require("react");
const { Box, Text } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const GameTitle = importJsx("./GameTitle");
const Menu = importJsx("./Menu");

const HomeScreen = () => {
	const [option, setOption] = useState("");

	return (
		<Box flexDirection="column">
			<GameTitle name="morning" text="Ludo Game" font="block" />
			<Menu {...{ setOption }} />
			<Text>{option}</Text>
		</Box>
	);
};

module.exports = HomeScreen;
