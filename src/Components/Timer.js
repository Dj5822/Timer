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
    this.reset = this.reset.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
  }

  changeBreak(amount) {
    let newBreakLength = 0;
    if (this.state.breakLength + amount <= 0) {
      newBreakLength = 1;
    }
    else {
      newBreakLength = this.state.breakLength + amount;
    }

    this.setState({
      breakLength: newBreakLength
    })
  }

  changeSession(amount) {
    let newSessionLength = 0;
    if (this.state.sessionLength + amount <= 0) {
      newSessionLength = 1;
    }
    else {
      newSessionLength = this.state.sessionLength + amount;
    }

    this.setState({
      sessionLength: newSessionLength
    })
  }

  reset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25
    });
  }

  render() {
    return (
      <div>
        <TimespanPanel type="break" length={this.state.breakLength}
        changeLength={this.changeBreak} />
        <TimespanPanel type="session" length={this.state.sessionLength}
        changeLength={this.changeSession} />
        <TimerPanel />
        <button id="start-stop">start/stop</button>
        <button id="reset" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Timer;
