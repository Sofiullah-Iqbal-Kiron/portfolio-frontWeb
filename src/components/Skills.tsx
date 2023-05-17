import {Skill} from "./Skill";

import c_logo from "../assets/svg's/C.svg"
import cpp_logo from "../assets/svg's/C++.svg"
import java_logo from "../assets/svg's/java.svg"
import fxml_logo from "../assets/svg's/XML.svg"
import javafx_logo from "../assets/png's/JavaFX_Logo.png"
import python_logo from "../assets/svg's/python-3.svg"
import typescript_logo from "../assets/svg's/typescript.svg"
import html_logo from "../assets/svg's/html-5.svg"
import css_logo from "../assets/svg's/css-3.svg"
import mysql_logo from "../assets/svg's/mysql.svg"
import photoshop_logo from "../assets/svg's/adobe-photoshop.svg"
import latex_logo from "../assets/svg's/latex.svg"
import git_logo from "../assets/svg's/git.svg"
import django_logo from "../assets/svg's/django-icon.svg"
import react_logo from "../assets/svg's/react.svg"
import manim_logo from "../assets/svg's/manim.svg"
import docker_logo from "../assets/svg's/docker.svg"

export function Skills() {
    const styles = {
        paddingTop: '10%',
        paddingBottom: '10%',
    };

    const skills = [
        {
            'name': 'C',
            'logo': c_logo,
            'description': 'General purpose programming language. Very fast, widely used over the world',
            'homepage': 'https://www.iso.org/standard/74528.html',
        },
        {
            'name': 'C++',
            'logo': cpp_logo,
            'description': 'An extension of C, introduces Object Oriented Programming paradigm',
            'homepage': 'https://isocpp.org/',
        },
        {
            'name': 'Java',
            'logo': java_logo,
            'description': 'High level, object oriented, machine independent, robust programming language',
            'homepage': 'https://www.java.com/',
        },
        {
            'name': 'JavaFX',
            'logo': javafx_logo,
            'description': 'Next generation rich client application platform for desktop, mobile & embedded systems built on Java',
            'homepage': 'https://openjfx.io/',
        },
        {
            'name': 'FXML',
            'logo': fxml_logo,
            'description': 'Extended XML used to design JavaFX applications UI in gluon scene builder',
            'homepage': 'https://docs.oracle.com/javafx/2/get_started/fxml_tutorial.htm',
        },
        {
            'name': 'Python',
            'logo': python_logo,
            'description': 'High level programming language build to obtain more conciseness and better readability. Widely used for machine learning and data science',
            'homepage': 'https://www.python.org/',
        },
        {
            'name': 'TypeScript',
            'logo': typescript_logo,
            'description': 'JavaScript with syntax for types',
            'homepage': 'https://www.typescriptlang.org/',
        },
        {
            'name': 'HTML',
            'logo': html_logo,
            'description': 'Hyper Text Markup Language for web pages',
            'homepage': 'https://html.spec.whatwg.org/',
        },
        {
            'name': 'CSS',
            'logo': css_logo,
            'description': 'Cascading Style Sheet, style DOM elements',
            'homepage': 'https://www.w3.org/TR/CSS/#css-official',
        },
        {
            'name': 'MySQL',
            'logo': mysql_logo,
            'description': 'Software implementation of Relational Database Management Systems',
            'homepage': 'https://www.mysql.com/',
        },
        {
            'name': 'Adobe Photoshop',
            'logo': photoshop_logo,
            'description': 'Popular photo editing software built by Adobe',
            'homepage': 'https://www.adobe.com/products/photoshop.html',
        },
        {
            'name': 'LaTeX',
            'logo': latex_logo,
            'description': 'Markup language or typesetting system used for rendering communication & publication of scientific documents',
            'homepage': 'https://www.latex-project.org/',
        },
        {
            'name': 'Git',
            'logo': git_logo,
            'description': 'A distributed Version Control System, free and open source',
            'homepage': 'https://git-scm.com/',
        },
        {
            'name': 'Django',
            'logo': django_logo,
            'description': 'Python web application framework for perfectionists with deadlines',
            'homepage': 'https://www.djangoproject.com',
        },
        {
            'name': 'React',
            'logo': react_logo,
            'description': 'Javascript library to build user interfaces',
            'homepage': 'https://react.dev/',
        },
        {
            'name': 'Manim',
            'logo': manim_logo,
            'description': 'A community maintained Python library for creating mathematical and svg animations',
            'homepage': 'https://www.manim.community/',
        },
        {
            'name': 'Docker',
            'logo': docker_logo,
            'description': 'Software utility that allows developers to build, containerize and ship applications faster',
            'homepage': 'https://www.docker.com/',
        },
    ];

    return (
        <div className='d-flex flex-column align-items-center mt-1 py-5'>
            <h3>Technical Skills</h3>
            <div style={styles} className='d-flex justify-content-center flex-wrap'>
                {
                    skills.map(skill =>
                        <Skill
                            name={skill.name}
                            logo={skill.logo}
                            description={skill.description}
                            homepage={skill.homepage}
                        />
                    )
                }
            </div>
        </div>
    );
}