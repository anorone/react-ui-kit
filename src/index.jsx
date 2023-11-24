import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Hello() {
  return <p>Hello, World!</p>;
}

root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
);
