import React from 'react';
import './Style.scss';

class TimerPanel extends React.Component {
  render() {
    // Change first letter to upper case.
    var labelText = `${this.props.status.charAt(0).toUpperCase()}${this.props.status.slice(1)}`;
    return (
      <div id="timer-container" class="sub-container">
        <label id="timer-label">{labelText}</label>
        <label id="time-left">
        {this.props.minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        :{this.props.seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
        </label>
      </div>
    );
  }
}

export default TimerPanel;
