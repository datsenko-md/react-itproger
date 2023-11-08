/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable */
import React from 'react';
import * as ReactDomClient from 'react-dom/client';

class Header extends React.Component {
  render() {
    return <header>{this.props.title}</header>;
  }
}

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

const app = ReactDomClient.createRoot(document.getElementById('app'));

app.render(<App />);
