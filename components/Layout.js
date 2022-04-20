import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = ({ children }) => {
    const [isToggled, setIsToggled] = useState(undefined);
    const [activePage, setActivePage] = useState("home");
    const [currentKey, setCurrentKey] = useState("1");

    const router = useRouter();

    function toggleNavbar() {
        if (isToggled === undefined || isToggled === true) {
            setIsToggled(false);
        } else {
            setIsToggled(true);
        }
    }
    function closeNavbar(page) {
        if (page === router.pathname) {
            setIsToggled(false);
        }
    }

    useEffect(() => {
        const date = new Date().getTime();
        setCurrentKey(date);
        toggleNavbar();
        if (router.pathname === "/") {
            setActivePage("home");
            return;
        }

        const page = router.pathname.substring(1);

        const pageEl = document.getElementsByClassName(`${page}-nav`)[0];
        if (pageEl.classList.contains(styles["active-page"])) {
            return;
        }

        setActivePage(page);
    }, [router.pathname]);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className={styles["background-image"]}>
                <Image
                    src="/images/background-image.jpg"
                    alt="Background Image"
                    layout="fill"
                />
            </div>
            <div className={`fade-in fade`} key={currentKey} />
            <Head>
                <title>Patricia's Portfolio</title>
                <meta
                    name="description"
                    content="This is Patricia Bermudez's online portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                activePage={activePage}
                toggleNavbar={toggleNavbar}
                closeNavbar={closeNavbar}
                isToggled={isToggled}
            />
            {isToggled && (
                <MobileNavbar
                    activePage={activePage}
                    toggleNavbar={toggleNavbar}
                    closeNavbar={closeNavbar}
                />
            )}
            <div className={"pages-container"}>{children}</div>
            <Footer isAtHome={activePage === "Home" ? true : false} />
        </>
    );
};

export default Layout;
