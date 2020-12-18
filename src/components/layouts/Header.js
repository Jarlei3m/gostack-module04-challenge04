import React, { Component } from 'react';


class Header extends Component {
  render() {
    return(
      <header>
        <h1>facebook</h1>
        <div className="myAccount">
          <p>My account <i className="material-icons">account_circle</i> </p>
        </div>
      </header>
    )
  }
}

export default Header;