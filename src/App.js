import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/detail/:movieId" component={Detail} />
					<Route path="/" exact component={Home} />
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default App;
