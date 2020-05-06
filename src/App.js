import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/detail/:movieId" component={Detail} />
				</Switch>
			</div>
		);
	}
}

export default App;
