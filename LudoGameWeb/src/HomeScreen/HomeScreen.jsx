import React from "react";
import Menu from "../components/Menu/Menu";
import Title from "../components/Title/Title";

const HomeScreen = ({ setOption }) => {
	return (
		<>
			<Title />
			<div style={{ display: "flex", placeContent: "center", }}>
				<Menu
					{...{ setOption }}
					newgame="newgame"
					ranking="ranking"
					exit="exit"
				/>
			</div>
		</>
	);
};

export default HomeScreen;
