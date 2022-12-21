import React, { useEffect } from "react";

const Winner = ({ player }) => {
	fetch("users.json", {
		method: "PUT",
		body: JSON.stringify({
			id: player?.id,
			username: player?.username,
			score: player?.score + 1,
		}),
	})
		.then((res) => res.json())
		.then((json) => console.log(json));

	return (
		<>
			<h1>Winner</h1>
			<h3>{player?.username}</h3>
			<button onClick={() => location.reload()}>Zagraj jeszcze raz</button>
		</>
	);
};

export default Winner;
