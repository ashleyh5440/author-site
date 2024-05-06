function Home() {
    const fireFliesContainerRef = useRef(null);
    const totalFireFlies = 80;

    useEffect(() => {
        // initialize ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger for each container
        gsap.utils.toArray(".home-container").forEach(container => {
            gsap.from(container, {
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom-=100',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse', 
                },
                opacity: 0,
                y: 100,
                duration: 1,
            });
        });

        // Firefly animation
        const w = window.innerWidth;
        const h = window.innerHeight;

        const Anim = (elm) => {
            gsap.to(elm, {
                duration: Math.random() * 20 + 10,
                x: Math.random() * w,
                y: Math.random() * h,
                opacity: Math.random(),
                scale: Math.random() * 0.5 + 1,
                delay: Math.random() * 2,
                onComplete: () => Anim(elm),
            });
        };

        const fireFlies = fireFliesContainerRef.current.children;

        for (let i = 0; i < totalFireFlies; i++) {
            const fireFly = fireFlies[i];
            gsap.set(fireFly, { opacity: 0 });
            Anim(fireFly);
        }

        return () => {
            for (let i = 0; i < totalFireFlies; i++) {
                gsap.killTweensOf(fireFlies[i]);
            }
        };
    }, []);

    return (
        <section className="home-page">
            <div className="fireflies-container" ref={fireFliesContainerRef}>
                {Array.from({ length: totalFireFlies }, (_, index) => (
                    <div
                        key={index}
                        className="dot"
                        style={{
                            top: `${Math.random() * 100}vh`,
                            left: `${Math.random() * 100}vw`,
                        }}
                    />
                ))}
            </div>
            <div className="content">
                <Container className="home-container" id="intro">
                    <h1>NH Akbar</h1>
                    <div id="intro-poem">
                        <p>If you are a dreamer, come in</p>
                        <p>If you are a dreamer, a wisher, a liar,</p>
                        <p>A hope-er, a pray-er, a magic bean buyer...</p>
                        <p>If you're a pretender, come sit by the fire</p>
                        <p>For we have some flax-golden tales to spin.</p>
                        <p>Come in!</p>
                        <p>Come in!</p>
                    </div>
                    <div id="intro-image"><img src={campfire}/></div>
                </Container>
                <Container className="home-container" id="novel" >
                    <h2 style={{ marginBottom: "8%", textAlign: "center", fontSize: "35px" }}>Coming Soon</h2>
                    <Row>
                        <Col>
                            <div id="book-cover">
                                <h3>Their Savage Daughters</h3>
                            </div>
                        </Col>
                        <Col xs={6} id="blurb">
                            <p>Rana Nari has spent the majority of her life as a slave. Abducted from her homeland and forced into subjugation, the magic that lives within Rana is buried and diminished. But a single spark can start an inferno. An act of defiance escalates until Rana is a fugitive marked for death. Determined to survive, Rana has no intention of being captured ever again.</p>
                            <br />
                            <p>Oni Machawi was born of a magically powerful bloodline. Her magic is as rare as it is feared, and that fear often morphs into hatred meant to intimidate and subdue. But Oni has never been cowed by others. When a foreign prince offers her a proposition she cannot refuse, Oni accompanies him to the kingdom responsible for the malice her kind face. A tragedy upheaves the fragile order and reveals secrets thousands had been killed for. Poised to avenge those butchered, Oni vows to keep that number from growing by any means.</p>
                            <br />
                            <p>As atrocities mount and blood is shed, Rana and Oni become positioned to change the fate of their people. To do so, they must answer one question: is freedom worth the risk of total eradication?</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="home-container" id="poetry">
                    <h2 style={{textAlign: "center", fontSize: "35px", padding:"3%" }}>Poetry</h2>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <h3>In the place where we hide our dreams</h3>
                            <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>My goddess is of many faces</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>My home is one made of glass</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>With low and seductive tones he calls</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>I think it's funny</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>For her</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>Baby girl with the beautiful mind</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>Baby boy with the tender arms</h3>
                                <Button variant="primary">Read</Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
        </section>
    );
}

export default Home;



h1 {
    font-family: "Cedarville Cursive", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 60px;
    color: white;
}

.home-page {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0%;
}

/* .fireflies-container {
    position: absolute;
    min-width: 95vw;
    min-height: 100vh;
    overflow: hidden;
} */

.dot {
    width: 4px;
    height: 4px;
    background-color: #f0d20c;
    box-shadow: 0px 0px 11px 4px #f0d20c;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
}

.content {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    /* width: 98vw; */
    /* width: 100%; */
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box;
    border: 2px solid green;
}

/* .container {
    width: 100% !important;
} */

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100% !important;
    /* width: 100vw !important; */
    height: 98vh;
    margin: 0 !important;
    padding: 0;
    border: 2px solid blue;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.carousel {
    width: 70%;
    height: 800px;
}

.carousel-item {
    width: 100%;
    height: 60vh;
    background-color: rgba(0, 0, 0, 0.152);
}

.carousel-caption {
    height: 75vh;
    padding-top: 12%;
    text-align: center;
}

.carousel-caption h3 {
    margin-top: 50%;
    margin-bottom: 7%;
    /* font-family: "Cedarville Cursive", cursive; */
    font-size: 25px;
}

.carousel-caption button {
    border: none;
    background-color: rgb(214, 0, 86);
    padding: 4% 9%;
    font-size: 20px;
}

.carousel-caption button:hover, .carousel-caption button:active, .carousel-caption button:focus {
    border: none;
    background-color: rgb(162, 1, 65) !important;
    padding: 4% 9%;
    font-size: 20px;
}


.carousel-indicators {
    display: none;
}

#intro {
    width: 100%;
    text-align: center;
    margin-top: 10%;
}

#intro-image {
    margin-top: 5%;
    height: 600px;
}

#intro-image img {
    width: 65%;
}

#intro-poem {
    position: absolute;
    margin-top: 33%;
    font-size: 24px;
    color: white;
}

#novel {
    width: 80%;
    margin-top: 8%;
}

#book-cover {
    width: 400px;
    height: 515px;
    padding: 0%;
    background-image: url("../../../public/images/tsd-cover.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

#book-cover h3 {
    font-family: "Almendra", serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
    font-size: 30px;
    color: white;
    margin-top: 8%;
}

#blurb {
    width: 50%;
    line-height: 1.6;
}

#poetry {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
    /* width: 100%; */
    width: 100vw !important;
    height: 90vh;
    background-image: url("../../../public/images/poetry.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}


