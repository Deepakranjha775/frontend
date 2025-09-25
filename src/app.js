import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch('http://localhost:8080/hello')
      .then((res) => res.text())
      .then((text) => setMessage(text))
      .catch(() => setMessage("Failed to fetch from backend"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Frontend</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
