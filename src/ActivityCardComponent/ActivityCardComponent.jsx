import React from "react";
import styles from "./ActivityCardComponent.module.scss";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";

const ActivityCardComponent = ({
    activity,
    functionButton,
    messageButton,
    stylesDefined,
    ...props
}) => {
    return (
        <section className={`${styles.cardBody} ${stylesDefined} `} {...props}>
            <img
                className={styles.ActPhoto}
                src={`${process.env.REACT_APP_PUBLIC_ROUTE}${activity.type}.png`}
                alt={activity.type}
            />
            <div className={styles.ActName}>{activity.activity}</div>
            <p> Participants: {activity.participants}</p>
            <ButtonComponent onClick={functionButton}>
                {messageButton}
            </ButtonComponent>
        </section>
    );
};

export default ActivityCardComponent;
