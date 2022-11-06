const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Title = ({ name, font, text }) => {
	return (
		<Gradient key="" {...{ name }}>
			<BigText {...{ text }} align="center" {...{ font }} />
		</Gradient>
	);
};

module.exports = Title;
