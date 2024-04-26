import './App.scss';
// Components
import Header from './components/header';
import Card from './components/card';
// React functionality
import { useState } from 'react';
// Images
import bogus from './assets/pervert-cat.jpg';
function App() {
	const btnCallback = () => {
		setScore(score + 1);
	};
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<Header score={score} highScore={highScore} />
			<main>
				<ul className="gameboard">
					<Card imageSrc={bogus} name="Bogus" callback={btnCallback} />
				</ul>
			</main>
		</>
	);
}

export default App;
