const { getUsers } = require("./getUsers");
const fs = require("fs");

const addScore = (player) => {
	const users = getUsers();
	const updatedUsers = users.map((user) => {
		if (user.username === player.username) user.score += 1;
		return user;
	});
	fs.writeFileSync("users.json", JSON.stringify(updatedUsers));
};

module.addScore = addScore;
