// TrackInfoFetcher.js
import React, { useState } from 'react';

const TrackInfoFetcher = () => {
  const [track, setTrack] = useState('');
  const [trackInfo, setTrackInfo] = useState(null);

  const fetchTrackInfo = async () => {
    if (track) {
      const apiKey = 'YOUR_API_KEY'; // Replace with your Last.fm API key
      const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${track}&api_key=${apiKey}&format=json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrackInfo(data.results.trackmatches.track[0]); // Taking the first result
      } catch (error) {
        console.error('Error fetching track info:', error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={track}
        onChange={(e) => setTrack(e.target.value)}
        placeholder="Enter track name"
      />
      <button onClick={fetchTrackInfo}>Fetch Track Info</button>
      {trackInfo && (
        <div>
          <h3>{trackInfo.name}</h3>
          <p>Artist: {trackInfo.artist}</p>
          <p>Listners: {trackInfo.listeners}</p>
        </div>
      )}
    </div>
  );
};

export default TrackInfoFetcher;
