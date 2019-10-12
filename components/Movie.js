import React from "react";
import '../styles/Movie.css';

const defaultPoster =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {

    const poster =
      movie.Poster === "N/A" ? defaultPoster : movie.Poster;
      
  return (
    <div className="movieParent">

      <div className="moviePoster">
        <img src={poster} alt={`The movie title: ${movie.Title}`} width="200" height="250"/>
      </div>

      <h2> {movie.Title} </h2>
      <p> ({movie.Year}) </p>
    </div>
  );
};
export default Movie;
