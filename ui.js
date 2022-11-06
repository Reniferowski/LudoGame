"use strict";
const React = require("react");
const { useState } = require("react");

const { Box } = require("ink");
const importJsx = require("import-jsx");

const HomeScreen = importJsx("./HomeScreen/HomeScreen");
const NewGame = importJsx("./NewGame/NewGame");

const App = () => {
	const [homeScreenOption, setHomeScreenOption] = useState("");
	const view =
		homeScreenOption === "newgame" ? (
			<NewGame />
		) : (
			<HomeScreen setOption={setHomeScreenOption} />
		);
	return (
		<Box
			flexDirection="column"
			minWidth={100}
			minHeight={50}
			borderStyle="round"
			borderColor="red"
		>
			{view}
		</Box>
	);
};

module.exports = App;
