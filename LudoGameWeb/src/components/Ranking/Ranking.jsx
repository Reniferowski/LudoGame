import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "./style.css";

const Ranking = ({ setOption }) => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("/users.json")
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
			});
	}, []);

	return (
		<>
			<Title />
			<div style={{ display: "flex", placeContent: "center" }}>
				<table>
					<tr className="aa">
						<th>Pozycja</th>
						<th>Nazwa Gracza</th>
						<th>Wygrane gry</th>
					</tr>
					{users
						.sort((a, b) => b.score - a.score)
						.map((user, id) => (
							<tr key={user.id}>
								<td>{id + 1}</td>
								<td>{user.username}</td>
								<td>{user.score / 3}</td>
							</tr>
						))}
				</table>
			</div>
			<button style={{ marginTop: "20px" }} onClick={() => setOption("")}>
				Powrót
			</button>
		</>
	);
};

export default Ranking;
