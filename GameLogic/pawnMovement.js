const updateActivePawns = (playerTurn, updatedPawns) => {
	if (playerTurn === "blue")
		return { blue: updatedPawns, starting: 34, ending: 32, homePosition: 104 };
	if (playerTurn === "yellow")
		return { yellow: updatedPawns, starting: 1, ending: 43, homePosition: 204 };
	if (playerTurn === "green")
		return { green: updatedPawns, starting: 12, ending: 10, homePosition: 304 };
	if (playerTurn === "red")
		return { red: updatedPawns, starting: 23, ending: 21, homePosition: 404 };
};
const setColorPath = (playerTurn) => {
	if (playerTurn === "blue") return 99;
	if (playerTurn === "yellow") return 199;
	if (playerTurn === "green") return 299;
	if (playerTurn === "red") return 399;
};

const move = (
	playerTurn,
	activePawns,
	setActivePawns,
	diceRoll,
	pawnNumber,
	endingPosition,
	homePosition,
	setWinner
) => {
	let winnerCount = 0;
	let i = 1;
	const interval = setInterval(() => {
		if (i > diceRoll) return clearInterval(interval);
		const pawn = activePawns[playerTurn].find(
			(p) => p.index === pawnNumber && p.active
		);
		if (!pawn.inHome) {
			if (pawn.index === pawnNumber && pawn.active) {
				if (pawn.position === endingPosition && !pawn.toHome) {
					pawn.toHome = true;
					pawn.position = setColorPath(playerTurn);
				}
				pawn.position++;
				if (pawn.position >= homePosition) {
					winnerCount++;
					pawn.inHome = true;
				}
				if (pawn.position >= 45 && !pawn.toHome) pawn.position = 1;
			}
		} else winnerCount++;
		if (winnerCount >= 4) setWinner(true);
		const updatedActivePawns = updateActivePawns(
			playerTurn,
			activePawns[playerTurn]
		);
		setActivePawns(updatedActivePawns);
		i++;
	}, 250);
};

const activatePawn = (
	playerTurn,
	activePawns,
	setActivePawns,
	startingPosition
) => {
	let activated = false;
	const updatePawns = activePawns[playerTurn].map((pawn) => {
		if (pawn.active === false && !activated) {
			pawn.active = true;
			pawn.position = startingPosition;
			activated = true;
		}
		return pawn;
	});
	const updatedActivePawns = updateActivePawns(playerTurn, updatePawns);
	setActivePawns(updatedActivePawns);
};

const pawnOperation = (
	operation,
	playerTurn,
	diceRoll,
	pawnNumber,
	setActiveBlue,
	setActiveYellow,
	setActiveGreen,
	setActiveRed,
	setWinner,
	...allPawns
) => {
	let index;
	if (playerTurn === "blue") index = 0;
	if (playerTurn === "yellow") index = 1;
	if (playerTurn === "green") index = 2;
	if (playerTurn === "red") index = 3;
	if (operation === "move")
		move(
			playerTurn,
			allPawns[index],
			index === 0
				? setActiveBlue
				: index === 1
				? setActiveYellow
				: index === 2
				? setActiveGreen
				: index === 3 && setActiveRed,
			diceRoll,
			pawnNumber,
			allPawns[index].ending,
			allPawns[index].homePosition,
			setWinner
		);
	if (operation === "activate")
		activatePawn(
			playerTurn,
			allPawns[index],
			index === 0
				? setActiveBlue
				: index === 1
				? setActiveYellow
				: index === 2
				? setActiveGreen
				: index === 3 && setActiveRed,
			allPawns[index].starting
		);
};

const chooseActive = (playerTurn, ...allPawns) => {
	if (playerTurn === "blue") return allPawns[0][playerTurn];
	if (playerTurn === "yellow") return allPawns[1][playerTurn];
	if (playerTurn === "green") return allPawns[2][playerTurn];
	if (playerTurn === "red") return allPawns[3][playerTurn];
};

const pawnPlacement = (activePawn, id) => {
	const placePawn = activePawn.filter((pawn) => pawn.position === id);
	return placePawn[0];
};

const isPawnOnId = (id, ...allPawns) => {
	const colors = ["blue", "yellow", "green", "red"];
	let foundPawn = undefined;
	allPawns.map((colorPawns, ind) => {
		colorPawns[colors[ind]].map((pawn) => {
			if (pawn.position === id) {
				foundPawn = { [colors[ind]]: pawn };
			}
		});
	});
	return foundPawn;
};

const showPawn = (pawn, pawnOnId, id, playerTurn) => {
	if (pawnOnId === undefined) {
		if (pawn.position !== id) return { [playerTurn]: pawn };
		return { [playerTurn]: pawn };
	}
	if (pawn.position === id) {
		return { [playerTurn]: pawn };
	}
	return pawnOnId;
};

const roll = () => Math.floor(Math.random() * 6 + 1);

//export { activatePawn };
//exports.activatePawn = activatePawn;

// exports.showPawn = showPawn;
// exports.isPawnOnId = isPawnOnId;
// exports.pawnPlacement = pawnPlacement;
// exports.chooseActive = chooseActive;
// exports.pawnOperation = pawnOperation;
//exports.roll = roll;
module.exports = {
	activatePawn: activatePawn,
	showPawn: showPawn,
	isPawnOnId: isPawnOnId,
	pawnPlacement: pawnPlacement,
	chooseActive: chooseActive,
	pawnOperation: pawnOperation,
	roll: roll,
};
