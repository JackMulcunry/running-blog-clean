import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">My Running Log</h1>
        <h2 className="App-subtitle">Tracking daily performance and progress</h2>
      </header>
      <div id="blog-posts" style={{ marginTop: '2rem' }}>
        {/* n8n will inject posts here */}
      </div>
    </div>
  );
};

export default App;
