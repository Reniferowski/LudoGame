const React = require("react");
const importJsx = require("import-jsx");
const { Box, Text } = require("ink");
const Title = importJsx("../../components/Title");
const { addScore } = require("../../ManageUser/addScore");

const Winner = ({ player }) => {
	addScore(player);
	return (
		<>
			<Box
				flexDirection="column"
				alignItems="center"
				alignSelf="center"
				justifyContent="center"
			>
				<Title name="morning" text="Winner" font="block" align="left" />
				<Text>Wygrywa gracz</Text>
				<Text>{player.username}</Text>
			</Box>
		</>
	);
};

module.exports = Winner;
