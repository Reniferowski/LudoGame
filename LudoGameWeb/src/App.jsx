import { useState } from "react";
import Ranking from "./components/Ranking/Ranking";
import HomeScreen from "./HomeScreen/HomeScreen";
import NewGame from "./NewGame/NewGame";
import "./App.css";

function App() {
	const [homeScreenOption, setHomeScreenOption] = useState("");
	const view =
		homeScreenOption === "newgame" ? (
			<NewGame />
		) : homeScreenOption === "ranking" ? (
			<Ranking setOption={setHomeScreenOption} />
		) : homeScreenOption === "exit" ? window.close() : (
			<HomeScreen setOption={setHomeScreenOption} />
		);
	return <div>{view}</div>;
}

export default App;
