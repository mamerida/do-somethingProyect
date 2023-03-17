import React from "react";
import styles from "./MainComponent.module.scss";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";
import { Link } from "react-router-dom";

export const MainPage = () => {
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
            <ButtonComponent className={styles.ButtonToMenu}>
                LogOut
            </ButtonComponent>
        </section>
    );
};

export default MainPage;
