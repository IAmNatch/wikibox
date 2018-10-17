import React from "react";
import { Link } from "react-router-dom";

export const Home = props => {
	return (
		<section class="home">
			<div class="content">
				<h1>
					The WIKIhow flavoured illistration game inspired by
					/r/disneyVacation.
				</h1>
				<div class="button-group">
					<Link to="/game/start">
						<div>Create Game</div>
					</Link>
					<Link to="/join">
						<div>Join Room </div>
					</Link>

					<Link to="/about">
						<div>Learn More </div>
					</Link>
				</div>
			</div>
		</section>
	);
};
