import React, { useCallback, useEffect } from "react";

import styles from "./MenuComponent.module.scss";

import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { LogOutUser } from "../utils/localHost";
import { callDoSomethingAPi } from "../utils/ApiCommunications";

import { Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setSomethingToShow } from "../reducers/thingsToDoReducer";

const MenuComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutUser = () => {
        LogOutUser();
        navigate("/login", { replace: true });
    };

    const getActivities = useCallback(() => {
        callDoSomethingAPi().then((data) => {
            dispatch(setSomethingToShow(data));
        });
    }, []);

    useEffect(() => {
        getActivities();
    }, []);

    return (
        <>
            <section className={styles.MenuBoard}>
                <div className={styles.RouteContainer}>
                    <Link className={styles.option__Title} to={"/"}>
                        Do Something
                    </Link>
                    <Link className={styles.option} to={"activitiesToDo"}>
                        Activities to do
                    </Link>
                </div>
                <ButtonComponent
                    onClick={logOutUser}
                    className={styles.ButtonToMenu}
                >
                    LogOut
                </ButtonComponent>
            </section>
            <section>
                <Outlet getActivities={getActivities} />
            </section>
        </>
    );
};

export default MenuComponent;
