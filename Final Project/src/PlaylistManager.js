// PlaylistManager.js
import React, { useState } from 'react';

const PlaylistManager = () => {
  const [songs, setSongs] = useState([
    'Yesterday - The Beatles',
    'Halo - Beyoncé',
  ]);
  const [newSong, setNewSong] = useState('');

  const addSong = () => {
    if (newSong) {
      setSongs([...songs, newSong]);
      setNewSong('');
    }
  };

  const deleteSong = (index) => {
    const updatedSongs = songs.filter((_, i) => i !== index);
    setSongs(updatedSongs);
  };

  return (
    <div>
      <input
        type="text"
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
        placeholder="Add new song"
      />
      <button onClick={addSong}>Add Song</button>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {song}
            <button onClick={() => deleteSong(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistManager;
