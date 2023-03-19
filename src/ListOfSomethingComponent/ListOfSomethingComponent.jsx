import React from "react";
import styles from "./ListOfSomethingComponent.module.scss";
import ActivityCardComponent from "../ActivityCardComponent/ActivityCardComponent";
import { useSelector, useDispatch } from "react-redux";
import { deleteElementFromStorage } from "../reducers/thingsToDoReducer";

const ListOfSomethingComponent = () => {
    const { somethingList } = useSelector((state) => state.something);
    const dispatch = useDispatch();

    const deleteActivity = (activity) => {
        dispatch(deleteElementFromStorage(activity));
    };

    return (
        <div className={styles.cardContainer}>
            <section className={styles.SomethingsGrid}>
                {somethingList &&
                    somethingList.map((activity) => {
                        return (
                            <ActivityCardComponent
                                activity={activity}
                                key={activity.key}
                                stylesDefined={styles.ActivityCard}
                                functionButton={() => {
                                    deleteActivity(activity);
                                }}
                                messageButton="Delete"
                            />
                        );
                    })}
            </section>
        </div>
    );
};

export default ListOfSomethingComponent;
