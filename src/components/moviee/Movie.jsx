import React from "react";
import "./Movie.css";

const Movie = ({name, img, genre, year}) => {
	return (
		<div className="movieBox">
			<h1>{name}</h1>
			<img src={img} alt={name} />
			<h3>{genre}</h3>
			<h3>{year}</h3>
		</div>
	);
};

export default Movie;
