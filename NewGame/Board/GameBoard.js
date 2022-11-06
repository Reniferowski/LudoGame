const React = require("react");
const { Box } = require("ink");
const importJsx = require("import-jsx");
const Square = importJsx("./Square");
const Home = importJsx("./Home");
const Center = importJsx("./Center");

const GameBoard = () => {
	return (
		<Box
			alignSelf="center"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
		>
			{/* First Row */}
			<Box flexDirection="row">
				<Home color="blue" />
				<Box flexDirection="row">
					<Box flexDirection="column">
						<Square />
						<Square />
						<Square />
						<Square />
						<Square />
					</Box>
					<Box flexDirection="column">
						<Square />
						<Square color="yellow" />
						<Square color="yellow" />
						<Square color="yellow" />
						<Square color="yellow" />
					</Box>
					<Box flexDirection="column">
						<Square />
						<Square color="yellow" />
						<Square />
						<Square />
						<Square />
					</Box>
				</Box>
				<Home color="yellow" />
			</Box>
			{/* Second Row */}
			<Box flexDirection="row">
				<Box flexDirection="Column">
					<Box flexDirection="row">
						<Square mRight />
						<Square mRight color="blue" />
						<Square mRight />
						<Square mRight />
						<Square />
					</Box>
					<Box flexDirection="row">
						<Square mRight />
						<Square mRight color="blue" />
						<Square mRight color="blue" />
						<Square mRight color="blue" />
						<Square color="blue" />
					</Box>
					<Box flexDirection="row">
						<Square mRight />
						<Square mRight />
						<Square mRight />
						<Square mRight />
						<Square />
					</Box>
				</Box>
				<Center />
				<Box flexDirection="column">
					<Box flexDirection="row">
						<Square />
						<Square mLeft />
						<Square mLeft />
						<Square mLeft />
						<Square mLeft />
					</Box>
					<Box flexDirection="row">
						<Square color="green" />
						<Square mLeft color="green" />
						<Square mLeft color="green" />
						<Square mLeft color="green" />
						<Square mLeft />
					</Box>
					<Box flexDirection="row">
						<Square />
						<Square mLeft />
						<Square mLeft />
						<Square mLeft color="green" />
						<Square mLeft />
					</Box>
				</Box>
			</Box>
			{/* Third Row */}
			<Box flexDirection="row">
				<Home color="red" />
				<Box flexDirection="row">
					<Box flexDirection="column">
						<Square />
						<Square />
						<Square />
						<Square color="red" />
						<Square />
					</Box>
					<Box flexDirection="column">
						<Square color="red" />
						<Square color="red" />
						<Square color="red" />
						<Square color="red" />
						<Square />
					</Box>
					<Box flexDirection="column">
						<Square />
						<Square />
						<Square />
						<Square />
						<Square />
					</Box>
				</Box>
				<Home color="green" />
			</Box>
		</Box>
	);
};

module.exports = GameBoard;
