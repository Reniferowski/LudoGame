import React from "react";

const Center = ({ diceRoll, playerTurn, players, pawnNumber }) => {
	return (
		<div
			style={{
				width: "200px",
				borderLeft: "2px solid blue",
				borderTop: "2px solid yellow",
				borderRight: "2px solid green",
				borderBottom: "2px solid red",
				borderRadius: "15px",
			}}
		>
			<p>Rzuca</p>
			<p style={{ color: playerTurn, fontWeight: "bold", fontSize: "20px" }}>
				{players[playerTurn].username}
			</p>
			<p style={{ color: playerTurn, fontWeight: "bold", fontSize: "20px" }}>
				{diceRoll}
			</p>
			<p>Pionek nr. {pawnNumber}</p>
		</div>
	);
};

export default Center;
