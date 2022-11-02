const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { Static } = require("ink");

const Title = ({ name, font, text }) => {
	return (
		<Gradient key="" {...{ name }}>
			<BigText {...{ text }} align="center" {...{ font }} />
		</Gradient>
	);
};

module.exports = Title;
