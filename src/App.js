import React from 'react';
import './App.css';
import Login from './components/logIn'; // Import the Login component

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <header className="App-header">
        <Login /> {/* Include the Login component */}
      </header>
    </div>
  );
}

export default App;
