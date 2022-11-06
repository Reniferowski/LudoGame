const React = require("react");
const { Text, useFocus, Box } = require("ink");

const MenuOption = ({ theme, children, id, isObject }) => {
	const { isFocused } = useFocus({ id });
	const color = isObject ? theme : "yellowBright";
	return (
		<Box justifyContent="center" width="100%">
			<Box
				width={isObject ? "20%" : "35%"}
				paddingLeft={isObject ? "15%" : "27%"}
			>
				<Text {...{ color }}>{isFocused && "\u00BB  "}</Text>
			</Box>
			<Box width={isObject ? "70%" : "60%"}>
				<Text inverse={isFocused} color={isFocused ? "white" : color}>
					{children}
				</Text>
			</Box>
		</Box>
	);
};

module.exports = MenuOption;
