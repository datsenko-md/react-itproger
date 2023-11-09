/* eslint-disable */

import React from 'react';

import Header from './components/Header';
import Image from './components/Image';
import Prabhupada from './img/Prabhupada.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: 'HelpText',
    }

    this.inputClick = this.inputClick.bind(this);
  }

  helpText = 'Hello text!';

  inputClick() {
    this.setState({ helpText: 'CHanged' });
    console.log('Clicked');
  }

  mouseOver() {
    console.log('Mouse Over');
  }

  render() {
    return (
      <div className="name">
        <Header title="Шапка сайта" />
        <h1>{this.state.helpText}</h1>
        <input
          placeholder={this.state.helpText}
          onClick={this.inputClick}
          onMouseOver={this.mouseOver}
        />
        <p>{this.state.helpText === 'Hello text!' ? 'Yes' : 'No'}</p>
        <Image image={Prabhupada} />
      </div>
    );
  }
}

export default App;