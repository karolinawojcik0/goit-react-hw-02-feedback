import React, { Component } from 'react';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {
        good: 0,
        neutral: 0,
        bad: 0,
      },
    };
  }

  handleFeedback = e => {
    const statType = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      stats: {
        ...prevState.stats,
        [statType]: prevState.stats[statType] + 1,
      },
    }));
  };

  render() {
    const { stats } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <button className="" type="button" onClick={this.handleFeedback}>
          Good
        </button>
        <button className="" type="button" onClick={this.handleFeedback}>
          Neutral
        </button>
        <button className="" type="button" onClick={this.handleFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {stats.good}</p>
        <p>Neutral: {stats.neutral}</p>
        <p>Bad: {stats.bad}</p>
      </>
    );
  }
}

export default Feedback;
