import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles["home-content"]}>
                <div className={styles["before-line"]}></div>
                <h1>Patricia Bermudez</h1>
                <div className={styles["home-descriptions"]}>
                    <span className={styles["home-description"]}>ACTRESS</span>
                    <span className={styles["home-description"]}>
                        VIDEO EDITOR
                    </span>
                    <span className={styles["home-description"]}>
                        CONTENT CREATOR
                    </span>
                </div>
                <div className={styles["after-line"]}></div>
            </div>
        </div>
    );
}
