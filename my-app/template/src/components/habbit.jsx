import React, { Component } from 'react';

class Habbit extends Component {
  state = {
    count: 0,

  };

  handleIncrement = () => {
    //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해햐 함.
    this.setState({count: this.state.count + 1});
  }

  handleDecreament = () => {
    const count = this.state.count - 1
    this.setState({count: count < 0 ? 0 : count});
  }


  render() {
    return (
    <>
      <li className="habbit">
        <span className="habbit-name">Reading</span>
    <span className="habbit-count">{this.state.count}</span>
        <button className="habbit-button habbit-increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus"></i>
        </button>
        <button className="habbit-button habbit-decrease" onClick={this.handleDecreament}>
          <i className="fas fa-minus"></i>
        </button>
        <button className="habbit-button habbit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    </>
    );
  }
}

export default Habbit;