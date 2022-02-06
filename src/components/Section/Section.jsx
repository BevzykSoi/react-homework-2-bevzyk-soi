import styles from "../../App.module.css";

import propTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <section className={styles.feedback}>
            <h2 className={styles.title}>{title}</h2>

            {children}
        </section>
    );
};

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};

export default Section;