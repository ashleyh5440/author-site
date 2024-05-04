import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

function Home() {
    //firefly background animation
    const fireFliesContainerRef = useRef(null);
    const totalFireFlies = 40;

    useEffect(() => {
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
        <section id="home-page">
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
                <h1>NH Akbar</h1>
                <Container style={{marginTop: "8%"}}>
                <Row>
                    <Col id="book-cover">
                        <div>Their Savage Daughters</div>
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
            </div>
        </section>
    );
}

export default Home;