import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap/bootstrap.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./store/rootReducer";
import "./bootstrap/style.css"
import DemoDongSP from "./views/DemoDongSP"
import DongSpReducer from './store/reducers/DongSpReducer';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store = {store}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
