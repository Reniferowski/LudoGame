const React = require("react");
const { Box } = require("ink");

const Square = ({ color, mLeft, mRight }) => {
	return (
		<Box
			borderStyle="round"
			borderColor={color}
			width={5}
			height={3}
			marginLeft={mLeft && 1}
			marginRight={mRight && 1}
		></Box>
	);
};
module.exports = Square;
