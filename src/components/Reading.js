import React from "react";
import {BookOpenIcon, ClipboardDocumentCheckIcon} from "@heroicons/react/solid";
import {reading} from "../data";

export default function Reading() {
    return (
        <section id="reading">
            <div className="container px-5 py-10 mx-auto text-center">
                <BookOpenIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Currently Reading
                </h1>
                <div className="flex flex-wrap m-4">
                    {reading.map((currReading) => (
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                <ClipboardDocumentCheckIcon/>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}