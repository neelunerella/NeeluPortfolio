import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reading from "./components/Reading";

export default function App() {
    return (
        <main className="text-black bg-white body-font">
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Reading />
            <Contact />
        </main>
    );
}