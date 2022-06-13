import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import YouTube from "react-youtube";
import styles from "../styles/Content.module.css";

const ReactTwitchEmbedVideo = dynamic(
    () => import("react-twitch-embed-video"),
    { ssr: false }
);

const Content = () => {
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
        <div className={styles["content-page"]}>
            <div
                className={styles["content"]}
                ref={contentRef}
                data-aos="zoom-out"
                data-aos-delay="800"
                data-aos-duration="500"
            >
                <div data-aos="zoom-in">
                    <h1>CONTENT CREATION</h1>
                    <p>
                        Inspired by my favorite YouTubers and streamers, I
                        started to seriously create content online around 2014.
                        Started from the humble stop motion lyric videos to
                        creating video blogs to now live streaming video games,
                        I will always love interacting with my audience who
                        likes my content.
                    </p>

                    <div className={styles["youtube"]}>
                        <h3>YOUTUBE</h3>
                        <p>
                            As a 00s kid, I grew up with the rise of YouTube and
                            the YouTuber era. This inspired me to follow suit,
                            creating videos that you see below.
                        </p>
                        <p>
                            I mostly delved into BookTube, a community in
                            YouTube that focuses on fantasy/fiction novels. This
                            included book challenges and book haul videos. I
                            previously planned on continuing this type of
                            content with book reviews and other new content, but
                            I was also a graduating student at the time.
                        </p>
                        <p>
                            You can find more of my content{" "}
                            <a href="https://www.youtube.com/channel/UCycq9WACc1GY-hKoJs4kYsQ">
                                here
                            </a>{" "}
                            in my YouTube channel!
                        </p>
                        <div className="youtube-cont-wrapper">
                            <div
                                className={styles["youtube-container-1"]}
                                style={{
                                    height: `${
                                        (contentWidth / (16 / 25)) * (9 / 25)
                                    }px`,
                                    width: contentWidth,
                                }}
                            >
                                <YouTube
                                    videoId={"aV6jQr2DRfk"}
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
                    </div>
                </div>
                <div className={styles["twitch"]}>
                    <h3
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="500"
                    >
                        TWITCH
                    </h3>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="500"
                    >
                        <p>
                            When streamers were on the rise during the pandemic
                            and I started to familiarize myself with Twitch, I
                            became inspired to give streaming a shot. Once I
                            learned what I needed, prepared my OBS, Twitch
                            account, and the video game I decided to stream, I
                            hit &apos;Start Streaming&apos;.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="250"
                            data-aos-duration="500"
                        >
                            YouTube and Twitch felt almost the same: talking to
                            a camera/audience passionately about something. The
                            difference is that I go under an alias, Mitch Chase,
                            on Twitch to protect my privacy. And, my content is
                            more on video games than books.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="250"
                            data-aos-duration="500"
                        >
                            It started from &quot;I&apos;m only doing this since
                            I have nothing else to do during this
                            pandemic,&quot; that turned into &quot;I&apos;ve
                            made great friends and a community here on Twitch, I
                            don&apos;t want to stop now!&quot;
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="250"
                            data-aos-duration="500"
                        >
                            Here are some clips from my streams that my
                            community seemed to love. You can find more of these
                            and maybe catch me streaming on my Twitch channel,{" "}
                            <a href="https://www.twitch.tv/sometheatrekid">
                                SomeTheatreKid.
                            </a>
                        </p>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="500"
                        style={{
                            height: `${
                                (contentWidth / (16 / 25)) * (9 / 25)
                            }px`,
                            width: contentWidth,
                        }}
                    >
                        <ReactTwitchEmbedVideo
                            muted={true}
                            video="879444626"
                            layout="video"
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
