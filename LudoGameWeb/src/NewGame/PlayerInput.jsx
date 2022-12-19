import React from "react";

const PlayerInput = ({ theme, player, onClick }) => {
	const border = "1px solid " + theme;
	return (
		<div
			style={{ border: border, height: "100px", width: "100px" }}
			onClick={() => onClick(theme)}
		>
			{player}
		</div>
	);
};

export default PlayerInput;
