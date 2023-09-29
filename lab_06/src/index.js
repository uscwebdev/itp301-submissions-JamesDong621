import React from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserComment from './UserComment';

const comments = [
  {
    username: 'JayZ_Fan01',
    date: '2023-09-24',
    content: 'Loving the old school vibes!',
    profilePic: 'https://cdn.britannica.com/63/136163-050-3516BBE2/Jay-Z.jpg',
  },
  {
    username: 'EminemStanny',
    date: '2023-09-23',
    content: 'Hip-hop is life!',
    profilePic:
      'https://media.npr.org/assets/music/news/2010/06/eminem-52893634f7c035450a7b5ff2e040cacb4012395e-s1100-c50.jpg',
  },
  {
    username: 'QueenB',
    date: '2023-09-22',
    content: 'Hip-hop has revolutionized music.',
    profilePic:
      'https://m.media-amazon.com/images/M/MV5BMzk3NWI5ZWUtYmJkZi00ZWZkLWI1M2ItNGRmNDFlMWRjY2U2XkEyXkFqcGdeQXVyNjc1OTk4NjA@._V1_.jpg',
  },
  {
    username: 'DreDay',
    date: '2023-09-20',
    content: "Can't wait for the new releases this year!",
    profilePic:
      'https://i.scdn.co/image/ab67616d0000b2737e30473fd42ee418b8f1b41f',
  },
];

function HipHopPage() {
  return (
    <div className="hiphop-container">
      <h1>Hip-Hop Music</h1>
      <p>
        Hip-hop began as a powerful cultural movement in the Bronx, New York
        City, in the 1970s. Born out of the African American and Latino
        communities, it emerged as an artistic response to social adversity,
        discrimination, and the challenges of inner-city life. This unique genre
        encapsulated not just rhythm and rhyme, but it carried the stories,
        dreams, and aspirations of a marginalized population, looking for a
        voice amidst the tumult of urban life.
      </p>

      <p>
        As years progressed, hip-hop grew beyond the confines of New York.
        Events that started as local block parties, where DJs showcased their
        mixing talents and MCs freestyled, evolved into global phenomena.
        Legendary artists like Tupac Shakur, The Notorious B.I.G., and Nas
        propelled hip-hop into the mainstream. Their profound lyrics and
        distinct musical styles not only captivated audiences but also
        highlighted critical socio-political issues of their times. They painted
        vivid pictures of their realities, bridging the gap between personal
        narratives and broader societal challenges.
      </p>

      <p>
        Today, hip-hop stands tall as not just a genre, but a global cultural
        titan. It influences fashion, language, and even political movements.
        The digital age has amplified its reach, with hip-hop artists from every
        corner of the world sharing their unique stories and spins on this
        dynamic art form. From the streets of Compton to the lanes of Mumbai or
        Seoul, hip-hop continues to resonate, redefine, and revolutionize the
        global music landscape, making it abundantly clear that its rhythm and
        spirit are truly universal.
      </p>

      <img
        src="https://blog.sonicbids.com/hubfs/shutterstock_315164849.jpg"
        alt="Hip-hop artist performing"
      />
      <img
        src="https://www.creativefabrica.com/wp-content/uploads/2022/10/10/Hip-Hop-Evil-Red-And-Purple-Black-Shapes-Thick-Lines-41078901-1.png"
        alt="Hip-Hop graffiti paint"
      />
      <a
        href="https://www.youtube.com/watch?v=RHCA5b9TkVg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more about Hip-Hop
      </a>

      <h2>User Comments</h2>
      <div className="comments-section">
        {comments.map((comment) => (
          <UserComment
            key={comment.username}
            profilePic={comment.profilePic}
            username={comment.username}
            date={comment.date}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<HipHopPage />, document.getElementById('root'));
