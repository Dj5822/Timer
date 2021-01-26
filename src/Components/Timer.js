import React from 'react';
import TimespanPanel from './TimespanPanel.js';
import TimerPanel from './TimerPanel.js';

var countdown;
const STATUS = ["session", "break"];
var defaultState = {
  breakLength: 5,
  sessionLength: 25,
  min: 25,
  sec: 0,
  ms: 0,
  countdownStarted: false,
  status: STATUS[0]
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
    this.reset = this.reset.bind(this);
    this.changeBreak = this.changeBreak.bind(this);
    this.changeSession = this.changeSession.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
    this.startStopPressed = this.startStopPressed.bind(this);
  }

  changeBreak(amount) {
    let newBreakLength = 0;
    if (this.state.breakLength + amount <= 0) {
      newBreakLength = 1;
    }
    else if (this.state.breakLength + amount > 60) {
      newBreakLength = 60;
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
    else if (this.state.sessionLength + amount > 60) {
      newSessionLength = 60;
    }
    else {
      newSessionLength = this.state.sessionLength + amount;
    }

    this.setState({
      sessionLength: newSessionLength,
      min: newSessionLength
    })
  }

  reset() {
    this.stopCountdown();
    this.setState(defaultState);
  }

  startCountdown() {
    let session = new Date(this.state.min*60*1000 + this.state.sec*1000 + this.state.ms);
    let startTime = new Date();
    let currentTime = startTime;
    let timeLeft = new Date(session - (currentTime - startTime));

    countdown = setInterval(function() {
      // Reset timer when it timer reaches 0.
      if (timeLeft.getMinutes() === 0 && timeLeft.getSeconds() === 0){
        if (this.state.status === STATUS[0]){
          this.setState(state => ({
            min: state.breakLength,
            status: STATUS[1]
          }));
          session = new Date(this.state.breakLength*60*1000);
        }
        else {
          this.setState(state => ({
            min: state.sessionLength,
            status: STATUS[0]
          }));
          session = new Date(this.state.sessionLength*60*1000);
        }
        startTime = new Date();
      }

      // Get the amount of time left.
      currentTime = new Date();
      timeLeft = new Date(session - (currentTime - startTime));

      // Update state.
      this.setState((state) => ({
        min: timeLeft.getMinutes(),
        sec: timeLeft.getSeconds()
      }));
    }.bind(this),
    100);
  }

  stopCountdown() {
    if (countdown !== undefined) {
      clearInterval(countdown);
    }
  }

  startStopPressed() {
    if (this.state.countdownStarted === false){
      this.setState({countdownStarted: true});
      this.startCountdown();
    }
    else {
      this.setState({countdownStarted: false});
      this.stopCountdown();
    }
  }

  render() {
    return (
      <div>
        <TimespanPanel type="break" length={this.state.breakLength}
        changeLength={this.changeBreak} />
        <TimespanPanel type="session" length={this.state.sessionLength}
        changeLength={this.changeSession} />
        <TimerPanel status={this.state.status} minutes={this.state.min} seconds={this.state.sec} />
        <button id="start_stop" onClick={this.startStopPressed}>start/stop</button>
        <button id="reset" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default Timer;
