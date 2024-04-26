import './App.scss';
// Components
import Header from './components/header';
import Card from './components/card';
// React functionality
import { useState, useEffect } from 'react';
// Images

//
function App() {
	// Callbacks
	const btnCallback = (name) => {
		if (viewedCards.some((card) => card === name)) {
			// The card clicked on was clicked previously, reset the score and the viewed cards.
			console.log('Found the card!');
			setViewedCards([]);
			setPokemon(shuffleArray(pokemon));
			// Update the highscore if applicable.
			if (score > highScore) {
				setHighScore(score);
			}
			setScore(0);
			//
		} else {
			// This is a new card, add to the list of viewed cards and increase the score by one.
			console.log("Didn't find the card!");
			setViewedCards([...viewedCards, name]);
			setPokemon(shuffleArray(pokemon));
			setScore(score + 1);
		}
	};

	// Utilities
	// Shuffles the array elements with the Fisher-Yates Shuffle
	function shuffleArray(array) {
		let currentIndex = array.length;
		while (currentIndex !== 0) {
			// Pick a random element
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// Swap it with the current element
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
		return array;
	}

	// Pokemon API fetching
	const [pokemon, setPokemon] = useState([]);
	const pokemonImgBaseURL =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/';
	useEffect(() => {
		const pokemons = [];
		// Fetch the pokemon from the API
		fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30', {
			mode: 'cors',
			cache: 'force-cache',
		})
			.then((res) => res.json())
			.then((data) => {
				data.results.forEach((pokemon) => {
					let tempUrl = pokemon.url.split('/');
					let pokemonId = tempUrl[tempUrl.length - 2];
					pokemons.push({
						name: pokemon.name,
						src: pokemonImgBaseURL + pokemonId + '.png',
					});
				});
				setPokemon(shuffleArray(pokemons));
			});
	}, []);

	// States
	const [viewedCards, setViewedCards] = useState([]);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	//
	return (
		<>
			<Header score={score} highScore={highScore} />
			<main>
				<ul className="gameboard">
					{pokemon.map((pokemoni) => {
						return (
							<Card
								key={pokemoni.name}
								pokemon={pokemoni}
								callback={() => btnCallback(pokemoni)}
							/>
						);
					})}
				</ul>
			</main>
		</>
	);
}

export default App;
