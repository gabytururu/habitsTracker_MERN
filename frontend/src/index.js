import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HabitsContextProvider} from './context/habitsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HabitsContextProvider>
      <App />
    </HabitsContextProvider>
  </React.StrictMode>
);


