import React from "react";
import Menu from "../components/Menu/Menu";

const HomeScreen = ({ setOption }) => {
	return (
		<div>
			<Menu {...{ setOption }} newgame="newgame" ranking="ranking" web="web" />
		</div>
	);
};

export default HomeScreen;
