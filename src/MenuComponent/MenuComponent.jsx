import React, { useCallback, useEffect } from "react";

import styles from "./MenuComponent.module.scss";

import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { LogOutUser } from "../utils/localHost";
import { callDoSomethingAPi } from "../utils/ApiCommunications";

import { Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setSomethingToShow, clearStore } from "../reducers/thingsToDoReducer";

const MenuComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { thinksOnScreen } = useSelector((state) => state.something);

    const logOutUser = () => {
        LogOutUser();
        navigate("/login", { replace: true });
        dispatch(clearStore());
    };

    const getActivities = useCallback(() => {
        if (thinksOnScreen == null) {
            callDoSomethingAPi().then((data) => {
                dispatch(setSomethingToShow(data));
            });
        }
    }, []);

    useEffect(() => {
        getActivities();
        console.log("test");
    }, []);

    return (
        <>
            <section className={styles.MenuBoard}>
                <div className={styles.RouteContainer}>
                    <Link
                        className={styles.option__Title}
                        to={"/"}
                        data-testid="DoSomething"
                    >
                        Do Something
                    </Link>
                    <Link
                        className={styles.option}
                        to={"activitiesToDo"}
                        data-testid="activitiesToDo"
                    >
                        Activities to do
                    </Link>
                </div>
                <ButtonComponent
                    onClick={logOutUser}
                    className={styles.ButtonToMenu}
                    data-testid="Button"
                >
                    LogOut
                </ButtonComponent>
            </section>
            <section>
                <Outlet getActivities={getActivities} data-testid="Oulet" />
            </section>
        </>
    );
};

export default MenuComponent;
