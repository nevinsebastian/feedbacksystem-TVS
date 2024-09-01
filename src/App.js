import React from 'react';
import Login from './components/logIn'; 
import FeedBackSysytem from './components/feedBackSysytem-sales';


function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <header className="App-header">
        <Login />
        <FeedBackSysytem />
      </header>
    </div>
  );
}

export default App;
