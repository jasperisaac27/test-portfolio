import React from "react";
import { CloseRounded } from "@material-ui/icons";
import { NavLinks } from "./Navbar.js";
import styles from "../styles/Navbar.module.css";

export default function MobileNavbar({
    activePage,
    toggleNavbar,
    closeNavbar,
}) {
    return (
        <div className={`${styles["mobile-navbar-container"]}`}>
            <div className={styles["mobile-navbar-wrapper"]}>
                <div className={styles["logo-container"]}>PB</div>
                <div className={styles["menu"]} onClick={toggleNavbar}>
                    <CloseRounded />
                </div>
                <div className={styles["mobile-nav-links"]}>
                    <NavLinks
                        activePage={activePage}
                        closeNavbar={closeNavbar}
                    />
                </div>
            </div>
        </div>
    );
}
