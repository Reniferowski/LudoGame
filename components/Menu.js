const React = require("react");
const { useFocusManager, useInput, Box } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const MenuOption = importJsx("../components/MenuOption");
const elementToPL = require("./elementToPL");

const Menu = ({ theme, setOption, players, ...rest }) => {
	const { focus } = useFocusManager();
	const [index, setIndex] = useState(-1);
	let indexes = Object.values(rest);
	const mod = (n, m) => ((n % m) + m) % m;
	const isObject = typeof indexes[0] === "object";

	const getIndexes = () =>
		indexes.filter((element) =>
			players
				? !Object.values(players).some((player) => player.id === element.id)
				: true
		);

	useInput((_, key) => {
		if (key.upArrow) {
			focus(
				isObject
					? getIndexes()[mod(index + 1, getIndexes().length)].id
					: getIndexes()[mod(index + 1, getIndexes().length)]
			);
			setIndex(index + 1);
		}
		if (key.downArrow) {
			focus(
				isObject
					? getIndexes()[mod(index - 1, getIndexes().length)].id
					: getIndexes()[mod(index - 1, getIndexes().length)]
			);
			setIndex(index - 1);
		}
		if (key.return) {
			//console.log(indexes[mod(index, indexes.length)])
			isObject
				? setOption(getIndexes()[mod(index, getIndexes().length)], theme)
				: setOption(getIndexes()[mod(index, getIndexes().length)]);
		}
	});
	return (
		<Box
			flexDirection="column"
			alignItems="center"
			alignSelf="center"
			borderStyle="round"
			borderColor={isObject ? theme : "red"}
			paddingY={1}
			paddingLeft={3}
			width={isObject ? "60%" : "15%"}
		>
			{/* <MenuOption id={indexes[0]}>Nowa Gra</MenuOption>
			<MenuOption id={indexes[1]}>Ranking</MenuOption>
			<MenuOption id={indexes[2]}>Wyjście</MenuOption> */}
			{getIndexes().map((element) => (
				<MenuOption
					key={isObject ? element.id : element}
					{...{ isObject, theme }}
					id={isObject ? element.id : element}
				>
					{isObject
						? element.username + ", wygrane: " + element.score
						: elementToPL(element)}
				</MenuOption>
			))}
		</Box>
	);
};

module.exports = Menu;
