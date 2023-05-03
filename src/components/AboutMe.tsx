import img1 from "../assets/jpg's/Lalbag fort with T v3.jpg"

// about me description styles: amd_styles
const amd_styles = {
    paddingLeft: '4%',
    fontFamily: 'times new roman',
    fontSize: '19pt',
}
const about_me: string = "I am a university undergraduate student with Computer Science major. " +
    "Basically, I'm a Full Stack Web Programmer, writes robust & large scaled web applications with Django backend and React frontend. " +
    "I love myself introduce as a Animator and Technical writer also. Expert in LaTeX and Manim(a python library to generate programmatic animations). " +
    "Experienced in JavaFX Desktop Development and it's related technology. " +
    "";

export function AboutMe() {
    // @ts-ignore
    return (
        <div className='mt-3 p-5 text-bg-info d-flex flex-column'>
            <h2 className="text-bg-danger m-auto mb-5 p-2 rounded-3">About Me</h2>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <img
                    src={img1}
                    alt="My Picture"
                    width={300}
                    height={400}
                    style={{border: "3px solid gray"}}
                />
                <p style={amd_styles}>{about_me}</p>
            </div>
        </div>
    );
}