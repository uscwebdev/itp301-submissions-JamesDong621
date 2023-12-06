import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');

  const genres = [
    'Rock',
    'Pop',
    'Hip-Hop',
    'Jazz',
    'Classical',
    'Electronic',
    'Country',
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchError('');

    if (searchTerm.trim() === '') {
      setSearchError('Please enter a search term.');
      return;
    }

    const filteredGenres = genres.filter((genre) =>
      genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredGenres.length === 0) {
      setSearchError('No matching genres found.');
      return;
    }

    // Check if onSearchResults is a function and call it, otherwise log to console
    if (typeof onSearchResults === 'function') {
      onSearchResults(filteredGenres);
    } else {
      console.log('Search results:', filteredGenres);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Music Explorer</div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#genres" className="nav-link">
          Genres
        </a>
        <a href="#artists" className="nav-link">
          Artists
        </a>
      </div>
      <div className="navbar-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search genres..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
          {searchError && <div className="search-error">{searchError}</div>}
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
