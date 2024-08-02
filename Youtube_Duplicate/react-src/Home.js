import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const videos = [
  { id: 'dQw4w9WgXcQ', title: 'Rick Astley - Never Gonna Give You Up' },
  { id: '7wtfhZwyrcc', title: 'Imagine Dragons - Believer' },
  { id: '2Vv-BfVoq4g', title: 'Ed Sheeran - Perfect' },
];

function Home() {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video">
          <Link to={`/video/${video.id}`}>
            <img src={`https://img.youtube.com/vi/${video.id}/0.jpg`} alt={video.title} />
            <h4>{video.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
