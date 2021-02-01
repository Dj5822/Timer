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
    var type = `${this.props.type.charAt(0).toUpperCase()}${this.props.type.slice(1)}`;
    return (
      <div id="timespan-panel" class="sub-container">
        <label id={this.props.type+"-label"} >{`${type} Length`}</label>
        <div id="time-adjustor">
          <button id={this.props.type+"-decrement"} class="square-button" onClick={this.decrement} >-</button>
          <label id={this.props.type+"-length"}>{this.props.length}</label>
          <button id={this.props.type+"-increment"} class="square-button" onClick={this.increment} >+</button>
        </div>
      </div>
    );
  }
}

export default TimespanPanel;
