import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./About.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";

const About = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    return (
        <div className={`about_container`}>
            <Provider value={contextValue}>
                <div className="____">
                        About Content
                </div>
            </Provider>
        </div>
    );
};
export default About;
