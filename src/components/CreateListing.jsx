import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
    .page-container {
        font-family: Montserrat;
    }

    .status-container {
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    .bar {
        height: 10px;
        width: 100px;
        border-radius: 10px;
        background-color: #C4C4C4;
    }

    .status-text {
        text-align: center;
        margin-top: 5px;
        color: #C4C4C4;
        font-size: 18px;
    }

    .form-container {
        margin: 30px;
        border-radius: 10px;
        border: 2px solid #C4C4C4; 
        height: 50vh;
    }

    .next-button {
        width: 85vw;
        margin: 0 auto;
        display: block;
        margin-top: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #bf98d1;
        color: white;
        font-size: 20px;
        font-weight: 600;
        font-family: Montserrat;
    }
`;
const CreateListing = ({history, location, match}) => {
    return (
        <Styles>
        <div className="page-container">
            <div className="status-container">
                <div className="details">
                    <div className="bar"></div>
                    <div className="status-text">Details</div>
                </div>
                <div className="photos">
                    <div className="bar"></div>
                    <div className="status-text">Photos</div>
                </div>
                <div className="finish">
                    <div className="bar"></div>
                    <div className="status-text">Finish</div>
                </div>
            </div>

            <div className="form-container">
                <form>
                    <label className="form-label">Title</label>
                    <input
                        className="form-input"
                        type="text"
                    />
                </form>
            </div>

            <button className="next-button">Next</button>
        </div>
        </Styles>
    );
};

export default CreateListing;
