import styles from "../../App.module.css";

import propTypes from "prop-types";

const Notification = ({ message }) => {
  return <h4 className={styles.countTitle}>{message}</h4>;
};

Notification.defaultProps = {
  message: "There is no feedback here",
};

Notification.propTypes = {
  message: propTypes.string,
};

export default Notification;
