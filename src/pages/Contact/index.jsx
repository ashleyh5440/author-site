import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container } from 'react-bootstrap';

import './styles.css';

function Contact() {
    const fireFliesContainerRef = useRef(null);
    const totalFireFlies = 30;

    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        const Anim = (elm) => {
            const containerRect = fireFliesContainerRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            const elmRect = elm.getBoundingClientRect();
            const elmWidth = elmRect.width;
            const elmHeight = elmRect.height;

            gsap.to(elm, {
                duration: Math.random() * 10 + 10,
                x: Math.random() * (containerWidth - elmWidth),
                y: Math.random() * (containerHeight - elmHeight),
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
    }, [])

    return (
        <section style={{minWidth: "100vw", position: "relative"}}className="">
            <Container className="fireflies-container" ref=
            {fireFliesContainerRef}>
                {Array.from({ length: totalFireFlies }, (_, index) => (
                    <div
                        key={index}
                        className="dot"
                    />
                ))}
                <div className="contact-info">
                    <p style={{fontFamily: "Cedarville Cursive", fontSize: "40px", color: "white"}}>Email <a href="nhakbarspeaks@gmail.com">nhakbarspeaks@gmail.com</a></p>
                </div>
            </Container>
        </section>
    )
};

export default Contact;