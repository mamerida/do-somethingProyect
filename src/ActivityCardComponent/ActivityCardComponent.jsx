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
        <section
            data-testid="activity_card"
            className={`${styles.cardBody} ${stylesDefined} `}
            {...props}
        >
            <img
                className={styles.ActPhoto}
                src={`${process.env.REACT_APP_PUBLIC_ROUTE}${activity.type}.png`}
                alt={activity.type}
            />
            <div data-testid="activity_name" className={styles.ActName}>
                {activity.activity}
            </div>
            <p data-testid="activity_participants">
                {" "}
                Participants: {activity.participants}
            </p>
            <ButtonComponent
                data-testid="activity_button"
                onClick={functionButton}
            >
                {messageButton}
            </ButtonComponent>
        </section>
    );
};

export default ActivityCardComponent;
