import React, { useRef } from "react";
import "./NewMovie.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const NewMovie = ({ movies, setMovies, setFilterMovie, setAllMovies }) => {
	// const [movieName, setMovieName] = useState("");
	// const [movieImage, setMovieImage] = useState("");
	// const [movieYear, setMovieYear] = useState("");
	// const [movieGenre, setMovieGenre] = useState("");

	const movieName = useRef(null);
	const movieImage = useRef(null);
	const movieYear = useRef(null);
	const movieGenre = useRef(null);

	const addMovies = () => {
		if (
			movieName.current.value === "" ||
			movieImage.current.value === "" ||
			movieYear.current.value === "" ||
			movieGenre.current.value === ""
		) {
			alert("Пожалуйста, заполните пустые инпуты.");
		} else {
			const newMovie = {
				name: movieName.current.value,
				img: movieImage.current.value,
				year: movieYear.current.value,
				genre: movieGenre.current.value,
				id: Math.random(),
			};
			setMovies([...movies, newMovie]);
			setFilterMovie([...movies, newMovie]);
			setAllMovies([...movies, newMovie]);
			movieName.current.value = "";
			movieImage.current.value = "";
			movieYear.current.value = "";
			movieGenre.current.value = "";
		}
	};

	const filterMovies = (genre) => {
		const upMovieFilter = movies.filter((item) => item.genre === genre);
		setFilterMovie(upMovieFilter);
	};

	const moviesaAll = (e) => {
		const dateMovie = e;

		if (dateMovie === "Все") {
			setFilterMovie([...movies]);
		} else {
			const updateMovie = movies.filter((item) => item.genre === dateMovie);
			setAllMovies([...updateMovie]);
		}
	};
	return (
		<div>
			<div className="filterButton">
				<Button
					className="button1"
					onClick={() => moviesaAll("Все")}
					text="Все"
				/>
				<Button
					className="button2"
					onClick={() => filterMovies("Комедия")}
					text="Комедия"
				/>
				<Button
					className="button3"
					onClick={() => filterMovies("Дорама")}
					text="Дорама"
				/>
				<Button
					className="button4"
					onClick={() => filterMovies("Ужастик")}
					text="Ужастик"
				/>
				<Button
					className="button5"
					onClick={() => filterMovies("Боевик")}
					text="Боевик"
				/>
			</div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addMovies();
				}}>
				<div className="inputs">
					<Input
						className="movieName"
						text="movie name"
						type="text"
						value={movieName}
					/>
					<Input
						className="movieImage"
						text="movie image"
						type="text"
						value={movieImage}
					/>
					<Input
						className="movieYear"
						text="movie year"
						type="text"
						value={movieYear}
					/>
					<Input
						className="movieGenre"
						text="movie genre"
						type="text"
						value={movieGenre}
					/>
				</div>

				<div className="buttons">
					<Button className="button6" type="submit" text="save" />
				</div>
			</form>
		</div>
	);
};

export default NewMovie;
