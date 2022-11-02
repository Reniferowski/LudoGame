"use strict";
const React = require("react");
const { useState } = require("react");

const { Box } = require("ink");
const importJsx = require("import-jsx");

const HomeScreen = importJsx("./HomeScreen/HomeScreen");
const NewGame = importJsx("./NewGame/NewGame");

const App = () => {
	const [option, setOption] = useState("");
	const view =
		option === "newgame" ? <NewGame /> : <HomeScreen {...{ setOption }} />;
	return <Box flexDirection="column">{view}</Box>;
};

module.exports = App;
