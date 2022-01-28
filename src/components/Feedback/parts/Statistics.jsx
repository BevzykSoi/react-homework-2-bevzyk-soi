import styles from "../Feedback.module.css";

import propTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
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
        TOTAL FEEDBACKS: <span className={styles.total}>{total}</span>
      </h4>
      <h4 className={styles.countTitle}>
        POSITIVE FEEDBACKS:{" "}
        <span className={styles.total}>{Math.round((positivePercentage / total) * 100)}%</span>
      </h4>
    </>
  );
};

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};

export default Statistics;
