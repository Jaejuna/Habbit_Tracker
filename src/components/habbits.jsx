import React, { Component } from 'react';
import Habbit from './habbit';

class Habbits extends Component {
  state = {
    habbits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Excersing', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ]
  }; 

  render() {
    return ( 
      <ul>
        {this.state.habbits.map(habbit => (
          <Habbit key={habbit.id} habbit={habbit}/>
        ))}
      </ul>
    );
  }
}

export default Habbits;