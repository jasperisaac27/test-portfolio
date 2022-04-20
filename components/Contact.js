import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    const [contentWidth, setContentWidth] = useState(720);
    const [openForm, setOpenForm] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const formRef = useRef(null);
    const contentRef = useRef(null);

    function toggleForm() {
        setOpenForm((prevState) => !prevState);
    }

    function onChangeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    const handleEnter = (event) => {
        if (event.key.toLowerCase() === "enter") {
            const form = event.target.form;
            const index = [...form].indexOf(event.target);
            form.elements[index + 1].focus();
            event.preventDefault();
        }
    };

    async function onFormSubmit(event) {
        event.preventDefault();
        if (
            formData.user_name === "" ||
            formData.user_email === "" ||
            !formData.user_email.includes("@") ||
            !formData.user_email.includes(".")
        ) {
            return;
        }
        emailjs
            .sendForm(
                "service_jdflsmc",
                "template_sfnllmx",
                formRef.current,
                "olcE6UzaLBrS-MIXl"
            )
            .then(
                (result) => {
                    // console.log(result);
                    // console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    useEffect(() => {
        if (contentRef && contentRef.current) {
            const { clientWidth } = contentRef.current;
            setContentWidth(clientWidth * 0.6);
        }
    }, [contentRef]);

    useEffect(() => {
        if (contentRef && contentRef.current) {
            function getContentWidth() {
                const { clientWidth } = contentRef.current;
                setContentWidth(clientWidth * 0.6);
            }
            window.addEventListener("resize", getContentWidth);
            return () => {
                window.removeEventListener("resize", getContentWidth);
            };
        }
    });

    return (
        <div className={styles["contact-page"]}>
            <div
                className={styles["contact-content"]}
                ref={contentRef}
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="800"
            >
                <div className={styles["contact-header"]}>
                    <div className={styles["contact-info"]}>
                        <h2>Contact Me!</h2>
                        <div className={styles["details"]}>
                            <p>patb.bermudez@gmail.com</p>{" "}
                            <p>Tel: 0916 674 5852</p>
                        </div>

                        <div>
                            <span>Need to tell me something?</span>
                            <button onClick={toggleForm}>
                                {openForm ? "Open" : "Close"} Form
                            </button>
                        </div>
                    </div>

                    <div
                        className={styles["img-wrapper"]}
                        style={{
                            width: contentWidth,
                            height: `${
                                (contentWidth / (16 / 25)) * (20 / 25)
                            } px`,
                        }}
                    >
                        <div className={styles["img-bc"]}></div>
                        <img src="/images/yt-ss.png" />
                        <form
                            id="form"
                            className={`${styles["form"]} ${
                                !openForm && styles["show-form"]
                            }`}
                            onSubmit={onFormSubmit}
                            ref={formRef}
                        >
                            <h3>Name *</h3>
                            <input
                                type="text"
                                onChange={onChangeHandler}
                                onKeyDown={handleEnter}
                                name="user_name"
                                value={formData.name}
                            />
                            <h3>Email *</h3>
                            <input
                                type="email"
                                onChange={onChangeHandler}
                                onKeyDown={handleEnter}
                                name="user_email"
                                value={formData.email}
                            />
                            <h3>Subect</h3>
                            <input
                                type="text"
                                onChange={onChangeHandler}
                                onKeyDown={handleEnter}
                                name="subject"
                                value={formData.subject}
                            />
                            <h3>Message</h3>
                            <input
                                onChange={onChangeHandler}
                                name="message"
                                value={formData.body}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
