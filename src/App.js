import React, { Component } from "react";
import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
// import { MoviesList } from "./Components/MoviesList";
// import { SearchForm } from "./Components/SearchForm";
// import { Title } from "./Components/Title";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
	// state = { usedSearch: false, results: [] };

	// _handleResults = results => {
	// 	this.setState({ results, usedSearch: true });
	// };

	// _renderResults = () => {
	// 	return this.state.results.length === 0 ? (
	// 		<p>Sorry! Results not found!</p>
	// 	) : (
	// 		<MoviesList movies={this.state.results} />
	// 	);
	// };

	render() {
		const url = new URL(document.location);
		const hasId = url.searchParams.has("id");

		if (hasId) {
			return <Detail id={url.searchParams.get("id")} />;
		}

		return (
			<div className="App">
				<Home />
				{/* <Title>Search Movies</Title>
				<div className="SearchForm-wrapper">
					<SearchForm onResults={this._handleResults} />
				</div>
				{this.state.usedSearch ? (
					this._renderResults()
				) : (
					<small>Use the form to search a movie</small>
				)} */}
			</div>
		);
	}
}

export default App;
