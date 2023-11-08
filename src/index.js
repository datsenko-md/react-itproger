import React from 'react';
import ReactDOM from 'react-dom';

const inputClick = () => console.log('Clicked');
const mouseOver = () => console.log('Mouse Over');

const helpText = 'Hello text!';

const elements = (
  <div className="name">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
      onClick={inputClick} onMouseOver={mouseOver}/>
    <p>{helpText === 'Hello text!' ? 'Yes' : 'No'}</p>
  </div>
);

const app = document.getElementById('app');

ReactDOM.render(elements, app);