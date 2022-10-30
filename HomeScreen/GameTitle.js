const React = require("react");
const Gradient = require("ink-gradient");
const BigText = require("ink-big-text");
const { Static } = require("ink");

const GameTitle = ({ name, font, text }) => {
	return (
		<Static items={["_"]}>
			{() => {
				return (
					<Gradient {...{ name }}>
						<BigText {...{ text }} align="center" {...{ font }} />
					</Gradient>
				);
			}}
		</Static>
	);
};
module.exports = GameTitle;
