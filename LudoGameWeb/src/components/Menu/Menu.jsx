import React, { useState } from "react";
const elementToPL = require("../../../../Misc/elementToPL");

const Menu = ({ setOption, players, ...rest }) => {
	const [index, setIndex] = useState(-1);
	let indexes = Object.values(rest);
	const isobject = typeof indexes[0] === "object";
	console.log(index);

	const getIndexes = () =>
		indexes.filter((element) =>
			players
				? !Object.values(players).some((player) => player.id === element.id)
				: true
		);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{getIndexes().map((element, id) => (
				<button
					key={isobject ? element.id : element}
					id={isobject ? element.id : element}
					onClick={() => setOption(getIndexes()[id - 1])}
				>
					{isobject
						? element.username + ", wygrane: " + element.score
						: elementToPL(element)}
				</button>
			))}
		</div>
	);
};

export default Menu;
