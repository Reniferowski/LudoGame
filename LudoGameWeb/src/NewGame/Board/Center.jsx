import React from "react";

const Center = ({ diceRoll, playerTurn, players, pawnNumber }) => {
	return (
		<div
			style={{
				width: "200px",
				borderLeft: "1px solid blue",
				borderTop: "1px solid yellow",
				borderRight: "1px solid green",
				borderBottom: "1px solid red",
				borderRadius: "15px",
			}}
		>
			<p>
				{playerTurn} {players[playerTurn].username}
			</p>
			<p>
				{playerTurn} {diceRoll} {pawnNumber}
			</p>
		</div>
	);
};

export default Center;
