import React from 'react';

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
      <div>
        <label id={this.props.type+"-label"} >{this.props.type+" length"}</label>
        <button id={this.props.type+"-decrement"} onClick={this.increment} >+</button>
        <label id={this.props.type+"-length"}>{this.props.length}</label>
        <button id={this.props.type+"-increment"} onClick={this.decrement} >-</button>
      </div>
    );
  }
}

export default TimespanPanel;
