import React, { Component } from 'react';
import Habbit from './habbit';
import HabbitAddForm from './habbitAddForm';

class Habbits extends Component {
  render() {
    return (
      <div className="habbits">
        <HabbitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habbits.map(habbit => (
            <Habbit 
              key={habbit.id} 
              habbit={habbit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habbits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habbits;