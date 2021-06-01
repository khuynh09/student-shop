import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Add, Home, Message, AccessTime, Person } from "@material-ui/icons";

const Styles = styled.div`
    .navdiv {
        background-color: white;
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
        color: #5f5f5f;
        font-weight: 500;
        text-decoration: none;
        padding: 10px;
    }

    .nav-item:hover {
        cursor: pointer;
    }

    .add-button {
        width: 70px;
        background-color: #bf98d1;
        color: white;
    }
    .add-button:hover {
        background-color: #bf98d1;

        opacity: 90%;
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
                    <div>
                        <Home fontSize="large" />
                    </div>
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/recents");
                    }}
                >
                    <div>
                        <AccessTime fontSize="large" />
                    </div>
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/listing/new");
                    }}
                >
                    <Button className="add-button">
                        <Add style={{ fontSize: "2rem" }} />
                    </Button>
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/messages");
                    }}
                >
                    <div>
                        <Message fontSize="large" />
                    </div>
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        history.push("/account");
                    }}
                >
                    <div>
                        <Person fontSize="large" />
                    </div>
                </div>
            </div>
        </Styles>
    );
};

export default Navigation;
