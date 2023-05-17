import {Header} from "./components/Header";
import {ShowCase} from "./components/ShowCase";
import {Footer} from "./components/Footer";
import {GetInTouch} from "./components/GetInTouch";
import {Skills} from "./components/Skills";
import {AboutMe} from "./components/AboutMe";
import {Achievement} from "./components/Achievement";

function App() {
    return (
        <div>
            <Header/>
            {/* <ShowCase/> */}
            <AboutMe/>
            <Skills/>
            {/* <Achievement/> */}
            <GetInTouch/>
            <Footer/>
        </div>
    )
}

export default App
