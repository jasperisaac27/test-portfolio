import React, { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import styles from "../styles/Video.module.css";

const Video = () => {
    const [contentWidth, setContentWidth] = useState(720);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef && contentRef.current) {
            const { clientWidth } = contentRef.current;
            setContentWidth(clientWidth - 60);
        }
    }, [contentRef]);

    useEffect(() => {
        if (contentRef && contentRef.current) {
            function getContentWidth() {
                const { clientWidth } = contentRef.current;
                setContentWidth(clientWidth - 60);
            }
            window.addEventListener("resize", getContentWidth);
            return () => {
                window.removeEventListener("resize", getContentWidth);
            };
        }
    });

    function mouseOver(event) {
        event.target.parentElement.parentElement.parentElement.firstChild.classList.add(
            styles["hovered"]
        );
    }

    function mouseOut(event) {
        event.target.parentElement.parentElement.parentElement.firstChild.classList.remove(
            styles["hovered"]
        );
    }

    function onReady(event, number) {
        const classname = styles[`youtube-container-${number}`];
        const el = document.querySelector(`.${classname}`);
        if (el) {
            setTimeout(() => {
                el.style.opacity = 1;
            }, 1000);
        }

        event.target.setVolume(15);
    }

    const opts = {
        playerVars: { showinfo: 0 },
        width: contentWidth,
        height: (contentWidth / (16 / 25)) * (9 / 25),
    };

    return (
        <div className={styles["video-page"]}>
            <div
                className={styles["video-content"]}
                ref={contentRef}
                data-aos="zoom-out"
                data-aos-delay="800"
                data-aos-duration="500"
            >
                <div data-aos="zoom-in">
                    <h1>VIDEO EDITING</h1>
                    <p>
                        Summer vacation back in high school. That&apos;s when I
                        first dabbled in video editing using Windows Movie
                        Maker, creating my first stop motion lyric video. Since
                        then, I would always volunteer whenever a school project
                        required video editing.
                    </p>
                    <p>
                        This page contains my best editing work from college and
                        personal videos post-graduation. Hover over the videos
                        to know more information about them!
                    </p>
                    <div className={styles["teaser-trailers"]}>
                        <h3>TEASER TRAILERS</h3>
                        <p>
                            In college, I have worked on various video editing
                            projects. Ranging from short films, student
                            documentaries, but mainly on teaser trailers for the
                            school&apos;s theatre organization. These trailers
                            were played on the theatre org&apos;s social media,
                            in-campus televisions, and during the stage shows
                            themselves before the show starts.
                        </p>
                        <div className="youtube-cont-wrapper">
                            <div className={styles["youtube-title"]}>
                                <h2>
                                    Kung Paano Ako Naging Leading Lady | Teaser
                                </h2>
                                <p>
                                    Teaser trailer for Teatro Bedista&apos;s
                                    one-act stage play, &quot;Kung Paano Ako
                                    Naging Leading Lady.&quot;
                                </p>
                                <p>
                                    The concept is to present the show&apos;s
                                    main character, who she is, and where she
                                    works under one minute. The comic
                                    book-looking filter is used in the beginning
                                    to subtly hint that the stage play was
                                    adapted from a comic book with the same name
                                    by Carlo Vergara.
                                </p>
                                <p>
                                    Video created in 2016 using Adobe Premiere
                                    Pro.
                                </p>
                            </div>
                            <div
                                className={styles["youtube-container-1"]}
                                onMouseOver={mouseOver}
                                onMouseOut={mouseOut}
                                style={{
                                    height: `${
                                        (contentWidth / (16 / 25)) * (9 / 25)
                                    }px`,
                                    width: contentWidth,
                                }}
                            >
                                <YouTube
                                    videoId={"DgcTnMdm8Vg"}
                                    className={styles["first-youtube"]}
                                    containerClassName={
                                        styles["first-youtube-container"]
                                    }
                                    opts={opts}
                                    onReady={(event) => {
                                        onReady(event, 1);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="youtube-cont-wrapper">
                            <div className={styles["youtube-title"]}>
                                <h2>Joe Cool: Aplikante Teaser Trailer</h2>
                                <p>
                                    Teaser trailer for Teatro Bedista&apos;s
                                    one-act stage play, &quot;Joe Cool:
                                    Aplikante.
                                </p>
                                <p>
                                    The concept is to showcase the play&apos;s
                                    absurd feel with a handwritten elements, in
                                    an office setting (where the play is set).
                                </p>
                                <p>
                                    Video created in 2016 using Adobe Premiere
                                    Pro.
                                </p>
                            </div>
                            <div
                                className={styles["youtube-container-2"]}
                                onMouseOver={mouseOver}
                                onMouseOut={mouseOut}
                                style={{
                                    height: `${
                                        (contentWidth / (16 / 25)) * (9 / 25)
                                    }px`,
                                    width: contentWidth,
                                }}
                            >
                                <YouTube
                                    videoId={"3MUeiNljqAE"}
                                    className={styles["second-youtube"]}
                                    containerClassName={
                                        styles["second-youtube-container"]
                                    }
                                    opts={opts}
                                    onReady={(event) => {
                                        onReady(event, 2);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["promotional-ads"]}>
                    <h3
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        PROMOTIONAL ADS
                    </h3>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        My high school best friend became my first client for
                        creating promotional video advertisements for their
                        coffee business&apos; social media. While they ended up
                        not using them, my friend told me that they liked the
                        videos I made for them.
                    </p>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        They did not ask for anything specific, but suggested
                        recipe videos using their product. That is exactly what
                        I did, and even added a B-roll video. You can find 2 of
                        my videos for them below.
                    </p>
                    <div
                        className="youtube-cont-wrapper"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        <div className={styles["youtube-title"]}>
                            <h2>Rainy Weather B-roll</h2>
                            <p>B-roll video for Siete Baracos Coffee.</p>
                            <p>Video created in 2020 using Kdenlive.</p>
                        </div>
                        <div
                            className={styles["youtube-container-3"]}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            style={{
                                height: `${
                                    (contentWidth / (16 / 25)) * (9 / 25)
                                }px`,
                                width: contentWidth,
                            }}
                        >
                            <YouTube
                                videoId={"7i1gsv8gR1Q"}
                                className={styles["third-youtube"]}
                                containerClassName={
                                    styles["third-youtube-container"]
                                }
                                opts={opts}
                                onReady={(event) => {
                                    onReady(event, 3);
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="youtube-cont-wrapper"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        <div className={styles["youtube-title"]}>
                            <h2>Cinammon Roll Latte Recipe</h2>
                            <p>
                                Cinammon Roll Latte recipe made for the social
                                media of Siete Baracos Coffee.
                            </p>
                            <p>Video created in 2020 using Kdenlive.</p>
                        </div>
                        <div
                            className={styles["youtube-container-4"]}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            style={{
                                height: `${
                                    (contentWidth / (16 / 25)) * (9 / 25)
                                }px`,
                                width: contentWidth,
                            }}
                        >
                            <YouTube
                                videoId={"yFHHnR6KvmY"}
                                className={styles["fourth-youtube"]}
                                containerClassName={
                                    styles["fourth-youtube-container"]
                                }
                                opts={opts}
                                onReady={(event) => {
                                    onReady(event, 4);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles["other-content"]}>
                    <h3
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        OTHER CONTENT
                    </h3>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        Below are other videos I have made! Hover over each
                        video to know more information about them.
                    </p>
                    <div
                        className="youtube-cont-wrapper"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        <div className={styles["youtube-title"]}>
                            <h2>Sarsa Productions official trailer</h2>
                            <p>
                                The official introduction video for the Filipino
                                streamer group known as Sarsa Productions.
                            </p>
                            <p>
                                Video is comprised of clips from previous
                                streams, and certain videos that has inside
                                jokes from the group.
                            </p>
                            <p>Video created in 2021 using DaVinci Resolve.</p>
                        </div>
                        <div
                            className={styles["youtube-container-5"]}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            style={{
                                height: `${
                                    (contentWidth / (16 / 25)) * (9 / 25)
                                }px`,
                                width: contentWidth,
                            }}
                        >
                            <YouTube
                                videoId={"F1e9BDkMG_Y"}
                                className={styles["fifth-youtube"]}
                                containerClassName={
                                    styles["fifth-youtube-container"]
                                }
                                opts={opts}
                                onReady={(event) => {
                                    onReady(event, 5);
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="youtube-cont-wrapper"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        <div className={styles["youtube-title"]}>
                            <h2>
                                Seasons of Love by the cast of Atlantis
                                Theatrical&apos;s RENT: School Edition
                            </h2>
                            <p>
                                Celebrating a year after their closing show, the
                                cast of RENT: School Edition decides to create a
                                video of them singing Seasons of Love.
                            </p>
                            <p>Video created in 2020 using Kdenlive.</p>
                        </div>
                        <div
                            className={styles["youtube-container-6"]}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            style={{
                                height: `${
                                    (contentWidth / (16 / 25)) * (9 / 25)
                                }px`,
                                width: contentWidth,
                            }}
                        >
                            <YouTube
                                videoId={"Fvt12DVyw58"}
                                className={styles["sixth-youtube"]}
                                containerClassName={
                                    styles["sixth-youtube-container"]
                                }
                                opts={opts}
                                onReady={(event) => {
                                    onReady(event, 6);
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="youtube-cont-wrapper"
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        <div
                            className={styles["youtube-container-7"]}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                            style={{
                                height: `${
                                    (contentWidth / (16 / 25)) * (9 / 25)
                                }px`,
                                width: contentWidth,
                            }}
                        >
                            <YouTube
                                videoId={"VuJkctIQEzM"}
                                className={styles["seventh-youtube"]}
                                containerClassName={
                                    styles["seventh-youtube-container"]
                                }
                                opts={opts}
                                onReady={(event) => {
                                    onReady(event, 7);
                                }}
                            />
                        </div>
                    </div>
                    <p>
                        You can find more edited videos of mine in the Content
                        section of the website. Thank you! ​
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Video;
