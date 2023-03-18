import React, { useState } from "react";
import { IsUserLoged } from "../utils/localHost";
import styles from "./UserDataComponent.module.scss";

const UserDataComponent = () => {
    const [userLoged, setUserLoged] = useState(IsUserLoged());

    return (
        <section className={styles.userCard}>
            <h2>Welcome {userLoged.name}</h2>
            <div>
                <div>Age: {userLoged.age}</div>
            </div>
        </section>
    );
};

export default UserDataComponent;
