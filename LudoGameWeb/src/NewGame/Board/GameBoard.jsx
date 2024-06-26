import React, { useState } from "react";
import Home from "./Home";
import Square from "./Square";
import Center from "./Center";
import Winner from "./Winner";
const {
	initialBlue,
	initialYellow,
	initialGreen,
	initialRed,
} = require("../../../../GameLogic/pawns");
const { pawnOperation, roll } = require("../../../../GameLogic/pawnMovement");

const GameBoard = ({ players }) => {
	const [playerTurn, setPlayerTurn] = useState("blue");
	const [diceRoll, setDiceRoll] = useState(0);
	const [rolled, setRolled] = useState(false);
	const [activatePawn, setActivatePawn] = useState(false);
	const [pawnNumber, setPawnNumber] = useState(1);
	const [winner, setWinner] = useState(false);
	const [isActiveBluePawn, setIsActiveBluePawn] = useState(initialBlue);
	const [isActiveYellowPawn, setIsActiveYellowPawn] = useState(initialYellow);
	const [isActiveGreenPawn, setIsActiveGreenPawn] = useState(initialGreen);
	const [isActiveRedPawn, setIsActiveRedPawn] = useState(initialRed);

	const endTurn = () => {
		setRolled(false);
		setActivatePawn(false);
		setPawnNumber(1);
		setPlayerTurn(
			Object.keys(players)[
				(Object.keys(players).indexOf(playerTurn) + 1) %
					Object.keys(players).length
			]
		);
		setDiceRoll(0);
	};

	const throwDice = () => {
		!rolled && setDiceRoll(roll());
	};

	const activate = () => {
		if (diceRoll === 6 && !activatePawn) {
			pawnOperation(
				"activate",
				playerTurn,
				null,
				null,
				setIsActiveBluePawn,
				setIsActiveYellowPawn,
				setIsActiveGreenPawn,
				setIsActiveRedPawn,
				null,
				isActiveBluePawn,
				isActiveYellowPawn,
				isActiveGreenPawn,
				isActiveRedPawn
			);
			setDiceRoll(0);
			setActivatePawn(true);
		}
	};

	const movePawn = () => {
		pawnOperation(
			"move",
			playerTurn,
			diceRoll,
			pawnNumber,
			setIsActiveBluePawn,
			setIsActiveYellowPawn,
			setIsActiveGreenPawn,
			setIsActiveRedPawn,
			setWinner,
			isActiveBluePawn,
			isActiveYellowPawn,
			isActiveGreenPawn,
			isActiveRedPawn
		);
		setRolled(true);
		setDiceRoll(0);
	};

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			{!winner && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							paddingRight: "125px",
						}}
					>
						<button onClick={movePawn}>Rusz Pionkiem</button>
						<button onClick={throwDice}>Rzuć Kostką</button>
						<button onClick={activate}>Aktywuj Pionek</button>
						<button onClick={endTurn}>Zakończ Turę</button>
					</div>
				</div>
			)}
			<div
				style={{
					alignSelf: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{!winner ? (
					<>
						{/* First Row */}
						<div style={{ display: "flex", flexDirection: "row" }}>
							<Home
								color="blue"
								player={
									players[
										Object.keys(players)[Object.keys(players).indexOf("blue")]
									]
								}
								pawns={isActiveBluePawn}
							/>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										id={42}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={41}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={40}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={39}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={38}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										id={43}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="yellow"
										id={200}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="yellow"
										id={201}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="yellow"
										id={202}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="yellow"
										id={203}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										id={44}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="yellow"
										id={1}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={2}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={3}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={4}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
							</div>
							<Home
								color="yellow"
								player={
									players[
										Object.keys(players)[Object.keys(players).indexOf("yellow")]
									]
								}
								pawns={isActiveYellowPawn}
							/>
						</div>
						{/* Second Row */}
						<div style={{ display: "flex", flexDirection: "row" }}>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										mRight
										id={33}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										color="blue"
										id={34}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										id={35}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										id={36}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={37}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										mRight
										id={32}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										color="blue"
										id={100}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										color="blue"
										id={101}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										color="blue"
										id={102}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="blue"
										id={103}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										mRight
										id={31}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										id={30}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										id={29}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mRight
										id={28}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={27}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
							</div>
							<Center {...{ diceRoll, playerTurn, players, pawnNumber }} />
							<div style={{ display: "flex", flexDirection: "column" }}>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										id={5}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={6}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={7}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={8}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={9}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										color="green"
										id={303}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										color="green"
										id={302}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										color="green"
										id={301}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										color="green"
										id={300}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={10}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "row" }}>
									<Square
										id={15}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={14}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={13}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										color="green"
										id={12}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										mLeft
										id={11}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
							</div>
						</div>
						{/* Third Row */}
						<div style={{ display: "flex", flexDirection: "row" }}>
							<Home
								color="red"
								player={
									players[
										Object.keys(players)[Object.keys(players).indexOf("red")]
									]
								}
								pawns={isActiveRedPawn}
							/>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										id={26}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={25}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={24}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="red"
										id={23}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={22}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										color="red"
										id={403}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="red"
										id={402}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="red"
										id={401}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										color="red"
										id={400}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={21}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
								<div style={{ display: "flex", flexDirection: "column" }}>
									<Square
										id={16}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={17}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={18}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={19}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
									<Square
										id={20}
										{...{
											playerTurn,
											isActiveBluePawn,
											isActiveYellowPawn,
											isActiveGreenPawn,
											isActiveRedPawn,
										}}
									/>
								</div>
							</div>
							<Home
								color="green"
								player={
									players[
										Object.keys(players)[Object.keys(players).indexOf("green")]
									]
								}
								pawns={isActiveGreenPawn}
							/>
						</div>
					</>
				) : (
					<Winner player={players[playerTurn]} />
				)}
			</div>
			{!winner && (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							paddingLeft: "125px",
						}}
					>
						<button onClick={() => setPawnNumber(1)}>Rusz Pionkiem nr.1</button>
						<button onClick={() => setPawnNumber(2)}>Rusz Pionkiem nr.2</button>
						<button onClick={() => setPawnNumber(3)}>Rusz Pionkiem nr.3</button>
						<button onClick={() => setPawnNumber(4)}>Rusz Pionkiem nr.4</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default GameBoard;
