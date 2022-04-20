import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Footer.module.css";

const Footer = ({ isAtHome }) => {
    return (
        <div
            className={`${styles["footer-container"]} ${
                isAtHome && styles["at-home"]
            }`}
        >
            <div className={styles["logo-container"]}>PB</div>
            <div className={styles["socials-container"]}>
                <SocialIcon
                    className={styles["insta-icon"]}
                    network="instagram"
                    bgColor="transparent"
                    fgColor="white"
                    url="https://www.instagram.com/littlefantasyworld/"
                />

                <SocialIcon
                    className={styles["youtube-icon"]}
                    network="youtube"
                    bgColor="transparent"
                    fgColor="white"
                    url="https://www.youtube.com/channel/UCycq9WACc1GY-hKoJs4kYsQ"
                />

                <a
                    href="https://www.tiktok.com/@sometheatrekid96"
                    className={styles["tiktok-icon"]}
                >
                    <img src="/images/tiktok-48.png/" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
