/* eslint-disable react/prop-types */
import '../styles.scss';

export default function Header({ score, highScore }) {
	return (
		<header className="header">
			<h1 className="header-heading">Pokemon Memory Game</h1>
			<p className="header-message">
				Get points by clicking on an image. But make sure you click a
				different image every time or your score counter goes to zero!
			</p>

			<div className="header-score">
				<p>
					Score: <span className="header-score-number">{score}</span>
				</p>
				<p>
					High Score:{' '}
					<span className="header-score-number">{highScore}</span>
				</p>
			</div>
		</header>
	);
}
