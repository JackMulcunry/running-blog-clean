import React from 'react';

const App = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', color: '#fff' }}>
      <h1 style={{ color: '#00FF66' }}>My Running Log</h1>
      <h2 style={{ color: '#aaa' }}>Tracking daily performance and progress</h2>
      <div id="blog-posts" style={{ marginTop: '2rem' }}>
        {/* n8n will inject posts here */}
      </div>
    </main>
  );
};

export default App;
