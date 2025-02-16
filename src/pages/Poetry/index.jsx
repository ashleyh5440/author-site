import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from 'react-bootstrap/Container';

import './styles.css';

function Poetry() {

    useEffect(() => {
        // initialize ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
    
        // ScrollTrigger for each container
        gsap.utils.toArray(".poetry-container").forEach(container => {
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
    })

    return (
        <section id="poetry-page">
            <Container className="poetry-container" id="1">
                <div className="poem">
                    <h4>In the place where we hide our dreams</h4>
                    <br />
                    <p>In the place where we hide our dreams</p>
                    <p>And where our childhood sleeps,</p>
                    <p>In this place there is a land of magic</p>
                    <p>And there our imagination keeps.</p>
                    <p>It’s a wondrous place, this magic land</p>
                    <p>With no pain, no worries, no fear.</p>
                    <p>A place we still go to visit our pasts</p>
                    <p>And the memories we hold dear. </p>
                    <p>This is the place where giants live</p>
                    <p>And where the man in the moon smiles.</p>
                    <p>This is the place we escape to and stay</p>
                    <p>When we want to be away for awhile.</p>
                    <p>Here the trees grow from the sky</p> 
                    <p>And the purple water runs up.</p>
                    <p>Here the grass is silver and red and blue</p>
                    <p>And you drink the clouds from a cup.</p>
                    <p>As we grow we forget out magic,</p>
                    <p>And here is where it stays.</p>
                    <p>It waits for us to come back to it</p>
                    <p>And remember our magic days.</p> 
                </div>
            </Container>
            <Container className="poetry-container" id="2">
                <div className="poem">
                    <h4>My goddess is of many faces</h4>
                    <br />
                    <p>My goddess is of many faces</p>
                    <p>And of only one</p>
                    <p>She is as cruel as she is kind</p>
                    <p>As soft as she is firm</p>
                    <p>As forgiving as she is vengeful</p>
                    <p>She offers me no absolution</p>
                    <p>But she loves me absolutely</p>
                    <p>She desires that I give her nothing</p>
                    <p>Only all that I am</p>
                    <p>Savagery and mercy shine in her eyes</p>
                    <p>Her hands are the shelter and the storm</p>
                    <p>She sings with love and fury</p>
                    <p>She dances with her feet in the earth</p>
                    <p>And her head among the stars</p>
                    <p>She laughs and cries as I do</p>
                    <p>She mourns and celebrates as I do</p>
                    <p>She is mother and child</p>
                    <p>Defender and Defended</p>
                    <p>The beginning and the end</p>
                    <p>She is me</p>
                    <p>And we are one</p>
                </div>
            </Container>
            <Container className="poetry-container" id="3">
                <div className="poem">
                    <h4>My home is one made of glass</h4>
                    <br />
                    <p>My home is one made of glass</p>
                    <p>It rests high in the air</p>
                    <p>Tethered by lightness</p>
                    <p>And countless facets sparkle wondrous</p>
                    <p>Enough to bring tears to the eye</p>
                    <p>Such a thing of miraculous beauty</p> 
                    <p>To hardly be believed</p>
                    <br />
                    <p>My home is one made of glass</p>
                    <p>It rests high in the air</p>
                    <p>Tethered by desperation</p>
                    <p>And infinite sharp edges threaten to pierce</p>
                    <p>Even as they crumble into sand</p>
                    <p>Such a thing of stunning fragility</p>
                    <p>To hardly be believed</p>

                </div>
            </Container>
            <Container className="poetry-container" id="4">
                <div className="poem">
                    <h4>For her</h4>
                    <br />
                    <p>Language alone isn’t enough</p>
                    <p>To make you understand</p>
                    <p>How I feel you.</p>
                    <p>Not just what I feel about you</p>
                    <p>But how I feel you, every day.</p>
                    <p>Like a hand in mine</p>
                    <p>That squeezes three times —</p>
                    <p>One for each word we don’t tell each other enough</p>
                    <p>But mean with our entire being:</p>
                    <p>I love you.</p>
                    <p>Words could never do justice</p>
                    <p>How your smile of gold</p>
                    <p>And the stars in your eyes</p>
                    <p>Wake such joy in me</p>
                    <p>That my soul sings.</p>
                    <p>My tongue could never describe</p>
                    <p>This feeling you inspire in me,</p>
                    <p>The awe I feel when I think of you.</p>
                    <p>I’ve done my best to grow</p>
                    <p>Into someone you could look up to.</p> 
                    <p>I’ve tried to water myself with patience</p>
                    <p>And soak in rays of laughter</p>
                    <p>Like you deserve.</p>
                    <p>I’m a slow bloomer —</p>
                    <p>I’ve only just begun to flower.</p>
                    <p>Still, I hope you’re proud of me.</p>
                    <p>I hope that you can see</p>
                    <p>That it’s for you.</p>
                    <p>Language alone isn’t enough,</p>
                    <p>But it’s all I got to show you</p>
                    <p>That you’re with me.</p>
                    <p>And I’m with you.</p>
                     <p>Always.</p>
                </div>
            </Container>
            <Container className="poetry-container" id="5">
                <div className="poem">
                    <h4>Baby girl with the beautiful mind</h4>
                    <br />
                    <p>Baby girl with the beautiful mind,</p>
                    <p>Remember that you are just as pretty when you speak.</p>
                    <p>Your lips weren’t made just to smile —</p>
                    <p>They were designed to weave prophecies and guide revolutions.</p>
                    <p>The words they shape mold realities.</p>
                    <p>Whether you whisper sweet promises or proclaim bitter truths,</p>
                    <p>Authority flows from your mouth.</p>
                    <br />
                    <p>Baby girl with the powerful body,</p>
                    <p>Remember that your worth goes beyond</p>
                    <p>The life you have the potential to bear.</p>
                    <p>You are not here to give and give and give, but to experience,</p>
                    <p>To live, to love, to accomplish, to fall, to fly</p>
                    <p>Higher than they ever thought you capable of.</p>
                    <p>Wear every inch of yourself unapologetically and let them see your glory.</p>
                    <br />
                    <p>Baby girl with the big dreams,</p>
                    <p>Remember that you are limitless.</p>
                    <p>You contain galaxies worth of promise,</p>
                    <p>Every single star a glittering future at your fingertips.</p>
                    <p>Your possibilities are without end</p>
                    <p>And your majesty is without question.</p>
                </div>
            </Container>
            <Container className="poetry-container" id="6">
                <div className="poem">
                    <h4>Baby boy with the tender arms</h4>
                    <br />
                    <p>Baby boy with the tender arms,</p> 
                    <p>Remember that your power doesn’t come just from your back.</p>
                    <p>You mean more than what you can provide,</p>
                    <p>And in your body is more than strength — there is home.</p>
                    <p>Show them that to be soft is not to be weak</p>
                    <p>And that though men come in all different types,</p>
                    <p>What defines them is their grace.</p>
                    <br />
                    <p>Baby boy with the colorful soul,</p>
                    <p>Remember to drape yourself in every shade</p>
                    <p>And never let them shame you for your vibrance.</p>
                    <p>To deny one is to deny them all,</p>
                    <p>So explore each and every tint and tone.</p>
                    <p>The scope of you expands past any constraints;</p>
                    <p>Let them witness all that you are without restrictions.</p>
                    <br />
                    <p>Baby boy with the boundless ambitions,</p>
                    <p>Remember that you decide your own worth.</p>
                    <p>Success is defined how you choose </p>
                    <p>And goes so much more beyond what you can acquire.</p>
                    <p>You deserve to be blessed and cherished too,</p>
                    <p>And your love is proof of divinity.</p>
                </div>
            </Container>
        </section>
    )
}

export default Poetry;  