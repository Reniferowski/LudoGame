const React = require("react");
const { Box, Text } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const Title = importJsx("../components/Title");

const NewGame = () => {
	return (
		<Box flexDirection="column">
			<Title name="morning" text="Ludo Game" font="block" />
		</Box>
	);
};

module.exports = NewGame;
