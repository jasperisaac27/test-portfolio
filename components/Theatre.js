import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Theatre.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Theatre = () => {
    const [innerWidth, setInnerWidth] = useState(100);

    useEffect(() => {
        function getInnerWidth() {
            var win = window,
                doc = document,
                docElem = doc.documentElement,
                body = doc.getElementsByTagName("body")[0],
                x = win.innerWidth || docElem.clientWidth || body.clientWidth;

            setInnerWidth(x);
        }
        getInnerWidth();
        window.addEventListener("resize", getInnerWidth);

        return () => {
            window.removeEventListener("resize", getInnerWidth);
        };
    }, []);

    const getSlidePercentage = () => {
        if (!innerWidth) {
            return 100;
        } else if (innerWidth >= 1537) {
            return 33.33;
        } else if (innerWidth > 600 && innerWidth < 1537) {
            return 50;
        } else if (innerWidth <= 600) {
            return 100;
        }
    };

    return (
        <div className={styles["content-page"]}>
            <div
                className={styles["content"]}
                data-aos="zoom-out"
                data-aos-delay="800"
                data-aos-duration="500"
            >
                <div data-aos="zoom-in">
                    <h1>THEATRE</h1>
                    <p>
                        Second year of college was when I first started taking
                        interest in theatre. Ever since I was dragged by my best
                        friend to perform La Vie Boheme from the musical RENT in
                        the school cafeteria, theatre has been an important part
                        of my life. ​
                    </p>
                    <p>
                        I applied as an intern in one of the country&apos;s
                        theatre companies, signed up for workshops, and grabbed
                        every opportunity to audition for upcoming shows. ​
                    </p>
                    <p>You can find my theatre journey here!</p>
                </div>
                <div
                    className={styles["stuck-carousel"]}
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="500"
                >
                    <h3>SHORT + SWEET MANILA (2017)</h3>
                    <Carousel
                        renderIndicator={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerMode={true}
                        centerSlidePercentage={getSlidePercentage()}
                        autoPlay={innerWidth <= 1023 ? false : true}
                        showStatus={false}
                        infiniteLoop={true}
                        transitionTime={500}
                    >
                        <Image
                            src="/images/stuck1.jpg"
                            height={250}
                            width={325}
                        />

                        <Image
                            src="/images/stuck2.jpg"
                            height={250}
                            width={325}
                            objectFit={"contain"}
                        />

                        <Image
                            src="/images/stuck3.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/stuck4.JPG"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/stuck6.JPG"
                            height={250}
                            width={325}
                        />
                    </Carousel>
                </div>
                <div
                    className={styles["rent-carousel"]}
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="500"
                >
                    <h3>
                        <span>RENT</span>: School Edition (2019)
                    </h3>
                    <Carousel
                        renderIndicator={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerMode={true}
                        centerSlidePercentage={getSlidePercentage()}
                        autoPlay={innerWidth <= 1023 ? false : true}
                        showStatus={false}
                        infiniteLoop={true}
                        transitionTime={500}
                    >
                        <Image
                            src="/images/rent3.jpg"
                            height={250}
                            width={325}
                            objectFit={"contain"}
                        />
                        <Image
                            src="/images/rent1.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/rent4.jpg"
                            height={250}
                            width={325}
                            objectFit={"contain"}
                        />
                        <Image
                            src="/images/rent2.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/rent5.jpg"
                            height={250}
                            width={325}
                        />
                    </Carousel>
                </div>
                <div
                    className={styles["himala-carousel"]}
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="500"
                >
                    <h3>HIMALA: ISANG MUSIKAL (2019)</h3>
                    <Carousel
                        renderIndicator={false}
                        showIndicators={false}
                        showThumbs={false}
                        centerMode={true}
                        centerSlidePercentage={getSlidePercentage()}
                        autoPlay={innerWidth <= 1023 ? false : true}
                        showStatus={false}
                        infiniteLoop={true}
                        transitionTime={500}
                    >
                        <Image
                            src="/images/himala4.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/himala2.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/himala1.jpg"
                            height={250}
                            width={325}
                        />
                        <Image
                            src="/images/himala3.jpg"
                            height={250}
                            width={325}
                        />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Theatre;
