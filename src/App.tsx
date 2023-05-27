import {Hero} from "./components/Hero";
import {ShowCase} from "./components/ShowCase";
import {Footer} from "./components/Footer";
import {GetInTouch} from "./components/GetInTouch";
import {Skills} from "./components/Skills";
import {AboutMe} from "./components/AboutMe";
import {Achievement} from "./components/Achievement";
import {ProgressBar} from "./components/ProgressBar";
import {Testimonials} from "./components/Testimonials";
import {TopNav} from "./components/TopNav";

function App() {
    return (
        <div>
            {/*<TopNav/>*/}
            {/*<ProgressBar/>*/}
            <Hero/>
            {/* <ShowCase/> */}
            <AboutMe/>
            <Skills/>
            {/* <Achievement/> */}
            {/*<Testimonials/>*/}
            <GetInTouch/>
            <Footer/>
        </div>
    )
}

export default App
