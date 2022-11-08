const React = require("react");
const { Box, Text } = require("ink");

const Home = ({ color, player, pawns }) => {
	return (
		<Box
			borderStyle="round"
			borderColor={color}
			width={30}
			height={15}
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Text color={color}>{player?.username}</Text>
			<Box
				width={14}
				height={7}
				borderStyle="round"
				borderColor={color}
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
			>
				<Box flexDirection="row">
					{pawns[color].map(
						(pawn) =>
							[1, 2].includes(pawn.index) && (
								<Box key={pawn.index} marginX={2}>
									<Text backgroundColor={pawn.position === 0 && color}> </Text>
								</Box>
							)
					)}
				</Box>
				<Box flexDirection="row">
					{pawns[color].map(
						(pawn) =>
							[3, 4].includes(pawn.index) && (
								<Box key={pawn.index} marginX={2} marginTop={1}>
									<Text backgroundColor={pawn.position === 0 && color}> </Text>
								</Box>
							)
					)}
				</Box>
			</Box>
		</Box>
	);
};

module.exports = Home;
