import React from "react";

const Home = ({ color, player, pawns }) => {
	const borderTheme = "2px solid " + color;
	return (
		<div
			style={{
				border: borderTheme,
				borderRadius: "10px",
				display: "flex",
				flexDirection: "column",
				width: "320px",
				placeContent: "center",
			}}
		>
			<div style={{ color: color, fontWeight: "bold", fontSize: "20px" }}>
				{player?.username}
			</div>
			<div
				style={{
					margin: "30px",
					display: "flex",
					placeContent: "center",
				}}
			>
				<div
					style={{
						width: "100px",
						border: borderTheme,
						borderRadius: "10px",
						padding: "5px",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						{pawns[color].map(
							(pawn) =>
								[1, 2].includes(pawn.index) && (
									<div
										style={{
											width: "35px",
											height: "35px",
											backgroundColor: pawn.position === 0 && color,
											borderRadius: "50%",
											margin: "5px",
										}}
										key={pawn.index}
									></div>
								)
						)}
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						{pawns[color].map(
							(pawn) =>
								[3, 4].includes(pawn.index) && (
									<div
										style={{
											width: "35px",
											height: "35px",
											backgroundColor: pawn.position === 0 && color,
											borderRadius: "50%",
											margin: "5px",
										}}
										key={pawn.index}
									></div>
								)
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
