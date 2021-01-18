import React, { Component } from 'react';
import './app.css';
import Habbits from './components/habbits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habbits: [
      {id: 1, name: 'Reading', count: 0},
      {id: 2, name: 'Excersing', count: 0},
      {id: 3, name: 'Coding', count: 0}
    ]
  }; 

  handleIncrement = habbit => {
    const habbits = [...this.state.habbits];
    const index = habbits.indexOf(habbit);
    habbits[index].count++;
    //키값이랑 value 값이랑 갔으면 하나만 써도 됌
    this.setState({habbits: habbits});
  };

  handleDecrement = habbit => {
    const habbits = [...this.state.habbits];
    const index = habbits.indexOf(habbit);
    const count = habbits[index].count - 1;
    habbits[index].count = count < 0 ? 0 : count;
    this.setState({habbits});
  };

  handleDelete = habbit => {
    const habbits = this.state.habbits.filter(item => item.id !== habbit.id);
    this.setState({habbits});
  };

  handleAdd = name => {
    const habbits = [...this.state.habbits, {id: Date.now(), name, count : 0}];
    this.setState({habbits});
  };

  handleReset = () => {
    const habbits = this.state.habbits.map(habbit => {
      habbit.count = 0;
      return habbit;
    });
    this.setState({habbits});
  }

  render() {
    return (
      <>
        <Navbar 
        totalCount = {this.state.habbits.filter(item => item.count > 0).length}
        />
        <Habbits 
          habbits = {this.state.habbits}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
          onAdd = {this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;