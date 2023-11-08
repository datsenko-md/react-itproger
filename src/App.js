/* eslint-disable */

import React from 'react';

import Header from './components/Header';

class App extends React.Component {
  helpText = 'Hello text!';

  inputClick() {
    console.log('Clicked');
  }

  mouseOver() {
    console.log('Mouse Over');
  }

  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта" />
        <h1>{this.helpText}</h1>
        <input
          placeholder={this.helpText}
          onClick={this.inputClick}
          onMouseOver={this.mouseOver}
        />
        <p>{this.helpText === 'Hello text!' ? 'Yes' : 'No'}</p>
      </div>
    );
  }
}

export default App;