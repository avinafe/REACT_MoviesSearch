import React from "react";
import PropTypes from "prop-types";
import { Movie } from "./Movie";

export const MoviesList = ({ movies }) => {
	MoviesList.propTypes = {
		movies: PropTypes.array
	};
	console.log(movies);
	return (
		<div className="MoviesList">
			{movies.map(movie => {
				return (
					<div key={movie.imdbID} className="MoviesList-item">
						<Movie
							id={movie.imdbID}
							poster={movie.Poster}
							title={movie.Title}
							year={movie.Year}
						/>
					</div>
				);
			})}
		</div>
	);
};
