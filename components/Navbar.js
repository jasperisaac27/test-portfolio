import React from "react";
import Link from "next/link";
import { Menu } from "@material-ui/icons";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ activePage, toggleNavbar, isToggled, closeNavbar }) => {
    return (
        <div
            className={`${styles["navbar-container"]} ${
                isToggled && styles["toggled"]
            }`}
        >
            <div className={styles["navbar-wrapper"]}>
                <div className={styles["logo-container"]}>PB</div>
                <div className={styles["menu"]} onClick={toggleNavbar}>
                    <Menu />
                </div>
                <div className={`${styles["nav-links"]}`}>
                    <NavLinks
                        activePage={activePage}
                        closeNavbar={closeNavbar}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

export function NavLinks({ activePage, closeNavbar }) {
    return (
        <>
            <Link href="/">
                <a
                    className={`home-nav ${styles["nav-link"]} ${
                        activePage === "home" && styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/");
                    }}
                >
                    HOME
                </a>
            </Link>
            <Link href="/about">
                <a
                    className={`about-nav ${styles["nav-link"]} ${
                        activePage === "about" && styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/about");
                    }}
                >
                    ABOUT
                </a>
            </Link>
            <Link href="/video-editing">
                <a
                    className={`video-editing-nav ${styles["nav-link"]} ${
                        activePage === "video-editing" && styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/video-editing");
                    }}
                >
                    VIDEO EDITING
                </a>
            </Link>
            <Link href="/content-creation">
                <a
                    className={`content-creation-nav ${styles["nav-link"]} ${
                        activePage === "content-creation" &&
                        styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/content-creation");
                    }}
                >
                    CONTENT CREATION
                </a>
            </Link>
            <Link href="/theatre">
                <a
                    className={`theatre-nav ${styles["nav-link"]} ${
                        activePage === "theatre" && styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/theatre");
                    }}
                >
                    THEATRE
                </a>
            </Link>

            <Link href="/contact">
                <a
                    className={`contact-nav ${styles["nav-link"]} ${
                        activePage === "contact" && styles["active-page"]
                    }`}
                    onClick={() => {
                        closeNavbar("/contact");
                    }}
                >
                    CONTACT
                </a>
            </Link>
        </>
    );
}
