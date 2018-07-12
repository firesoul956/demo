import React, { Component } from 'react';
import header from './header';
class home extends Component {
  render() {
    return (
      <div className="home">
        {header()}
        
      </div>
    );
  }
}
export default home;
