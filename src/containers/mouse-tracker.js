import React, { Component } from 'react';
import { connect } from 'react-redux';

import Mouse from '../components/mouse';

export default connect(
  (state) => {
    
  }, 
  (dispatch) => {
    
  }
)(class MouseTracker extends Component {

  /**
   * Render the {React} component.
   *
   * @returns {JSX}
   */
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: ((window.innerHeight / 2) - 100) }}>Move the mouse around!</h1>
        <Mouse />
      </div>
    );
  }
})