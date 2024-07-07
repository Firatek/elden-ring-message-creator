"use client"; // Enables useState, useEffect, and useRef hooks

import React, { useState, useEffect, useRef } from "react";
import Filter from "./filter";
import Message from './message';

const Home = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const [searchText, setSearchText] = useState<string>("");
    const [messageText, setMessageText] = useState<string>("");
    const [renderedButtons, setRenderedButtons] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const handleMount = () => {
            Filter.filterWords();
            Message.getInstance().update();

            if (inputRef.current) {
                inputRef.current.focus();
            }
        };

        handleMount();

        return () => {
            Message.getInstance().onUpdate = null;
        };
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
        Filter.filterWords(value);
    };

    useEffect(() => {
        const handleUpdate = () => {
            setMessageText(Message.getInstance().messageText);
            setRenderedButtons(Message.getInstance().renderedButtons);
        };

        Message.getInstance().onUpdate = handleUpdate;
        Message.getInstance().update();

        return () => {
            Message.getInstance().onUpdate = null;
        };
    }, []);

    return (
        <main className="flex flex-col min-h-screen items-center p-4 lg:p-8 xl:p-12">
            <div id="Header" className="text-center">
                <h1 className="text-6xl title-text">
                    <span style={{ fontSize: '3.33rem' }}>E</span>
                    <span style={{ fontSize: '3rem' }}>lden scrib</span>
                    <span style={{ fontSize: '3.33rem' }}>E</span>
                </h1>
                <h2 className="text-lg body-text">Easily create messages for Elden Ring</h2>
            </div>
            <div className="h-20"></div>
            <div id="Filter input" className="z-10 w-full max-w-5xl flex items-center justify-center body-text text-sm lg:text-base">
                <input
                    id="inputBox"
                    ref={inputRef}
                    type="text"
                    className="inputBox w-full lg:w-96 px-4 py-2 rounded border border-gray-400 focus:border-yellow-400 focus:outline-none"
                    value={searchText}
                    onChange={handleInputChange}
                    placeholder="Filter words"
                />
            </div>
            <div className="h-4"></div>
            <div className="w-full max-w-5xl flex-grow flex flex-col overflow-hidden">
                <div id="wordBank"
                    className="flex justify-between flex-wrap flex-grow overflow-auto"
                    style={{
                        maxHeight: 'calc(100vh - 400px)',
                        borderRadius: 5,
                        backgroundColor: 'rgba(25, 25, 25, .5)',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#d4af37 rgba(0, 0, 0, 0.5)'
                    }}>
                    {/* Placeholder for dynamically added buttons */}
                </div>
            </div>
            <div id="messageContainer"
                className="body-text text-center w-full max-w-5xl p-4 m-4 flex flex-col items-center"
                style={{
                    borderColor: '#dfaf37',
                    borderWidth: '1px',
                    borderStyle: 'solid'
                }}>
                <div>
                    {messageText}
                </div>
                <div className="flex justify-center w-full">
                    {renderedButtons}
                </div>
            </div>
            <div className="body-text mt-auto text-center" style={{ color: "grey", fontSize: '0.8rem' }}>
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
                <br />© 2024 Chris Worcester. All Rights Reserved.
            </div>
        </main>
    );
};

export default Home;
