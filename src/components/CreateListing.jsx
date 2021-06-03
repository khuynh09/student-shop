import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Add } from "@material-ui/icons";

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

    #details-bar {
        background-color: #bf98d1;
    }

    #details-text {
        color: #bf98d1;
    }

    .form-container {
        margin: 30px;
        border-radius: 10px;
        background-color: #E5E5E5;
        height: 55vh;
    }

    .next-button {
        width: 85vw;
        margin: 0 auto;
        display: block;
        margin-top: 30px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #bf98d1;
        color: white;
        font-size: 20px;
        font-weight: 600;
        font-family: Montserrat;
    }

    .form-label {
        color: #5F5F5F;
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin-bottom: 5px;
    }

    .title-input {
        border: 2px solid #DADADA;
        border-radius: 8px;
        height: 25px;
        width: 100%;
    }

    .form-group {
        margin-left: 20px;
        margin-right: 30px;
        padding-top: 20px;
    }

    .form-item {
        margin-bottom: 15px;
    }

    .category-dropdown {
        border: 2px solid #DADADA;
        border-radius: 8px;
        height: 30px;
        width: 103%;
        background-color: white;
    }

    .input-symbol-dollar {
        position: relative;
        display: block;
    }

    .input-symbol-dollar:after {
        color: #37424a !important;
        content: "$";
        font-size: 14px !important;
        font-weight: 400;
        position: absolute;
        display: block;
        height: 100%;
        top: 3px;
        left: 10px;
        line-height: 25px;
    }

    .price-input {
        border: 2px solid #DADADA;
        border-radius: 8px;
        width: 94%;
        height: 25px !important;
        padding-left: 20px !important;
        display: inline-block !important;
    }

    .description-input {
        border: 2px solid #DADADA;
        border-radius: 8px;
        height: 7vh;
        width: 100%;
    }

    .upload-photo {
        padding-top: 20px;
        text-align: center;
    }

    .photo-input {
        display: none;
    }

    .photo-label {
        cursor: pointer;
        background-color: #bf98d1;
        color: white;
        display: block;
        font-weight: 600;
        font-size: 18px;
        width: 50px;
        height: 40px;
        border-radius: 8px;
        padding-top: 10px;
        margin: 0 auto;
    }

    .output-photo {
        display: none;
        padding-top: 30px;
        margin: 0 auto;
        max-height: 250px;
    }

    .photo-title {
        color: #5F5F5F;
        font-size: 16px;
        font-weight: 600;
    }

    .finish-container {
        margin: 0px 30px;
        margin-top: 30px;
    }

    .post-image {
        width: 250px;
        margin-bottom: 10px;
    }
`;

const CreateListing = ({history, location, match}) => {
    const [currentStatus, setCurrentStatus] = useState('details');
    const [title, setTitle] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [condition, setCondition] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    let pageContent = "";
    let bottomButton = "";

    const handleNext = (e) => {
        if (currentStatus === 'details') {
            document.getElementById('photos-bar').style.backgroundColor = '#bf98d1';
            document.getElementById('photos-text').style.color = '#bf98d1';
            setCurrentStatus('photos');
        } else if (currentStatus === 'photos') {
            document.getElementById('finish-bar').style.backgroundColor = '#bf98d1';
            document.getElementById('finish-text').style.color = '#bf98d1';
            setCurrentStatus('finish');
        }
    }

    const loadFile = (e) => {
        let image = document.getElementById('output');
        image.src = URL.createObjectURL(e.target.files[0]);
        setImage(image.src);
        image.style.display = 'block';
    }

    const handlePost = (e) => {
        history.push("/");
    }

    if (currentStatus === 'details') {
        pageContent = (
            <div className="form-container">
                <form className="form-group">
                    <div className="form-item">
                        <label className="form-label">Title</label>
                        <input
                            className="title-input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-item">
                        <label className="form-label">Category</label>
                        <select 
                            className="category-dropdown"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="default"></option>
                            <option value="books">Books</option>
                            <option value="furniture">Furniture</option>
                            <option value="clothing">Clothing</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label className="form-label">Price</label>
                        <span className="input-symbol-dollar">
                            <input
                                className="price-input"
                                type="number"
                                min="0.00"
                                max="10000.00"
                                step="0.01"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </span>
                    </div>
                    <div className="form-item">
                        <label className="form-label">Condition</label>
                        <select 
                            className="category-dropdown"
                            value={condition}
                            onChange={(e) => setCondition(e.target.value)}
                        >
                            <option value="default"></option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <label className="form-label">Description</label>
                        <textarea
                            className="description-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        );

        bottomButton = (
            <button className="next-button" onClick={handleNext}>Next</button>
        );
    } else if (currentStatus === 'photos') {
        pageContent = (
            <div className="form-container">
                <div className="upload-photo">
                    <h3 className="photo-title">Upload Photo</h3>
                    <input 
                        className="photo-input"
                        type="file"  
                        accept="image/*" 
                        name="image" 
                        id="file"  
                        onChange={loadFile} 
                    />
                    <label htmlFor="file" className="photo-label">
                        <Add style={{ fontSize: "2rem" }} />
                    </label>
                    <img className="output-photo" id="output" alt="uploaded" width="250" />
                </div>
            </div>
        );

        bottomButton = (
            <button className="next-button" onClick={handleNext}>Next</button>
        );
    } else if (currentStatus === 'finish') {
        pageContent = (
            <div className="finish-container">
                <div className="">
                    <img className="post-image" src={image} alt="" />
                </div>
                <div className="post-info">
                    <div>
                        <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                            {title}
                        </span>
                    </div>
                    <b>Price </b> ${price} USD{" "}
                </div>

                <div className="post-info">
                    <b>Condition: </b>
                    <span>{condition}</span>
                </div>

                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        );

        bottomButton = (
            <button className="next-button" onClick={handlePost}>Post Item</button>
        );
    }
    
    return (
        <Styles>
        <div className="page-container">
            <div className="status-container">
                <div className="details">
                    <div className="bar" id="details-bar"></div>
                    <div className="status-text" id="details-text">Details</div>
                </div>
                <div className="photos">
                    <div className="bar" id="photos-bar"></div>
                    <div className="status-text" id="photos-text">Photos</div>
                </div>
                <div className="finish">
                    <div className="bar" id="finish-bar"></div>
                    <div className="status-text" id="finish-text">Finish</div>
                </div>
            </div>

            {pageContent}

            {bottomButton}
        </div>
        </Styles>
    );
};

export default CreateListing;
