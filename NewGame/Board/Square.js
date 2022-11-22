const React = require("react");
const { Box, Text } = require("ink");
const {
	chooseActive,
	pawnPlacement,
	isPawnOnId,
	showPawn,
} = require("../../GameLogic/pawnMovement");

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
	return (
		<Box
			borderStyle="round"
			borderColor={color}
			width={5}
			height={3}
			marginLeft={mLeft && 1}
			marginRight={mRight && 1}
			flexDirection="column"
			alignItems="center"
		>
			<Text
				color="white"
				backgroundColor={
					(showCurrent[Object.keys(showCurrent)[0]].position === id &&
						Object.keys(showCurrent)[0]) ||
					""
				}
			>
				{showCurrent[Object.keys(showCurrent)[0]].position === id &&
					showCurrent[Object.keys(showCurrent)[0]].index}
			</Text>
		</Box>
	);
};
module.exports = Square;
