import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'; // 🔁 make sure this is the correct path to your Redux store

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Wrap with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
