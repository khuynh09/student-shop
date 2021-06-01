import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Styles = styled.div`
.search {
    border-bottom: 1px solid grey;
}


.search-bar {
    height: 38px;
    position: center;
    display: flex;
    padding:20px;
    margin-left: 10px;
   
    
}

.searchTerm {
    border: 1px solid black;
    border-right: none;
    padding: 5px;
    width:100%;
   
    outline: none;
    color: black;
    font-size: 14px;
}

.searchTerm:focus{
    color: black;
}

.searchButton {
    
    border: 1px solid black;
    background: #C4C4C4;
    text-align: center;
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
    width: 60px;
   
   
}
.searchButton img {
    height: 20px;
}

`;

const Search = ({onChange, placeholder}) => {

    return (
        
        <Styles>
        
        <div className="search">
            <div className="search-bar">
                <input type="text" className="searchTerm" placeholder={placeholder} onChange= {onChange} />

                <button type="submit" className="searchButton" >
                <img src="Vector.png"/>
                </button>
            </div>
            </div>
        </Styles>
    );
};

export default Search;