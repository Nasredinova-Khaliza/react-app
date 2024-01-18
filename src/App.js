import "./App.css";

import Moviees from "./components/moviees/Moviees";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>ДОБРО ПОЖАЛОВАТЬ В МИР КИНО!</h1>
				<h2>НАСЛАЖДАЙТЕСЬ ПРОСМОТРОМ!</h2>
				<Moviees />
			</header>
		</div>
	);
}

export default App;
