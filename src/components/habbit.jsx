import React, { Component } from 'react';

class Habbit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habbit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habbit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habbit);
  };

  render() {
    const { name, count } = this.props.habbit;
    return (
      <li className="habbit">
        <span className="habbit-name">{name}</span>
        <span className="habbit-count">{count}</span>
        <button 
        className="habbit-button habbit-increase" 
        onClick={this.handleIncrement}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button 
        className="habbit-button habbit-decrease" 
        onClick={this.handleDecrement}
        >
          <i className="fas fa-minus"></i>
        </button>
        <button 
        className="habbit-button habbit-delete" 
        onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habbit;