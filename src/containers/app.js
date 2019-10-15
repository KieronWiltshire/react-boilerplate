import React, { Component } from 'react';
import { connect } from 'react-redux';

export default connect(
  (state) => {
  
  }, 
  (dispatch) => {
  
  }
)(class extends Component {

  constructor() {
    super();
    this.name = "Daniel";
  }

  /**
   * Render the {React} component.
   *
   * @returns {JSX}
   */
  render() {
    return (
      <div>
        <h1>Damn, {this.name}!</h1>
      </div>
    );
  }
  
});
