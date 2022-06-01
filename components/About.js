import React from "react";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles["about-page"]}>
            <div
                className={styles["about-content"]}
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-delay="800"
            >
                <h1>Patricia Bermudez</h1>
                <p>
                    Hey! I&apos;m a Communication and Media Studies graduate
                    from San Beda College - Alabang. Recently, I have been
                    focusing on{" "}
                    <b>video editing, content creation, and stage acting.</b>
                </p>
                <div className={styles["video-and-content"]}>
                    <h3>Video Editing & Content Creation</h3>

                    <p>
                        Ever since college, I have been the video editor for
                        every group project; even in the school&apos;s theatre
                        organization I was in! Short films and trailers for
                        theatre shows were my best work in school.
                    </p>
                    <p>
                        Recently, however, I have not been editing a lot of
                        videos. Not until one of my best friends, whose family
                        owns a coffee business, approached me to do some
                        promotional video ads for their social media.
                    </p>
                    <p>
                        As for content creation, I tried my luck with creating
                        content for YouTube back when the YouTuber era was on
                        the rise in 2014. Inspired by my favorite YouTube
                        vloggers, I decided to also create funny video content.
                        And when I discovered a group of vloggers called
                        BookTubers, I decided to follow along that path as well
                        since I also loved reading a lot of fantasy/fiction
                        novels at that time. But with the pressure as a
                        graduating college student plus the president of the
                        school&apos;s theatre organization at the time, I did
                        not get to follow through.
                    </p>
                    <p>
                        Right now, I have been more focused on creating content
                        as a small streamer on Twitch. While most of the content
                        isn&apos;t planned like when I did YouTube, playing
                        video games and interacting with a live audience seems
                        better for my style. I have been getting my video
                        editing flow back by editing funny clip compilations and
                        social media posts with my fellow streamers.
                    </p>
                    <p>
                        You can find my best work in the{" "}
                        <Link href="/video-editing">
                            <a className={styles["video-link"]}>
                                Video Editing
                            </a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/content-creation">
                            <a className={styles["content-link"]}>
                                Content Creation
                            </a>
                        </Link>{" "}
                        section of the website.
                    </p>
                </div>
                <div
                    className={styles["stage"]}
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    <h3>Stage Acting</h3>
                    <p>
                        My calling for the theatre arts started in college.
                        There is this feeling of bliss and fulfillment whenever
                        I perform on stage, and doing theatre has made me
                        realize that this is what I have always wanted to do.
                        One of the upperclassmen appointed me to be the
                        secretary of the school&apos;s theatre organization, and
                        everything that made me want to pursue theatre started
                        on from there.
                    </p>
                    <p>
                        I have been active in the Philippine Theatre scene since
                        I interned for 9 Works Theatrical in 2017. Funny story,
                        while I was an intern for one of the Musical Theatre
                        Workshop for Teens, only a few signed up for the class.
                        So the teachers decided to take us, the interns, for the
                        class as well. Since then, after I graduated, I joined
                        in musical theatre workshops and connected with people
                        in the theatre world.
                    </p>

                    <p className={styles["thank-you"]}>
                        Thank you for visiting!
                    </p>
                </div>

                <div className={styles["images-container"]}>
                    <div
                        className={styles["image-container"]}
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        <a href="https://www.youtube.com/channel/UCycq9WACc1GY-hKoJs4kYsQ">
                            <div className={styles["hover-text"]}>
                                <h2>YouTube</h2>
                                <p>
                                    Screenshot from &quot;HELLO AGAIN,
                                    GUYS!&quot; video on her YouTube channel
                                </p>
                            </div>
                            <img src="images/yt-ss.png" />
                        </a>
                    </div>
                    <div
                        className={styles["image-container"]}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <div className={styles["hover-text"]}>
                            <h2>Twitch</h2>
                            <p>Screenshot from a clip during a Twitch stream</p>
                            <p>
                                Patricia goes under the name of &quot;Mitch
                                Chase&quot; in her Twitch channel called
                                SomeTheatreKid
                            </p>
                        </div>
                        <a href="https://www.twitch.tv/sometheatrekid">
                            <img src="images/twitch-ss.png" />
                        </a>
                    </div>
                    <div
                        className={styles["image-container"]}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="400"
                    >
                        <img src="images/theatre-stage.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
