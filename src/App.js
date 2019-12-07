import 'assets/App.sass'
import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from 'store/reducers'


import Router from 'routes/Router'
import Nav from 'components/Navbar'


const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...[thunk]),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
)


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
