import React, { useCallback, useState, useEffect, Fragment, useContext } from "react";
import "./User.scss";
import { Provider } from "../context";
import * as R from "ramda";
import context from "./../context";

const User = () => {
    const contextValue = useContext(context);
    const { } = contextValue;
    const userDemoList = [
        {
            userId: "00001",
            userName:"Jessy",
            userPhone:"0933887567"
        },
        {
            userId: "00002",
            userName:"Lance",
            userPhone:"0915881369"
        },
        {
            userId: "00003",
            userName:"Jason",
            userPhone:"0952335647"
        },
    ]
    return (
        <div className={`user_container`}>
            <Provider value={contextValue}>
                <div className="user">
                    <div className="user_data">
                        <div className="user_column_name">
                                <div className="user_column user_id">
                                        使用者id
                                    </div>
                                    <div className="user_column user_name">
                                        使用者名稱
                                    </div>
                                    <div className="user_column user_phone">
                                        電話
                                    </div>
                        </div>
                        {userDemoList.map((userItem, userIndex)=>{
                            return (
                                <div className="each_user" key={userIndex}>
                                    <div className="user_column user_id">
                                        {userItem.userId}
                                    </div>
                                    <div className="user_column user_name">
                                        {userItem.userName}
                                    </div>
                                    <div className="user_column user_phone">
                                        {userItem.userPhone}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Provider>
        </div>
    );
};
export default User;
