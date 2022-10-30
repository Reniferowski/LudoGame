const { useFocusManager, useInput, Box, Text } = require("ink");
const { useState } = require("react");
const React = require("react");
const importJsx = require("import-jsx");
const MenuOption = importJsx("./MenuOption");

const Menu = () => {
	const { focus } = useFocusManager();
	const [index, setIndex] = useState(0);
	let indexes = ["1", "2", "3"];

	const mod = (n, m) => ((n % m) + m) % m;

	useInput((_, key) => {
		if (key.upArrow) {
			focus(indexes[mod(index + 1, indexes.length)]);
			setIndex(index + 1);
		}
		if (key.downArrow) {
			focus(indexes[mod(index - 1, indexes.length)]);
			setIndex(index - 1);
		}
	});
	return (
		<Box flexDirection="column" alignItems="center">
			<Text>{index}</Text>
			<MenuOption id="1">Wybór Menu 1</MenuOption>
			<MenuOption id="2">Wybór Menu 2</MenuOption>
			<MenuOption id="3">Wybór Menu 3</MenuOption>
		</Box>
	);
};

module.exports = Menu;
