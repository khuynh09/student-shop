import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    .navdiv {
        border-top: black solid 1px;
        font-family: Montserrat;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 60px;
        width: 100%;
        background:white;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 800;
    }
    .logo:hover {
        cursor: pointer;
    }

    .nav-item {
        color: #bf98d1;
        font-weight: 500;
        text-decoration: none;
        padding: 10px;
    }

    nav-item:hover {
        cursor: pointer;
    }
`;
const Navigation = () => {
    const history = useHistory();
    return (
        <Styles>
            <div className="navdiv">
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/");
                    }}
                >
                    Home
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/recents");
                    }}
                >
                    Recent
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/listing/new");
                    }}
                >
                    Add
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/messages");
                    }}
                >
                    Messages
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/account");
                    }}
                >
                    Me
                </div>
            </div>
        </Styles>
    );
};

export default Navigation;
