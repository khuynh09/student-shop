import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    /* .navdiv {
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
    } */
`;
const CreateListing = ({history, location, match}) => {
    return (
        <div>
            Create Listing
        </div>
    );
};

export default CreateListing;
