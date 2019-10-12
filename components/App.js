import React, { useState, useEffect } from "react";
import '../styles/App.css';
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";
import Footer from './Footer';
import '../assets/loading.gif';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <main className="App">
      <Header text="OrlandsHDMovies.com" />
      <Search search={search} />

      <div className="movies">
        {loading && !errorMessage ? (
          <center>
            <img src={require("../assets/loading.gif")} alt="Loading..." />
          </center>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}

        <Footer />
      </div>
    </main>
  );
};

export default App;
