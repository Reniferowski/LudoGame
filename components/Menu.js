const React = require("react");
const { useFocusManager, useInput, Box } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const MenuOption = importJsx("../components/MenuOption");

const Menu = ({ setOption, ...rest }) => {
	const { focus } = useFocusManager();
	const [index, setIndex] = useState(-1);
	let indexes = Object.values(rest);

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
		if (key.return) {
			setOption(indexes[mod(index, indexes.length)]);
		}
	});
	return (
		<Box
			flexDirection="column"
			alignItems="center"
			alignSelf="center"
			borderStyle="round"
			borderColor="red"
			paddingY={1}
			paddingLeft={3}
			width="20%"
		>
			<MenuOption id={indexes[0]}>Nowa Gra</MenuOption>
			<MenuOption id={indexes[1]}>Ranking</MenuOption>
			<MenuOption id={indexes[2]}>Wyjście</MenuOption>
		</Box>
	);
};

module.exports = Menu;
