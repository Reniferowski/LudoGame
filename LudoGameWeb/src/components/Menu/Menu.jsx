import React, { useState } from "react";
const elementToPL = require("../../../../Misc/elementToPL");
import "../../App.css";

const Menu = ({ theme, setOption, players, ...rest }) => {
	let indexes = Object.values(rest);
	const isobject = typeof indexes[0] === "object";

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
					onClick={() =>
						isobject
							? setOption(getIndexes()[id], theme)
							: setOption(getIndexes()[id])
					}
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
