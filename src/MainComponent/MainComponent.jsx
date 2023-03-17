import React from "react";

import styles from "./MainComponent.module.scss";

import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { LogOutUser } from "../utils/localHost";

import { Link, useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();

    const logOutUser = () => {
        LogOutUser();
        navigate("/login");
    };

    return (
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
    );
};

export default MainPage;
