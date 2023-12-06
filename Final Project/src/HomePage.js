import React from 'react';

const HomePage = () => {
  return (
    <section id="home" style={{ padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Welcome to Music Explorer
        </h1>
        <p>
          Delve into the vast universe of music. Discover genres, artists, and
          cultural phenomena that shape the global soundscape.
        </p>
      </header>
      <article style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', textDecoration: 'underline' }}>
          Main Highlights
        </h2>
        <div>
          <p>
            Explore this week's top charts, from rock to hip-hop, see who's
            making waves in the world of music.
          </p>
          {/* Placeholder for a main highlight image */}
          <img
            src="https://www.hollywoodreporter.com/wp-content/uploads/2023/11/Taylor-Swift-Mariah-Carey-and-Morgan-Wallen-Getty-h-2023.jpg?w=450&h=253&crop=1"
            alt="Main Highlight"
            style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
          />
          <button
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#FF5F00',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Read More
          </button>
        </div>
      </article>
      <section>
        <h2 style={{ fontSize: '2rem', textDecoration: 'underline' }}>
          Latest News
        </h2>
        <ul style={{ listStyleType: 'none' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>The Evolution of Pop: A Decade in Review</strong> - A look
            back at the pop giants who defined a new era of charts and culture.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Indie Scenes Flourishing Worldwide</strong> - From local
            bars to streaming stars, indie musicians are carving out their own
            niches.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Vinyl Records Make a Comeback</strong> - In an age of
            digital streams, vinyl offers a tangible slice of music history.
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HomePage;
