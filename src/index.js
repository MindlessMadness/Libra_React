import React,{createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import data from "./data.json"
export const Context = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Context.Provider value={data}>
    <Router>
    <App />
    </Router>
    </Context.Provider>
  </React.StrictMode>
);
reportWebVitals();
