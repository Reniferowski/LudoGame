import React, { useEffect, useState } from "react";
import "./style.css";

const Ranking = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("/users.json")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	return (
		<div>
			<ul>
				{users.map((user, id) => (
					<li key={user.id}>
						Pozycja: {id + 1} Gracz: {user.username} Wygrane: {user.score / 3}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Ranking;
