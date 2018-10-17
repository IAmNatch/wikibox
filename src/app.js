import React from "react";
import "normalize.css";
import "./styles/styles.scss";

//Components
import { Header } from "./components";
import { Home } from "./pages";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<div className="site-wrapper">
					<Header />
					<Route exact path={"/"} component={Home} />
					<Route exact path={"/join"} component={Join} />
					<Route exact path={"/about"} component={About} />
					<Route exact path={"/game/"} component={Game} />
				</div>
			</div>
		);
	}
}
