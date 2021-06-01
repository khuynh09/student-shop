import React, { useState } from "react";
import styled from "styled-components";
import profileImage from "../assets/profile.jpeg";
import listingImage from "../assets/square.png";
import soldListing from "../assets/sold.jpeg"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Styles = styled.div`
.profile {
    overflow: scroll;
}

.header {
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 10px;
}

.profile-window {
    display: block;
    width: 100%;
    position: relative;
}

.user-fullname {
   float: left;
   width: 50%;
}

.name {
   font-family: Montserrat;
   font-weight: 600;
   font-size: 20px;
   padding-top: 17%;
}

.university {
   font-family: Montserrat;
   font-weight: normal;
   font-size: 12px;
}

.profile-image {
    border-radius: 15px;
    display: block;
    width: 150px;
    margin-top: 5%;
    margin-left: 3%;
    margin-right: 5%;
    float: left;
}

.ratings {
    position: relative;
}

.thumb-up, .likes, .thumb-down, .dislikes {
    float: left;
    margin-top: 20px;
    padding-right: 15px;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.thumb-up {
    fill: green;
}

.thumb-down {
    fill: red;
}

.likes, .dislikes {
    font-family: Montserrat;
    font-weight: 600;
}

.clearer {
    clear: left;
    padding-top: 0px;
}

.bio {
    display: block;
    position: relative;
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
}

.bio-text {
   display: block;
   position: relative;
   font-family: Montserrat;
   font-weight: normal;
   font-size: 15px;
}

.listings {
    width: 90%;
    padding-left: 5%;
}

.listings-header {
   font-family: Montserrat;
   font-weight: 600;
   font-size: 30px;
   padding-top: 5%;
}

.listing-image {
    padding-top: 4%;
    padding-bottom: 4%;
    width: 100%;
}

.sold {
    overflow: hidden;
}

.sold-listing {
    width: 100%;
    position: relative;
    filter: blur(5px);
    -webkit-filter: blur(5px);
}

.sold-header {
    font-family: Montserrat;
    font-weight: bold;
    color: #bf98d1;
    left: 0;
    position: absolute;
    text-align: center;
    top: 1040px;
    width: 100%;
    -webkit-text-stroke: 2px #301934;
}

.actions {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    .action-item {
        font-size: 2.5rem;
        padding-right: 10px;
    }
}

.add-button {
    background-color: #bf98d1;
    padding: 10px 20px;
    color: white;
}
.add-button:hover {
    background-color: #bf98d1;
    opacity: 90%;
}
`;

const Account = () => {
    const history = useHistory();
    const [likes, setLikes] = useState(4839);
    const [dislikes, setDislikes] = useState(12);

    const liked = () => {
        setLikes(likes + 1);
    };

    const disliked = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <Router>
        <Styles>
            <div className="profile">
                <div className="profile-window">
                    <div className="image-container">
                        <img className="profile-image" src={profileImage} alt="User's profile photo"/>
                    </div>
                    <div className="user-fullname">
                        <h1 className="name">Melissa Stevens</h1>
                        <h3 className="university">3rd Year, Psychology, UC Irvine</h3>
                        <div className="ratings">
                            <ThumbUpIcon fontSize="default" className="thumb-up" onClick={liked}/>
                            <p className="likes">{likes}</p>
                            <ThumbDownIcon fontSize="default" className="thumb-down" onClick={disliked}/>
                            <p className="dislikes">{dislikes}</p>
                        </div>
                    </div>
                </div>
                <div className="clearer"></div>
                <div className="bio">
                    <h3 className="bio-text">Hi, everyone 👋🏼! My name is Melissa 🛼, and I'm currently a third year at UC Irvine 💙💛 majoring in Psychology. Thanks for checking out my page! I do both worldwide 🌎 and local shipping 📍. DM me for any questions! 🍄</h3>
                </div>
                <div className="listings">
                    <h2 className="listings-header">Listings</h2>
                    <hr></hr>
                    <img className="listing-image" src={listingImage} onClick={() => { history.push("/listing"); }} alt="Melissa's listing"/>
                    <div className="sold">
                        <img className="sold-listing" src={soldListing} alt="Sold listing"/>
                        <h1 className="sold-header">SOLD OUT</h1>
                    </div>
                </div>
            </div>
        </Styles>
        </Router>
    );
};

export default Account;