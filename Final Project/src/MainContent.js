import React from 'react';
import HomePage from './HomePage';
import GenresPage from './GenresPage';
import ArtistsPage from './ArtistsPage';

function MainContent() {
  return (
    <main>
      <HomePage />
      <GenresPage />
      <ArtistsPage />
    </main>
  );
}

export default MainContent;
