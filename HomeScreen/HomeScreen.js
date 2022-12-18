const React = require("react");
const { Box } = require("ink");
const importJsx = require("import-jsx");
const Title = importJsx("../components/Title");
const Menu = importJsx("../components/Menu");

const HomeScreen = ({ setOption }) => {
	return (
		<Box flexDirection="column">
			<Title name="morning" text="Ludo Game" font="block" />
			<Menu
				{...{ setOption }}
				newgame="newgame"
				ranking="ranking"
				web="web"
				exit="exit"
			/>
		</Box>
	);
};

module.exports = HomeScreen;
