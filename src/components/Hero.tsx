import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Typed from 'typed.js'

import '../stylesheets/header.css'

const more_about_me_styles = {
    marginTop: "18%",
    marginBottom: "3%",
    paddingInline: "8%",
}

export function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(
            el.current, {
                strings: [
                    'Fullstack web programmer. ',
                    'JavaFX desktop developer. ',
                    'Manim animator. ',
                    'UI/UX designer. ',
                    'React developer. ',
                    'Django expert. ',
                    'Full Stack Web Programmer. ',
                ],
                startDelay: 1000,
                typeSpeed: 70,
                showCursor: true,
                // cursorChar: '✏',
                shuffle: false,
                fadeOut: false,
                smartBackspace: true,
            }
        );

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div id='header' className="text-left text-bg-primary text-wrap" style={{padding: "20%"}}>
            <motion.div
                initial={{x: '-100vw', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{delay: 1, duration: 0.8, type: "spring", stiffness: 110}}
            >
                <h1>
                    Hello, my name is <span className="text-bg-dark p-1">Sofiullah Iqbal Kiron</span>
                </h1>
                <h2>I'm the <span ref={el}/></h2>
            </motion.div>

            <a
                id='aboutmelink'
                style={more_about_me_styles}
                href="#aboutme"
                className='butn butn__new'
            >
                More
            </a>
        </div>
    );
}
