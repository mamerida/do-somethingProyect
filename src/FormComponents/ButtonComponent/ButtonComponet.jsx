import React from "react";
import styles from "./ButtonComponet.module.scss";

const ButtonComponent = ({ children, ...props }) => {
    return (
        <button className={styles.buttonSubmit} {...props}>
            {children}
        </button>
    );
};

export default ButtonComponent;
