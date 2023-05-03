export function GetInTouch() {
    return (
        <div className="text-bg-success p-5 mt-3">
            <h2>Get in touch</h2>
            <h5>Use <a href="https://formik.org/">Formik</a>.</h5>
            <form>
                <input type="text" placeholder="Name:" className="form-control"/>
                <input type="text" placeholder="Email:" className="form-control"/>
                <input type="text" placeholder="Subject:" className="form-control"/>
                <input type="text" placeholder="Message:" className="form-control"/>
            </form>
        </div>
    );
}