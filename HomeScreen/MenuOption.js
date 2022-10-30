const React = require("react");
const { Text, useFocus } = require("ink");

const MenuOption = ({ children, id }) => {
	const { isFocused } = useFocus({ id });
	return <Text color={isFocused && "green"}>{children}</Text>;
};

module.exports = MenuOption;
