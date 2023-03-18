import React, { useCallback, useEffect } from "react";

import styles from "./MenuComponent.module.scss";

import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { LogOutUser } from "../utils/localHost";

import { Link, useNavigate, Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addSomethingToList } from "../reducers/thingsToDoReducer";

const MenuComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutUser = () => {
        LogOutUser();
        navigate("/login", { replace: true });
    };

    const getActivities = useCallback(() => {
        fetch(process.env.REACT_APP_API_URL)
            .then((response) => response.json())
            .then((data) => {
                dispatch(addSomethingToList(data));
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
                <Outlet />
            </section>
        </>
    );
};

export default MenuComponent;
