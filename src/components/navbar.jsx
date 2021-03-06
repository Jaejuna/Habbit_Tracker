import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className ="navbar">
        <i className="navbar-logo fas fa-calendar-check"></i>
        <span>Habbit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;