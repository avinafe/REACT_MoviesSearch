import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

const API_KEY = "f338b7e3";
export class Detail extends Component {
	state = { movie: {} };

	static propTypes = {
		match: PropTypes.shape({
			isExact: PropTypes.bool,
			params: PropTypes.object,
			path: PropTypes.string,
			url: PropTypes.string
		})
	};

	_fetchMovie = ({ id }) => {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}
        `)
			.then(res => res.json())
			.then(movie => {
				console.log(movie, id);
				this.setState({ movie });
			});
	};

	componentDidMount() {
		console.log("props", this.props);

		const { movieId } = this.props.match.params;
		this._fetchMovie({ id: movieId });
	}

	render() {
		const { Title, Actors, Poster, Metascore, Plot } = this.state.movie;

		return (
			<div>
				<ButtonBackToHome>Go Back</ButtonBackToHome>
				<h1>{Title}</h1>
				<img src={Poster} alt={Title} />
				<h3>{Actors}</h3>
				<span>{Metascore}</span>
				<p>{Plot}</p>
			</div>
		);
	}
}
