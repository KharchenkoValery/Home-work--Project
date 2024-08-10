// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import { rootReducer } from './redux';
// import { thunk } from 'redux-thunk';

// const myStore = createStore(rootReducer, applyMiddleware(thunk))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={myStore}>
//      <App  />
//   </Provider>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './redux';
import { thunk } from 'redux-thunk';

const myStore = createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
     <App />
  </Provider>
);

