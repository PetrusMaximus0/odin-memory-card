/* eslint-disable react/prop-types */

export default function Card({ pokemon, callback }) {
	return (
		<li>
			<button
				onClick={() => callback(pokemon.name)}
				className="gameboard-card"
			>
				<img
					className="gameboard-card-image"
					src={pokemon.src}
					alt="An image"
				/>
				<p className="gameboard-card-name">{pokemon.name}</p>
			</button>
		</li>
	);
}
