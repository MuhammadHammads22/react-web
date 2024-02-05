import React from 'react';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.jsx';
import { Provider } from 'react-redux'
import { store } from './app/store.jsx'
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
