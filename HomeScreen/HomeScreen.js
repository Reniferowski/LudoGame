const React = require("react");
const { Box } = require("ink");
const importJsx = require("import-jsx");
const GameTitle = importJsx("./GameTitle");
const Menu = importJsx("./Menu");

const HomeScreen = () => {
	return (
		<Box flexDirection="column" borderStyle="bold">
			<GameTitle name="morning" text="Ludo Game" font="block" />
			<Menu />
		</Box>
	);
};

module.exports = HomeScreen;
