import React from "react";

import Section from "./components/Section/Section.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  posFeedback = 0;

  handleCountChange = (event) => {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    this.posFeedback = parseFloat(
      Math.round(
        (this.state.good * 100 + this.state.neutral * 50) /
          this.countTotalFeedback()
      )
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    this.countPositiveFeedbackPercentage();

    return (
      <React.Fragment>
        <Section title="Please, leave feedback!">
          {" "}
          <FeedbackOptions
            options={this.state}
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
