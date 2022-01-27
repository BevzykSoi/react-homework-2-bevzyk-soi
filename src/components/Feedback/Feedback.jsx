import React from "react";
import propTypes from "prop-types";

import styles from "./Feedback.module.css";

export default class Feedback extends React.Component {
  constructor() {
    super();

    this.posFeedback = 0;
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCountChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));

    this.countPositiveFeedbackPercentage(value);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (value) => {
    const changedValue = parseFloat(value);
    this.posFeedback += changedValue;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.feedback}>
        <h1 className={styles.title}>Please, leave feedback!</h1>

        <div className={styles.feedbackButtons}>
          <button
            type="button"
            value="1"
            className={styles.fButton}
            onClick={this.handleCountChange}
            name="good"
          >
            Good
          </button>
          <button
            type="button"
            value={0.5}
            className={styles.fButton}
            onClick={this.handleCountChange}
            name="neutral"
          >
            Neutral
          </button>
          <button
            type="button"
            value="0"
            className={styles.fButton}
            onClick={this.handleCountChange}
            name="bad"
          >
            Bad
          </button>
        </div>

        <div className={styles.stats}>
          <h2>Feedback statistics:</h2>

          <div className={styles.statsCount}>
            <h4 className={styles.countTitle}>
              GOOD: <span className={styles.good}>{good}</span>
            </h4>
            <h4 className={styles.countTitle}>
              NEUTRAL: <span className={styles.neutral}>{neutral}</span>
            </h4>
            <h4 className={styles.countTitle}>
              BAD: <span className={styles.bad}>{bad}</span>
            </h4>
          </div>

          <h4 className={styles.countTitle}>
            TOTAL FEEDBACKS: <span className={styles.total}>{this.countTotalFeedback()}</span>
          </h4>
          <h4 className={styles.countTitle}>
            POSITIVE FEEDBACKS: <span>{Math.round((this.posFeedback / this.countTotalFeedback()) * 100)}%</span>
          </h4>
        </div>
      </div>
    );
  }
}
