import './App.css'

import {Routes, Route, Link, useParams} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/hello/:name"} element={<HelloPage/>}/>
        </Routes>
    );
}

function Homepage() {
    return (
        <div>
            <h1>Homepage</h1>
            <br/>
            <Link to={"/about"}>About</Link>
            <br/>
            <Link to="/index">Inhalt</Link>
            <br/>
            <Link to={"/hello/" + name}>HelloPage</Link>
        </div>
    );
}

function About() {
    return (
        <h1>ABOUT</h1>
    );
}

function HelloPage() {
    const params = useParams();
    const name = params.name;

    return (
        <h1>Hello {name}</h1>
    );
}

export default App
