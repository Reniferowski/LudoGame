"use strict";
const React = require("react");
const { useState } = require("react");
const { spawn } = require("child_process");

const { Box } = require("ink");
const importJsx = require("import-jsx");

const HomeScreen = importJsx("./HomeScreen/HomeScreen");
const NewGame = importJsx("./NewGame/NewGame");
const Ranking = importJsx("./components/Ranking");
const Title = importJsx("./components/Title");

const App = () => {
	const [homeScreenOption, setHomeScreenOption] = useState("");

	if (homeScreenOption === "web") {
		spawn("cmd.exe", ["/c", "script.bat"]);
	}

	const view =
		homeScreenOption === "newgame" ? (
			<NewGame />
		) : homeScreenOption === "ranking" ? (
			<Ranking {...{ setHomeScreenOption }} />
		) : homeScreenOption === "exit" ? (
			<Box flexDirection="column" marginTop={13}>
				<Title name="morning" text="thanks for" font="block" />
				<Title name="morning" text="playing" font="block" />
			</Box>
		) : (
			<HomeScreen setOption={setHomeScreenOption} />
		);
	return homeScreenOption === "web" ? null : (
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
