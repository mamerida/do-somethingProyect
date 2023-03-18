import React from "react";
import styles from "./ActivityCardComponent.module.scss";

const ActivityCardComponent = ({ activity, ...props }) => {
    return (
        <section className={styles.cardBody} {...props}>
            <img
                className={styles.ActPhoto}
                src={`${process.env.REACT_APP_PUBLIC_ROUTE}${activity.type}.png`}
                alt={activity.type}
            />
            <div className={styles.ActName}>{activity.activity}</div>
            <p> Participants: {activity.participants}</p>
        </section>
    );
};

export default ActivityCardComponent;
