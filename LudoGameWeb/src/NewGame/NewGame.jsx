import React, { useState, useCallback } from "react";
import ChoosePlayerMenu from "./ChoosePlayerMenu";
import PlayersList from "./PlayersList";

const NewGame = () => {
	const [players, setPlayers] = useState({});
	const [showPlayers, setShowPlayers] = useState(true);
	const [pickTheme, setPickTheme] = useState("");
	const [startGame, setStartGame] = useState(false);

	const addPlayer = useCallback((player, color) => {
		console.log(player, players, color);
		setPlayers((prev) => ({ ...prev, [color]: player }));
	}, []);

	console.log(players);

	return (
		<div style={{ display: "flex" }}>
			<ChoosePlayerMenu
				{...{
					showPlayers,
					setShowPlayers,
					setPickTheme,
					pickTheme,
					players,
				}}
			/>
			<PlayersList
				{...{
					showPlayers,
					setShowPlayers,
					setPickTheme,
					pickTheme,
					addPlayer,
					players,
				}}
			/>
		</div>
	);
};

export default NewGame;
