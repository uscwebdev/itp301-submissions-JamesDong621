import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
function App() {
  return (
    <div>
      <h1 id="full-name">James Dong</h1>
      <a href="mailto:dongjame@usc.edu">Email: dongjame@usc.edu</a>
      <div
        style={{ backgroundColor: 'blue', color: 'white' }}
        className="favorite-color"
      >
        Blue
      </div>
      <a href="https://www.netflix.com/">Netflix</a>
      <br />
      <img
        src="https://rockymountevents.com/wp-content/uploads/2019/06/High-school-student-dribbling-past-a-defender.jpg"
        alt="Favorite Activity"
      />
      <ul>
        <li>ITP 301: Front-end Web Development</li>
        <li>MATH 407: Probability Theory</li>
        <li>MATH 447: Mathematics in Machine Learning</li>
        <li>PHED 140: Foundamental Tennis</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
