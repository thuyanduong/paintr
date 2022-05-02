import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import PainterProvider from './context/PainterProvider';

ReactDOM.render(
  <PainterProvider>
      <App />,
  </PainterProvider>,
  document.getElementById('root')
);
