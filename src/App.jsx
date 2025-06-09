import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* Example logo to match App-logo style */}
        <img src="/logo192.png" className="App-logo" alt="logo" />
        <h1>My Running Log</h1>
        <p>Tracking daily performance and progress</p>
        <a
          className="App-link"
          href="https://jackmulcunry.github.io/running-blog-clean/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Blog Homepage
        </a>
      </header>
      <div id="blog-posts" style={{ marginTop: '2rem' }}>
        {/* n8n will inject posts here */}
      </div>
    </div>
  );
};

export default App;
