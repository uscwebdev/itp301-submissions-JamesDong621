import React from 'react';

const artistsData = [
  {
    name: 'The Beatles',
    description:
      'The iconic British rock band that revolutionized music in the 1960s.',
    image: 'https://i.iheart.com/v3/catalog/artist/591?ops=fit(720%2C720)',
    link: '/the-beatles',
  },
  {
    name: 'Beyoncé',
    description:
      'A global pop and R&B sensation, Beyoncé is known for her powerful vocals and dynamic performances.',
    image: 'https://i.scdn.co/image/ab6761610000e5eb12e3f20d05a8d6cfde988715',
    link: '/beyonce',
  },
];

const ArtistCard = ({ artist }) => (
  <div
    style={{
      margin: '1rem',
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      textAlign: 'center',
    }}
  >
    <img
      src={artist.image}
      alt={artist.name}
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
      }}
    />
    <h3>{artist.name}</h3>
    <p>{artist.description}</p>
    <a
      href={artist.link}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#FF5F00',
        color: 'white',
        textDecoration: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Learn More
    </a>
  </div>
);

const ArtistsPage = () => {
  return (
    <section id="artists" style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Featured Artists
        </h1>
        <p>
          Delve into the lives and music of the artists who shape our world.
        </p>
      </header>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {artistsData.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </section>
  );
};

export default ArtistsPage;
