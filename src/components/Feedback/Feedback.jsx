import React from "react";
import Section from "./parts/Section";
import Statistics from "./parts/Statistics";
import FeedbackOptions from "./parts/FeedbackOptions";
import Notification from "./parts/Notification";

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
      <React.Fragment>
        <Section title="Please, leave feedback!">
          {" "}
          <FeedbackOptions
            options={{ good: "1", neutral: "0.5", bad: "0" }}
            onLeaveFeedback={this.handleCountChange}
          />
        </Section>
        <Section title="Feedback statistics:">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.posFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </React.Fragment>
    );
  }
}
