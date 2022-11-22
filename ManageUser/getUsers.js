const fs = require("fs");

const getUsers = () => {
	const readUsers = fs.readFileSync("users.json");
	return JSON.parse(readUsers);
};

exports.getUsers = getUsers;
