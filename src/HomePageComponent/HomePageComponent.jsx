import React from "react";
import UserDataComponent from "../UserDataComponent/UserDataComponent";
import { useSelector } from "react-redux";
import ActivityCardComponent from "../ActivityCardComponent/ActivityCardComponent";

const HomePageComponent = () => {
    const { thinksOnScreen } = useSelector((state) => state.something);

    return (
        <>
            <UserDataComponent />
            {thinksOnScreen ? (
                <ActivityCardComponent activity={thinksOnScreen} />
            ) : null}
        </>
    );
};

export default HomePageComponent;
