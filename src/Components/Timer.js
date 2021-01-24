import React from 'react';
import TimespanPanel from './TimespanPanel.js';
import TimerPanel from './TimerPanel.js';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25
    };
  }

  render() {
    return (
      <div>
        <TimespanPanel type="break" length={this.state.breakLength} ></TimespanPanel>
        <TimespanPanel type="session" length={this.state.sessionLength} ></TimespanPanel>
        <TimerPanel />
      </div>
    );
  }
}

export default Timer;
