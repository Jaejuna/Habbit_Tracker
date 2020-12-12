import React, { Component } from 'react';
import Habbit from './habbit';

class Habbits extends Component {
  render() {
    return (
      <div className="habbits">
        <ul>
          {this.props.habbits.map(habbit => (
            <Habbit 
              key={habbit.id} 
              habbit={habbit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Habbits;