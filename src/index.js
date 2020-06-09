import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'Weather App React Setup Hot Reload';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
