const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");

const Title = ({ name, font, text, align = "center" }) => {
	return (
		<Gradient {...{ name }}>
			<BigText {...{ text }} {...{align}} {...{ font }} />
		</Gradient>
	);
};

module.exports = Title;
