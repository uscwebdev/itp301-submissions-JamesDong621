import React from 'react';

const genresData = [
  {
    name: 'Rock',
    description: 'Experience the raw energy of rock and its various subgenres.',
    image:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/allstarsdallas050-edit-1677013329.jpg',
  },
  {
    name: 'Pop',
    description:
      'Dive into the world of pop with its catchy hooks and chart-topping hits.',
    image:
      'https://media.vanityfair.com/photos/5c095661b438eb3fedd5ab9e/4:3/w_1776,h_1332,c_limit/t-YIM-2018.png',
  },
  {
    name: 'Hip-Hop',
    description: 'Explore the beats and rhymes that define hip-hop culture.',
    image: 'https://media.timeout.com/images/101659805/image.jpg',
  },
];

const GenreCard = ({ genre }) => (
  <div
    style={{
      margin: '1rem',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
    }}
  >
    <img
      src={genre.image}
      alt={genre.name}
      style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
    />
    <h3>{genre.name}</h3>
    <p>{genre.description}</p>
    <button
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#FF5F00',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Explore {genre.name}
    </button>
  </div>
);

const GenresPage = () => {
  return (
    <section id="genres" style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Music Genres</h1>
        <p>
          From the classics to the cutting-edge, discover the stories behind the
          music.
        </p>
      </header>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {genresData.map((genre) => (
          <GenreCard key={genre.name} genre={genre} />
        ))}
      </div>
    </section>
  );
};

export default GenresPage;
