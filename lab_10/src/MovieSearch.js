import React, { useState } from 'react';
import $ from 'jquery'; // Ensure jQuery is installed and imported

export default function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]); // State to store movie results
  const [totalResults, setTotalResults] = useState(0); // State to store total results

  function handleFormSubmission(e) {
    e.preventDefault();
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const query = encodeURIComponent(searchTerm.trim()); // Encode search term for URL
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    $.ajax({
      url: url,
      method: 'GET',
      success: (response) => {
        setMovies(response.results);
        setTotalResults(response.total_results);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        // Handle error scenarios
      },
    });
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 mt-4">Movie Search</h1>
      </div>

      <div className="row">
        <form
          className="col-12"
          id="search-form"
          onSubmit={handleFormSubmission}
        >
          <div className="form-row">
            <div className="col-12 mt-4 col-sm-6 col-md-4 col-lg-3">
              <label htmlFor="search-term" className="sr-only">
                Search:
              </label>
              <input
                type="text"
                id="search-term"
                className="form-control"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
            </div>
            <div className="col-12 mt-4 col-sm-auto">
              <button type="submit" className="btn btn-primary btn-block">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        <div className="col-12 mt-4 mb-4">
          Showing{' '}
          <span id="num-results" className="font-weight-bold">
            {movies.length}
          </span>{' '}
          of{' '}
          <span id="num-total" className="font-weight-bold">
            {totalResults}
          </span>{' '}
          result(s).
        </div>
      </div>

      <div id="movie-container" className="row">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="text-center my-3 col-6 col-sm-4 col-md-3 col-lg-2"
          >
            <img
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <h5>{movie.title}</h5>
            <div>{movie.release_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
