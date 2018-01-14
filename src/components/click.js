import React, { Component } from 'react';

class click extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <button>
          Make a taco
          //onChange={(event) => this.setState({tacos: tacos + 1})}
        </button>
      </div>
    );

  }
}


export default click;
