/* eslint-disable react/prop-types */

export default function Card({ imageSrc, name, callback }) {
	return (
		<li>
			<button onClick={callback} className="gameboard-card">
				<img
					className="gameboard-card-image"
					src={imageSrc}
					alt="An image"
				/>
				<p className="gameboard-card-name">{name}</p>
			</button>
		</li>
	);
}
