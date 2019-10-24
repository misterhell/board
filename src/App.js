import React from 'react';
import './resources/App.sass';

import Router from './App/Router'
import Nav from './App/Navbar'

function App() {
  return (
    <div className="app">
      <div className="app-nav">
        <Nav />
      </div>
      <div className="app-body">
        <Router />
      </div>
    </div>
  );
}

export default App;
