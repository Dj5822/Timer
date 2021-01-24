import React from 'react';

class TimespanPanel extends React.Component {
  render() {
    return (
      <div>
        <label id={this.props.type+"-label"} >{this.props.type+" length"}</label>
        <button id={this.props.type+"-decrement"}>+</button>
        <button id={this.props.type+"-increment"}>-</button>
      </div>
    );
  }
}

export default TimespanPanel;
