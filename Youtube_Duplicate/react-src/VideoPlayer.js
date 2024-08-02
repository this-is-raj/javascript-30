import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css';

function VideoPlayer() {
  const { id } = useParams();

  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={id}
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
