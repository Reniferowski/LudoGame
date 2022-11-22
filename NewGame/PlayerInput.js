const React = require("react");
const { Box, Text, useFocus } = require("ink");
const { simulateBGColor, writePlayer, fillPlayer } = require("../Misc/theme");

const PlayerInput = ({ theme, player }) => {
	const { isFocused } = useFocus();
	return (
		<Box
			marginY={1}
			marginX={3}
			borderStyle="round"
			borderColor={isFocused && theme}
			width={30}
			height={10}
		>
			<Text backgroundColor={theme} color="black">
				{simulateBGColor.repeat(3)}
				{writePlayer(theme)}
				{fillPlayer(player) || simulateBGColor}
				{simulateBGColor.repeat(3)}
			</Text>
		</Box>
	);
};

module.exports = PlayerInput;
