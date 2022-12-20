import React from "react";
const {
	chooseActive,
	pawnPlacement,
	isPawnOnId,
	showPawn,
} = require("../../../../GameLogic/pawnMovement");

const Square = ({
	id,
	color,
	mLeft,
	mRight,
	playerTurn,
	isActiveBluePawn,
	isActiveYellowPawn,
	isActiveGreenPawn,
	isActiveRedPawn,
}) => {
	const pawn = pawnPlacement(
		chooseActive(
			playerTurn,
			isActiveBluePawn,
			isActiveYellowPawn,
			isActiveGreenPawn,
			isActiveRedPawn
		),
		id
	);

	const pawnOnId = isPawnOnId(
		id,
		isActiveBluePawn,
		isActiveYellowPawn,
		isActiveGreenPawn,
		isActiveRedPawn
	);

	const showCurrent = showPawn(
		pawn || { id: 0, position: 0 },
		pawnOnId,
		id,
		playerTurn
	);

	const borderTheme =
		color !== undefined ? "2px solid " + color : "2px solid white";

	return (
		<div
			style={{
				border: borderTheme,
				borderRadius: "10px",
				width: "50px",
				height: "50px",
				margin: "5px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					width: "35px",
					height: "35px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontSize: "20px",
					fontWeight: "bold",
                    color: "black",
					borderRadius: "50%",
					backgroundColor:
						(showCurrent[Object.keys(showCurrent)[0]].position === id &&
							Object.keys(showCurrent)[0]) ||
						"",
				}}
			>
				{showCurrent[Object.keys(showCurrent)[0]].position === id &&
					showCurrent[Object.keys(showCurrent)[0]].index}
			</div>
		</div>
	);
};

export default Square;
