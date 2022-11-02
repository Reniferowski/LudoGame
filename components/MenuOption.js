const React = require("react");
const { Text, useFocus, Box } = require("ink");

const MenuOption = ({ children, id }) => {
	const { isFocused } = useFocus({ id });
	return (
		<Box>
			<Box flexBasis={3}>
				<Text color="yellowBright">{isFocused && "\u27A4  "}</Text>
			</Box>
			<Box marginRight={6}>
				<Text inverse={isFocused} color="yellowBright">
					{children}
				</Text>
			</Box>
		</Box>
	);
};

module.exports = MenuOption;
