const React = require("react");
const { Box } = require("ink");

const Home = ({ color }) => {
	return (
		<Box borderStyle="round" borderColor={color} width={30} height={15}></Box>
	);
};

module.exports = Home;
