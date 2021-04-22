import React, { Component } from 'react';
import box from '../box.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-warning p-0 text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="#"
        >
          <img src={box} width="30" height="30" className="align-top" alt="" />
          IPFS Certificates Vault
        </a>
        <button onClick={this.props.switchUI}>{this.props.ui}</button>
        </nav>
    );
  }
}

export default Navbar;