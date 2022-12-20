import React, { useState } from "react";
import PlayerInput from "./PlayerInput";

const ChoosePlayerMenu = ({
	setShowPlayers,
	setPickTheme,
	showPlayers,
	players,
}) => {
	const [pickedColor, setPickedColor] = useState(-1);
	const theme = ["green", "red", "blue", "yellow"];

	const handleClick = (pickedColor) => {
		setPickTheme(
			pickedColor === "green"
				? theme[0]
				: pickedColor === "red"
				? theme[1]
				: pickedColor === "blue"
				? theme[2]
				: theme[3]
		);
		setShowPlayers(false);
	};

	return (
		<div
			style={{
				display: showPlayers ? "flex" : "none",
				flexDirection: "column",
			}}
		>
			<div style={{ display: "flex", flexDirection: "row", height: "100px" }}>
				<PlayerInput
					player={players[theme[0]]?.username}
					theme={theme[0]}
					onClick={handleClick}
				/>
				<PlayerInput
					player={players[theme[1]]?.username}
					theme={theme[1]}
					onClick={handleClick}
				/>
			</div>
			<div style={{ display: "flex", flexDirection: "row", height: "100px" }}>
				<PlayerInput
					player={players[theme[2]]?.username}
					theme={theme[2]}
					onClick={handleClick}
				/>
				<PlayerInput
					player={players[theme[3]]?.username}
					theme={theme[3]}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default ChoosePlayerMenu;
