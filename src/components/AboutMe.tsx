import img1 from "../assets/jpg's/Lalbag fort with T v3.jpg"

// about me description styles: amd_styles
const amd_styles = {
    paddingLeft: '2rem',
    fontFamily: 'Segoe UI',
    fontSize: '1.4rem',
    fontWeight: '500',
    fontSizeAdjust: '0.6'
}

const main_style = {
    backgroundImage: "url(/code.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundClip: 'border-box',
    backgroundBlendMode: 'multiply'
}

// Bug-p-12: <span>Django & React</span>
const about_me: string = "I am a university undergraduate final year student with Computer Science major. " +
    "Basically, I'm a Full Stack Web Programmer, writes robust and large scaled web applications with Django & React. " +
    "I love to introduce myself as an Animator and Technical writer also, expert in LaTeX and Manim. " +
    "Experienced in JavaFX desktop development and it's related technologies.";

export function AboutMe() {
    // @ts-ignore
    return (
        <div id='aboutme' style={main_style} className='mt-1 p-5 text-bg-light d-flex flex-column'>
            <h1 className="text-bg-danger m-auto mb-5 p-2 rounded-3">About Me</h1>
            <div className="d-flex justify-content-around align-items-center">
                <img
                    src={img1}
                    alt="My Picture"
                    width={300}
                    height={400}
                    style={{border: "3px solid gray"}}
                />
                <p style={amd_styles}
                   className="d-flex flex-wrap px-4 py-2 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">{about_me}</p>
            </div>
        </div>
    );
}