import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Message, ArrowBackIos } from "@material-ui/icons";

const Styles = styled.div`
    .navdiv {
        background-image: linear-gradient(
            to right top,
            #d16ba5,
            #ce74af,
            #ca7cb9,
            #c785c2,
            #c38dc9,
            #ba9adb,
            #aea6ea,
            #a0b3f6,
            #7dc8ff,
            #57dbff,
            #44ecff,
            #5ffbf1
        );
        font-family: Montserrat;
        height: 80px;
        display: flex;
        align-items: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 800;
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .logo:hover {
        cursor: pointer;
    }

    a {
        color: #f1f1f1;
        font-weight: 500;
        text-decoration: none;
        padding: 10px;
        svg {
            width: 2.5rem;
            height: 2.5rem;
            transition: 0.3s;
            fill: #f1f1f1;
        }
    }

    a:hover {
        cursor: pointer;
    }

    .message-button {
        position: fixed;
        right: 10px;
        color: white;
    }
    .back-button {
        position: fixed;
        left: 10px;
        color: white;
    }
`;

const Header = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(history);
    const back = (path) => {
        if (path == "/chat") {
            // if (
            //     history.location.state &&
            //     history.location.state.pathname == "/messages"
            // ) {
            //     console.log("yes");
            //     history.push("/messages");
            // } else {
            history.goBack();
        } else {
            history.push("/");
        }
    };
    return (
        <Styles>
            <div className="navdiv">
                {(location.pathname == "/chat" ||
                    location.pathname.includes("/listing")) && (
                    <div className="back-button">
                        <div>
                            <ArrowBackIos
                                onClick={() => {
                                    back(location.pathname);
                                }}
                                fontSize="large"
                            />
                        </div>
                    </div>
                )}
                <div className="logo">
                    <Link to="/">
                        <span>Student Shop</span>
                    </Link>
                </div>
                <div className="message-button">
                    <div
                        onClick={() => {
                            history.push("/messages");
                        }}
                    >
                        <Message fontSize="large" />
                    </div>
                </div>
            </div>
        </Styles>
    );
};

export default Header;
