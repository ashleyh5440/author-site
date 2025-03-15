import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


import logo from '../../../public/images/logo.png';
import tsd from '../../../public/images/tsd-cover.jpg';
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

        
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };    

    return (
        <section className="home-page" style={{minWidth: "100vw"}}>
            <div style={{display: "flex", justifyContent: "center", paddingTop: "80px"}}>
                <img src={logo} style={{width: "180px"}}/>
            </div>
            <Container className="home-container" id="works">
                <div id="works-box">
                    <Row>
                        <Col><img src={tsd}/> </Col>
                        <Col xs={6}>back cover blurd goes here!!!!!!!!!!!!!!!!!!</Col>
                    </Row>
                </div>
            </Container>
            <Container className="home-container" id="intro">
                <h2 style={{ marginBottom: "8%", textAlign: "center", fontSize: "35px" }}>NH Akbara</h2>
               
                <div id="bio">
                    <p>N.H. Akbara hoards stories like a dragon hoards its treasure — fiercely, obsessively, and with no intention of ever letting go. A lifelong devotee of the strange and unusual, she earned a BA in English Literature from Bloomsburg University and an MFA in Popular Fiction Writing and Publishing from Emerson College in an attempt to give her obsession with dark stories a respectable-sounding pedigree — because apparently, "professional storyteller of the weird and supernatural" was not a real job.</p>
                </div>
            </Container>
        </section>
    )
}

export default Home;