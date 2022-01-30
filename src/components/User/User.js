import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./User.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";

const User = () => {
    const contextValue = useContext(context);
    const { } = contextValue;

    return (
        <div className={`user_container`}>
            <Provider value={contextValue}>
                <div className="user">
                    User Page
                </div>
            </Provider>
        </div>
    );
};
export default User;
