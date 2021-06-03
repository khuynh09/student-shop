import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        justify-content: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 100;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: 800;
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
`;

const Header = () => {
    return (
        <Styles>
            <div className="navdiv">
                <span className="logo">
                    <Link to="/">
                        <span>Student Shop</span>
                    </Link>
                </span>
            </div>
        </Styles>
    );
};

export default Header;
