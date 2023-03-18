import React from "react";
import styles from "./ActivityCardComponent.module.scss";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { useDispatch } from "react-redux";
import { addSomethingToList } from "../reducers/thingsToDoReducer";

const ActivityCardComponent = ({ activity, setOtherActivity, ...props }) => {
    const dispatch = useDispatch();

    const addToFavorites = () => {
        dispatch(addSomethingToList(activity));
        setOtherActivity();
    };

    return (
        <section className={styles.cardBody} {...props}>
            <img
                className={styles.ActPhoto}
                src={`${process.env.REACT_APP_PUBLIC_ROUTE}${activity.type}.png`}
                alt={activity.type}
            />
            <div className={styles.ActName}>{activity.activity}</div>
            <p> Participants: {activity.participants}</p>
            <ButtonComponent onClick={addToFavorites}>
                Add To Your List
            </ButtonComponent>
        </section>
    );
};

export default ActivityCardComponent;
