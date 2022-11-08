const React = require("react");
const importJsx = require("import-jsx");
const { Box, Text } = require("ink");
const Title = importJsx("../../components/Title");
const { getUsers } = require("../misc/getUsers");
const fs = require("fs");

const addScore = (player) => {
	const users = getUsers();
	const updatedUsers = users.map((user) => {
		if (user.username === player.username) user.score += 1;
		return user;
	});
	fs.writeFileSync("users.json", JSON.stringify(updatedUsers));
};

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
