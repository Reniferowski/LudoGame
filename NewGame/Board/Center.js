const React = require("react");
const { Box, Text } = require("ink");

const Center = () => {
	return (
		<Box width={17} height={9} flexDirection="column">
			<Text color="yellow"> {"\u2500".repeat(15)}</Text>
			<Box flexDirection="row" justifyContent="space-between">
				<Box flexDirection="column">
					{new Array(8).fill("").map((_, i) => (
						<Text key={i} color="blue">
							{"\u2502"}
						</Text>
					))}
				</Box>
				<Box flexDirection="column">
					{new Array(8).fill("").map((_, i) => (
						<Text key={i} color="green">
							{"\u2502"}
						</Text>
					))}
				</Box>
			</Box>
			<Text color="red"> {"\u2500".repeat(15)}</Text>
		</Box>
	);
};
module.exports = Center;
