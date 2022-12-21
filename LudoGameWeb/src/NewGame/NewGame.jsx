import React, { useState, useCallback } from "react";
import ChoosePlayerMenu from "./ChoosePlayerMenu";
import PlayersList from "./PlayersList";
import GameBoard from "./Board/GameBoard";
import Title from "../components/Title/Title";

const NewGame = () => {
	const [players, setPlayers] = useState({});
	const [showPlayers, setShowPlayers] = useState(true);
	const [pickTheme, setPickTheme] = useState("");
	const [startGame, setStartGame] = useState(false);

	const addPlayer = useCallback((player, color) => {
		console.log(player, players, color);
		setPlayers((prev) => ({ ...prev, [color]: player }));
	}, []);

	const handleStart = () => {
		Object.keys(players).length >= 4 && setStartGame(true);
		console.log(startGame);
	};

	return (
		<>
			{!startGame && <Title />}
			<div style={{ display: "flex", placeContent: "center" }}>
				{!startGame ? (
					<>
						<ChoosePlayerMenu
							{...{
								showPlayers,
								setShowPlayers,
								setPickTheme,
								pickTheme,
								players,
								handleStart,
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
					</>
				) : (
					<GameBoard {...{ players }} />
				)}
				{/* {startGame && <h1>eeessa</h1>} */}
			</div>
		</>
	);
};

export default NewGame;
