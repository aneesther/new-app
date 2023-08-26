import { useRouteError } from "react-router-dom";
import "./App.css";
export default function ErrorPage() {
    const error = useRouteError;
    console.error(error);

    return (
        <div id="error-page" className="App">
            <h1>Ooops</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

// create a new react app
// add react-router-to it
// create 4 pages; Home, Sign in, Profile, Error
// create a component; Navbar -all pages have this component as their navbar