import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer.js'

function App() {
  const videoJsOptions = {
  autoplay: true,
  controls: true,
  loop: true,
  playbackRates: [0.5, 1, 1.5, 2],
  sources: [{
    src: "http://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
    type: 'video/mp4'
  }]
}

  return (
    <div className="App">
      <header className="App-header">
      <VideoPlayer { ...videoJsOptions } />
      </header>
    </div>
  );
}

export default App;
