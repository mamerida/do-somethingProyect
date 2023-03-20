import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    setSomethingToShow,
    addSomethingToList,
} from "../reducers/thingsToDoReducer";
import ActivityCardComponent from "../ActivityCardComponent/ActivityCardComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { callDoSomethingAPi } from "../utils/ApiCommunications";
import styles from "./HomePageComponent.module.scss";
import { IsUserLoged } from "../utils/localHost";

const HomePageComponent = () => {
    const [userLoged, setUserLoged] = useState(IsUserLoged());
    const { thinksOnScreen } = useSelector((state) => state.something);
    const dispatch = useDispatch();

    const setOtherActivity = () => {
        callDoSomethingAPi().then((data) => {
            dispatch(setSomethingToShow(data));
        });
    };

    const addActivityToFavorite = () => {
        dispatch(addSomethingToList(thinksOnScreen));
    };

    return (
        <section className={styles.HomeContainerView}>
            <section className={styles.formContainer}>
                <h3>Welcome {userLoged.name}</h3>
                <div>{userLoged.age}</div>
                <hr className={styles.hrSeparate} />
                {thinksOnScreen ? (
                    <ActivityCardComponent
                        activity={thinksOnScreen}
                        functionButton={() => {
                            addActivityToFavorite();
                            setOtherActivity();
                        }}
                        messageButton="Add To Your List"
                    />
                ) : null}
                <ButtonComponent onClick={setOtherActivity}>
                    Other Activity
                </ButtonComponent>
            </section>
        </section>
    );
};

export default HomePageComponent;
