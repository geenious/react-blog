import React, { Component } from 'react';
import '../styles/App.css';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to='/' className='idiocy'>Idiocy</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to='/create'>Create Post</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' to='/show'>Show Posts</NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
