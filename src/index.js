import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'; // allows us to use reactredux firebase throughout our application
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase"; 

const store = createStore(rootReducer);


// store.subscribe(() => 
//   console.log(store.getState())
// );
const rrfProps = {
  firebase,
  config: {
        userProfile: "users"
    },
  dispatch: store.dispatch,
  createFirestoreInstance
} 

ReactDOM.render(
  <Provider store = {store}>
    <ReactReduxFirebaseProvider {...rrfProps}> // privoides our redux store context
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);