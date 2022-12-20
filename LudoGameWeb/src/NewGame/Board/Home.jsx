import React from "react";

const Home = ({ color, player, pawns }) => {
	const borderTheme = "2px solid " + color;
	return (
		<div
			style={{
				border: borderTheme,
                borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				width: "320px",
			}}
		>
			<div>{player?.username}</div>
			<div
				style={{ border: borderTheme, display: "flex", flexDirection: "row" }}
			>
				{pawns[color].map(
					(pawn) =>
						[1, 2].includes(pawn.index) && (
							<div key={pawn.index}>{pawn.index}</div>
						)
				)}
			</div>
			<div
				style={{ border: borderTheme, display: "flex", flexDirection: "row" }}
			>
				{pawns[color].map(
					(pawn) =>
						[3, 4].includes(pawn.index) && (
							<div key={pawn.index}>{pawn.index}</div>
						)
				)}
			</div>
		</div>
	);
};

export default Home;
