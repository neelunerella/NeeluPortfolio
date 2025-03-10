import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md-mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                        Hi, I'm Neelu! 
                        <br className="hidden lg:inline-block" /> I am passionate about developing the future of AI.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Most of my experience lies in AI, Machine Learning, and Data Science, but I am also interested in 
                        software engineering. I love to work with Robots and would love to work in astronomy/astrophysics.
                        I'm currently applying for a graduate CS program for Fall 2025 in order to improve my AI skills. 
                        Feel free to look through my portfolio and see my work, skills, projects, and reading lists!
                    </p>
                    <div className="flex justify-center">
                        <a
                        href="#contact"
                        className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="'./Portfolio Picture.JPG'"
                    />
                </div>
            </div>
        </section>
    );
}