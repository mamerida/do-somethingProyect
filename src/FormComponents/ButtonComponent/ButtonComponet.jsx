import React from "react";
import styles from "./ButtonComponet.module.scss";

const ButtonComponent = ({ children, className, ...props }) => {
    return (
        <button className={`${styles.buttonSubmit} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default ButtonComponent;
