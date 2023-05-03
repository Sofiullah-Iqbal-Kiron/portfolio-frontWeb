import {Project} from "./Project";

export function ShowCase() {
    return (
        <div>
            <h1>Show Cases</h1>
            <Project count={1}/>
            <Project count={2}/>
        </div>
    );
}