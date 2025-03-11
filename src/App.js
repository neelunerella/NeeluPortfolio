import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Reading from "./components/Reading";

export default function App() {
    return (
        <main className="text-black bg-white body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
}


/*function App() {
    return (
        <div>
            <h1>Hello, Neelu!</h1>
            <p>Your React App is working.</p>
        </div>
    );
}

export default App;*/