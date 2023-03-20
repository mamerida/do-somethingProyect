import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import ButtonComponent from "../FormComponents/ButtonComponent/ButtonComponet";

const ErrorPage = () => {
    return (
        <section className={styles.errorContainer}>
            <div className={styles.errorCard}>
                <img
                    className={styles.ChrPhoto}
                    src="/worryFaceIcon.png"
                    alt="worryFace"
                />
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <Link to={"/login"} data-testid="login_Link">
                    <ButtonComponent>Go to LogIn</ButtonComponent>
                </Link>
            </div>
        </section>
    );
};
export default ErrorPage;
