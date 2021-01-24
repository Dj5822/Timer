import React from 'react';

class TimerPanel extends React.Component {
  render() {
    return (
      <div>
        <label id="timer-label">Session</label>
        <label id="time-left">mm:ss</label>
      </div>
    );
  }
}

export default TimerPanel;
