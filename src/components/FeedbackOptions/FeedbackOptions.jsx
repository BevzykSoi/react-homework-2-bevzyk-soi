import styles from "../../App.module.css";

import propTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackButtons}>
      {Object.keys(options).map((option) => 
        <button
          type="button"
          value={options[option]}
          className={styles.fButton}
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option[0].toUpperCase() + option.slice(1).toLowerCase()}
        </button>
      )}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: propTypes.object.isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;