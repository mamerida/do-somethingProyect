import React from "react";

import styles from "./MenuComponent.module.scss";

import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { LogOutUser } from "../utils/localHost";

import { Link, useNavigate, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";

export const MenuComponent = () => {
    const navigate = useNavigate();

    const logOutUser = () => {
        LogOutUser();
        navigate("/login", { replace: true });
    };

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
                <Provider store={store}>
                    <Outlet />
                </Provider>
            </section>
        </>
    );
};

export default MenuComponent;
