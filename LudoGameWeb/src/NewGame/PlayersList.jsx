import React, { useState, useEffect } from "react";
import Menu from "../components/Menu/Menu";

const PlayersList = ({
	showPlayers,
	setShowPlayers,
	pickTheme,
	addPlayer,
	players,
}) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("/users.json")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	const handleClick = (player, color) => {
		addPlayer(player, color);
		setShowPlayers(true);
	};

	return (
		<>
			{!showPlayers && (
				<Menu
					theme={pickTheme}
					setOption={handleClick}
					players={players}
					{...users}
				/>
			)}
		</>
	);
};
export default PlayersList;
