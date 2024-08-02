import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <img src="https://www.youtube.com/img/desktop/yt_1200.png" alt="YouTube Logo" />
          </div>
          <input type="text" className="search-bar" placeholder="Search" />
          <button className="search-button">Search</button>
        </header>
        <div className="content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<VideoPlayer />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><span className="icon">🏠</span> Home</li>
        <li><span className="icon">🔥</span> Shorts</li>
        <li><span className="icon">📺</span> Subscriptions</li>
        <hr />
        <li><span className="icon">📺</span> Your channel</li>
        <li><span className="icon">🕒</span> History</li>
        <li><span className="icon">📋</span> Playlists</li>
        <li><span className="icon">📹</span> Your videos</li>
        <li><span className="icon">🎬</span> Your movies</li>
        <li><span className="icon">🕒</span> Watch later</li>
        <li><span className="icon">👍</span> Liked videos</li>
        <li><span className="icon">✂️</span> Your clips</li>
        <hr />
        <li><span className="icon">👥</span> Subscriptions</li>
      </ul>
    </nav>
  );
}

export default App;
