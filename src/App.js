import React, { useEffect } from 'react'
import './resources/App.sass'

import Router from './app/Router'
import Nav from './app/Navbar'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app-nav">
          <Nav />
        </div>
        <div className="app-body">
          <Router />
        </div>
      </div>
    </Provider>
  );
}

export default App;
