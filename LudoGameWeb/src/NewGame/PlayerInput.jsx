import React, { useState } from "react";

const PlayerInput = ({ theme, player, onClick }) => {
	const [hover, setHover] = useState(false);

	const shadow = hover
		? "3px -3px 6px " + theme + ", -3px 3px 6px " + theme
		: "";

	const polishTheme =
		theme === "green"
			? "ZIELONY"
			: theme === "blue"
			? "NIEBIESKI"
			: theme === "red"
			? "CZERWONY"
			: "ŻÓŁTY";

	const border = "3px solid " + theme;
	return (
		<div
			className="playerInput"
			style={{
				border: border,
				borderRadius: "25px",
				height: "150px",
				width: "225px",
				margin: "0 75px 75px 75px",
				cursor: "pointer",
				boxShadow: shadow,
				transition: "0.5s",
				color: theme,
				display: "flex",
				flexDirection: "column",
				placeContent: "center",
				fontWeight: "bold"
			}}
			onClick={() => onClick(theme)}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<p>GRACZ {polishTheme}</p>
			<p>{player}</p>
		</div>
	);
};

export default PlayerInput;
