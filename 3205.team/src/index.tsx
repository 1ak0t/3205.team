import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainPage from './pages/main/main';
import {Provider} from 'react-redux';
import {store} from './store';
import Error from './components/error/error';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <MainPage />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
