import { useState } from "react";
import Ranking from "./components/Ranking/Ranking";
import HomeScreen from "./HomeScreen/HomeScreen";
import "./App.css";

function App() {
	const [homeScreenOption, setHomeScreenOption] = useState("ranking");
	const view =
		homeScreenOption === "newgame" ? (
			// 	<NewGame />
			// ) : homeScreenOption === "ranking" ? (
			<Ranking />
		) : (
			<HomeScreen setOption={setHomeScreenOption} />
			// );
		);
	return <div>{view}</div>;
}

export default App;
