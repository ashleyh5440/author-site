import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import campfire from '../../../public/images/campfire.gif';
import logo from '../../../public/images/logo.png';
import './styles.css';

function Home() {
    const fireFliesContainerRef = useRef(null);
    const totalFireFlies = 50;

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
        // const w = window.innerWidth;
        // const h = window.innerHeight;

        // const Anim = (elm) => {
        //     const containerRect = fireFliesContainerRef.current.getBoundingClientRect();
        //     const containerWidth = containerRect.width;
        //     const containerHeight = containerRect.height;

        //     gsap.to(elm, {
        //         duration: Math.random() * 10 + 10,
        //         x: Math.random() * containerWidth,
        //         y: Math.random() * containerHeight,
        //         opacity: Math.random(),
        //         scale: Math.random() * 0.5 + 1,
        //         delay: Math.random() * 2,
        //         onComplete: () => Anim(elm),
        //     });
        // };

        // const fireFlies = fireFliesContainerRef.current.children;

        // for (let i = 0; i < totalFireFlies; i++) {
        //     const fireFly = fireFlies[i];
        //     gsap.set(fireFly, { opacity: 0 });
        //     Anim(fireFly);
        // }

        // return () => {
        //     for (let i = 0; i < totalFireFlies; i++) {
        //         gsap.killTweensOf(fireFlies[i]);
        //     }
        // };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };    

    return (
        <section className="home-page" style={{minWidth: "100vw"}}>
           {/* <Container className="fireflies-container" ref={fireFliesContainerRef}>
                {Array.from({ length: totalFireFlies }, (_, index) => (
                    <div
                        key={index}
                        className="dot"
                    />
                ))}
                <div id="intro">
                    <div style={{position: "absolute"}}>
                    <img src={logo} style={{width: "8%", marginBottom: "3%"}}/>
                        <h1>NH Akbar</h1>
                    </div>
                    <div id="campfire"><img src={campfire}/></div>
                    <div id="intro-poem">
                            <p>If you are a dreamer, come in</p>
                            <p>If you are a dreamer, a wisher, a liar,</p>
                            <p>A hope-er, a pray-er, a magic bean buyer . . .</p>
                            <p>If you're a pretender, come sit by the fire</p>
                            <p>For we have some flax-golden tales to spin.</p>
                            <p>Come in!</p>
                            <p>Come in!</p>
                            <br />
                            <p style={{fontSize: "12px"}}>Shel Silverstein</p>
                        </div>
                </div>
            </Container> */}
            <Container className="home-container" id="intro">
                <h2 style={{ marginBottom: "8%", textAlign: "center", fontSize: "35px" }}>NH Akbara</h2>
                {/* <Row>
                    <Col id="left">
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
                </Row> */}
                <div id="bio">
                    <p>N.H. Akbara hoards stories like a dragon hoards its treasure — fiercely, obsessively, and with no intention of ever letting go. A lifelong devotee of the strange and unusual, she earned a BA in English Literature from Bloomsburg University and an MFA in Popular Fiction Writing and Publishing from Emerson College in an attempt to give her obsession with dark stories a respectable-sounding pedigree — because apparently, "professional storyteller of the weird and supernatural" was not a real job.</p>
                </div>
            </Container>
            {/* <Container className="home-container" id="poetry" style={{minWidth: "100vw"}}>
                    <h2 style={{textAlign: "center", fontSize: "35px", padding:"3%", marginTop: "15%"}}>Poetry</h2>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <h3>In the place where we hide our dreams</h3>
                            <Button variant="primary"><NavLink to='/poetry#1' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>My goddess is of many faces</h3>
                                <Button variant="primary"><NavLink to='/poetry#2' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>My home is one made of glass</h3>
                                <Button variant="primary"><NavLink to='/poetry#3' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>For her</h3>
                                <Button variant="primary"><NavLink to='/poetry#4' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>Baby girl with the beautiful mind</h3>
                                <Button variant="primary"><NavLink to='/poetry#5' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <h3>Baby boy with the tender arms</h3>
                                <Button variant="primary"><NavLink to='/poetry#6' onClick={() => scrollToSection('1')}>Read</NavLink></Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container> */}
        </section>
    )
}

export default Home;