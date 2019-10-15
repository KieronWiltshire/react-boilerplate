import React, { Component } from 'react';
import { connect } from 'react-redux';
import MouseActions from '../actions/mouse-actions';

export default connect(
  (state) => {
    return {
      x: state.mouse.x,
      y: state.mouse.y
    }
  }, 
  (dispatch) => {
    return {
      updateMousePosition: (event) => { console.log(event); dispatch(MouseActions.updateMousePosition({ x: event.clientX, y: event.clientY })); },
    }
  }
)(class extends Component {

  /**
   * Render the {React} component.
   *
   * @returns {JSX}
   */
  render() {
    return (
      <div style={{ position: 'fixed', top: '0', height: '100%', width: '100%' }} onMouseMove={this.props.updateMousePosition}>
        <p style={{ paddingTop: ((window.innerHeight / 2) - 40) }}>The current mouse position is ({this.props.x}, {this.props.y})</p>
      </div>
    );
  }
  
})