import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import Typed from 'typed.js'

import '../stylesheets/header.css'

const more_about_me_styles = {
    marginTop: "18%",
    marginBottom: "3%",
    paddingInline: "8%",
}

export function Header() {
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
                    'Django expert',
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
                initial={{opacity: 0, scale: 0.1, rotate: 60}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{delay: 0.2, duration: 0.8, type: "spring"}}
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
