import React from 'react';
import './Style.scss';

class TimespanPanel extends React.Component {

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.changeLength(1);
  }

  decrement() {
    this.props.changeLength(-1);
  }

  render() {
    return (
      <div id="timespan-panel">
        <label id={this.props.type+"-label"} >{this.props.type+" length"}</label>
        <div id="time-adjustor">
          <button id={this.props.type+"-decrement"} onClick={this.decrement} >-</button>
          <label id={this.props.type+"-length"}>{this.props.length}</label>
          <button id={this.props.type+"-increment"} onClick={this.increment} >+</button>
        </div>
      </div>
    );
  }
}

export default TimespanPanel;
