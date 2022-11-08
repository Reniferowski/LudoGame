const React = require("react");
const { Box, Text, useInput } = require("ink");
const { getUsers } = require("./NewGame/misc/getUsers");
const importJsx = require("import-jsx");
const Title = importJsx("./components/Title");

const Ranking = ({ setHomeScreenOption }) => {
	useInput((_, key) => {
		if (key.escape) setHomeScreenOption("");
	});

	const users = getUsers().sort((a, b) => b.score - a.score);
	return (
		<>
			<Title name="morning" text="Ludo Game" font="block" />
			<Box
				flexDirection="column"
				borderStyle="round"
				borderColor="red"
				alignSelf="center"
				width={80}
				height={30}
                paddingLeft={20}
                paddingTop={3}
			>
				{users.map((user, id) => (
					<Text key={user.id}>
						Pozycja: {id + 1} Gracz: {user.username} Wygrane: {user.score / 3}
					</Text>
				))}
				<Box paddingTop={3}>
					<Text>Wciśnij [ESC], aby wrócić do ekranu głównego</Text>
				</Box>
			</Box>
		</>
	);
};

module.exports = Ranking;
