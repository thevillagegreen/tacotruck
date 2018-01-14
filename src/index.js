// imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import click from './components/click.js'

// Create a new component to produce HTML
class App extends Component {
  constructor(props){
    super(props);
    // sets array of intial videos
    this.state = { tacos: 0 };
    // YTSearch({key: API_KEY, term: 'bruce springsteen'}, (videos) => {
    //   this.setState = ({videos}); //same as {videos: videos}
    // });
  }
  render() {
    return (
      <div>
        <click />
      </div>
    );
  }
}

// Take component's html and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
