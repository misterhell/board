import React from 'react';
import '../resources/App.sass';

import Router from './Router'
import Nav from './Navbar'


/** store playing */
import { createStore } from 'redux';

const ACTION_HELLO_WORLD = 'ACTION_HELLO_WORLD'

const actionMakeHelloWorld = {
  type: ACTION_HELLO_WORLD,
  payload: {
    hello: 'привет',
    world: 'мир'
  }
}

const initialSate = {
  hello: '',
  world: ''
}


const rootReducer = (state = initialSate, action) => {

  switch (action.type) {
    case ACTION_HELLO_WORLD:
      state = {...state, ...action.payload}
  }

  return state;
}

const store = createStore(rootReducer);
console.log(store.getState())

store.dispatch(actionMakeHelloWorld);
console.log(store.getState())


/** !!! store playing !!! */


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
