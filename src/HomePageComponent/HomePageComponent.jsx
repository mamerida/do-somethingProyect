import React from "react";
import UserDataComponent from "../UserDataComponent/UserDataComponent";
import { useSelector, useDispatch } from "react-redux";
import { setSomethingToShow } from "../reducers/thingsToDoReducer";
import ActivityCardComponent from "../ActivityCardComponent/ActivityCardComponent";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { callDoSomethingAPi } from "../utils/ApiCommunications";

const HomePageComponent = () => {
    const { thinksOnScreen } = useSelector((state) => state.something);
    const dispatch = useDispatch();

    const setOtherActivity = () => {
        callDoSomethingAPi().then((data) => {
            dispatch(setSomethingToShow(data));
        });
    };

    return (
        <>
            <UserDataComponent />
            {thinksOnScreen ? (
                <ActivityCardComponent
                    activity={thinksOnScreen}
                    setOtherActivity={setOtherActivity}
                />
            ) : null}
            <ButtonComponent onClick={setOtherActivity}>
                Other Activity
            </ButtonComponent>
        </>
    );
};

export default HomePageComponent;
