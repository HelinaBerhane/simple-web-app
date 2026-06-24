import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch(`${'http://localhost:8080/api'}`)
      .then(res => res.json())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error: " + err.message));
  }, []);

  return <div style={{ padding: '50px', fontFamily: 'Arial' }}>{message}</div>;
}

export default App;
