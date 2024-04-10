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

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.stats;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.stats;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { stats } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

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
        <p>Total: {totalFeedback}</p>
        <p>Positive Feedback Percentage: {positiveFeedbackPercentage}%</p>
      </>
    );
  }
}

export default Feedback;
