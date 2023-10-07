import React from 'react';
import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
const { useState } = React;

function App() {
  // State variables for image src, alt, and caption
  const [imgSrc, setImgSrc] = useState(
    'https://cdn.britannica.com/07/93807-050-5CEF7302/Kanye-West-2006.jpg'
  );
  const [imgAlt, setImgAlt] = useState('Kanye West');
  const [caption, setCaption] = useState('Kanye West');

  // Event handler function
  function updateImage(newSrc, newAlt, newCaption) {
    setImgSrc(newSrc);
    setImgAlt(newAlt);
    setCaption(newCaption);
  }

  return (
    <div className="gallery">
      <h1>Hip-hop Hall of Flame</h1>
      <img src={imgSrc} alt={imgAlt} className="image" />
      <p>{caption}</p>
      <div>
        <button
          onClick={() =>
            updateImage(
              'https://cdn.britannica.com/07/93807-050-5CEF7302/Kanye-West-2006.jpg',
              'Kanye West',
              'Kanye West'
            )
          }
        >
          Kanye
        </button>
        <button
          onClick={() =>
            updateImage(
              'https://www.rollingstone.com/wp-content/uploads/2023/10/GettyImages-1448234024.jpg?w=1024',
              'Drake',
              'Drake'
            )
          }
        >
          Drake
        </button>
        <button
          onClick={() =>
            updateImage(
              'https://cdns-images.dzcdn.net/images/artist/48f25bd8beddbc4c07332ab8cab29317/500x500.jpg',
              'J. Cole',
              'J. Cole'
            )
          }
        >
          J. Cole
        </button>
        <button
          onClick={() =>
            updateImage(
              'https://media.npr.org/assets/music/news/2010/06/eminem-52893634f7c035450a7b5ff2e040cacb4012395e-s1100-c50.jpg',
              'Eminem',
              'Eminem'
            )
          }
        >
          Eminem
        </button>
        <button
          onClick={() =>
            updateImage(
              'https://uploads-ssl.webflow.com/614f5045dce21f3eeb71f85b/6192a44626572a0a14b020d9_2pac.jpg',
              '2Pac',
              '2Pac'
            )
          }
        >
          2Pac
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
