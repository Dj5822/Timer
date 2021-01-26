import React from 'react';

class TimerPanel extends React.Component {
  render() {
    return (
      <div>
        <label id="timer-label">{this.props.status}</label>
        <label id="time-left">
        {this.props.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        :{this.props.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        </label>
      </div>
    );
  }
}

export default TimerPanel;
