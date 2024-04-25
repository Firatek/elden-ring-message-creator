"use client";

import React, { useState, useEffect } from "react";
import { search } from "./search";
import Message from './message';

// Default Home component
export default function Home() {
    // useEffect hook to run code when the component mounts
    useEffect(() => {
        search(""); // Call the search function with an empty string as the initial search value
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    // State to hold the value of the input text
    const [searchText, setSearchText] = useState("");
    // State to hold the message text
    const [messageText, setMessageText] = useState("Your message will appear here.");

    // Function to handle text change in the input box
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update the state with the new text value
        setSearchText(event.target.value);
        // Call the search function with the new text as an argument
        search(event.target.value);
    };

    // useEffect hook to listen for changes in the Message instance
    useEffect(() => {
        // Define a function to update the message text when the Message instance changes
        const updateMessageText = (newMessage: string) => {
            // Update the message text in the state
            setMessageText(newMessage);
        };

        // Set the callback function for message updates
        Message.getInstance().onUpdate = updateMessageText;

        // Remove the callback function when the component unmounts
        return () => {
            Message.getInstance().onUpdate = null;
        };
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <main className="flex min-h-screen flex-col items-center p-24 pb-6">
            {/* Title and description */}
            <h1 className="text-6xl title-text">Elden scribE</h1>
            <h2 className="text-2xl body-text">Easily create messages for Elden Ring</h2>
            {/* Spacer to fill extra vertical space */}
            <div className="flex-grow"></div>
            {/* Container for search text and input box */}
            <div className="z-10 w-full max-w-5xl items-center body-text text-sm lg:flex">
                <div className="mr-4 body-text">Search:</div>
                {/* Input text box with onChange event handler */}
                <input
                    type="text"
                    className="border border-gray-300 px-3 py-1 rounded-md"
                    placeholder="finger"
                    value={searchText}
                    onChange={handleInputChange} // Call handleInputChange function when text changes
                />
            </div>
            {/* Spacer to create distance between elements */}
            <div className="h-4"></div>
            {/* Container for buttons */}
            <div className="w-full max-w-5xl" style={{ height: "400px", overflowY: "auto" }}>
                {/* Container for buttons with vertical scroll */}
                <div id="buttonContainer" className="flex justify-between">
                    {/* Buttons will be dynamically added here */}
                </div>
            </div>
            {/* Display the message text */}
            <div id="messageContainer" className="body-text text-center w-full max-w-5xl border border-gray-300 p-4 m-4">
                {messageText}
            </div>
            {/* Spacer to create distance between elements */}
            <div className="h-4"></div>
            {/* Footer */}
            <div className="body-text" style={{ color: "grey" }}>
                Created by Chris Worcester |{" "}
                <u>
                    <a href="https://www.linkedin.com/in/chrisworcester/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </u>{" "}
                |{" "}
                <u>
                    <a href="https://github.com/ChrisWhisker" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                </u>
            </div>
        </main>
    );
}
