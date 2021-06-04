import React, { useState, useEffect } from "react";
import styled from "styled-components";
import profileImage from "../assets/profile.jpeg";
import listingImage from "../assets/square.png";
import soldListing from "../assets/sold.jpeg"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const localStorage = require("local-storage");

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
    max-height: 364.5px;
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
    top: 63rem;
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
    const [likes, setLikes] = useState();
    const [dislikes, setDislikes] = useState();

    const [checkProperty, setCheckProperty] = useState(true);

    const liked = () => {
        setLikes(likes + 1);
    };

    const disliked = () => {
        setDislikes(dislikes + 1);
    };

    let {acctId} = useParams();

    useEffect(() => {
        setLikes(accounts[acctId].likes);
        setDislikes(accounts[acctId].dislike);

        if (acctId == 6){
            let isPosted = localStorage.get("posted");
            if (isPosted) {
                setCheckProperty(true);
            } else {
                setCheckProperty(false);
            }
        }
    }, [])

    const accounts = [

        {
            name: "Melissa Stevens",
            university: "3rd Year, Psychology, UC Irvine",
            likes: 4839,
            dislike:12,
            image: profileImage,
            bio: "Hi, everyone 👋🏼! My name is Melissa 🛼, and I'm currently a third year at UC Irvine 💙💛 majoring in Psychology. Thanks for checking out my page! I do both worldwide 🌎 and local shipping 📍. DM me for any questions! 🍄",
            listing_image: "https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg",
            listing_id: 1
        },
        {
            name: "Lynette Nguyen",
            university: "4th Year, Computer Science, UC Irvine",
            likes: 934,
            dislike:10,
            image: "http://www.davidnoles.com/wp/wp-content/uploads/2014/02/kimiko-302-new-york-city-headshots-nyc.jpg",
            bio: "Hello! I recently rediscovered my love for art and made a small business for it! I am currently ONLY taking orders for custom stoles at the moment! DM me for if you have any questions! 💖",
            listing_image: "https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca",
            listing_id: 0,
        },
        {
            name: "Kevin Huynh",
            university: "4th Year, Computer Science, UC Irvine",
            likes: 1034,
            dislike:7,
            image: "https://ih1.redbubble.net/image.1505692996.1222/st,small,507x507-pad,600x600,f8f8f8.jpg",
            bio: "Prices are negotiable! DM if you have any questions 🤠",
            listing_image: "https://images-na.ssl-images-amazon.com/images/I/41o0pNCYaBL.jpg",
            listing_id: 5,
        },
        {

            name: "Dayanara Melara",
            university: "3rd Year, Informatics, UC Irvine",
            likes: 3912,
            dislike:12,
            image: "https://portraitsrefined.com/wp-content/uploads/2020/03/Photographer-in-field.jpg",
            bio: "Photography is my passion 📸 3 SLOTS OPEN FOR GRADUATION❗️❗️ DM for more info",
            listing_image: "http://www.hunterandsarahphotography.com/wp-content/uploads/2020/02/3-Tips-for-the-Best-UVA-Graduation-Pictures-Hunter-and-Sarah-Photography-Cover.jpg",
            listing_id: 6,
        },

        {

            name: "Amanda Lin",
            university: "4th Year, CompSci, UC Irvine",
            likes: 2349,
            dislike:9,
            image: "https://www.shopsofsaddlecreek.com/wp-content/uploads/2019/08/Must-Have-Fall-Pieces-College-Wardrobe-9-687x1030.jpg",
            bio: "Thanks for checking out my page! 💖 I only do pick ups and meet ups! LMK if you have any questions!",
            listing_image: "https://i.pinimg.com/originals/a9/a3/d5/a9a3d5876168df4f3942edcc39ebd25c.jpg",
            listing_id: 8,
        },

        {

            name: "Maireen Espiritu",
            university: "3rd Year, Software Engineering, UC Irvine",
            likes: 7839,
            dislike:0,
            image: "https://i.pinimg.com/originals/48/b0/af/48b0af3862649cb3b43208ce848d27d6.jpg",
            bio: "Hey its Maireen 👋🏼 Check out my art IG @maisartsncrafts 💝 Currently taking orders",
            listing_image: "https://i.etsystatic.com/8587178/r/il/daedb5/1261080445/il_570xN.1261080445_8ciu.jpg",
            listing_id: 7,
        },

        {

            name: "Peter Anteater",
            university: "2nd Year, CSE & Informatics, UC Irvine",
            likes: 2021,
            dislike:50,
            image: "https://pbs.twimg.com/profile_images/1263243779714109441/BEnWwDMY.jpg",
            bio: "Yo what up its Peter! Check out my page ",
            listing_image: localStorage.get("post_image"),
        }
        
    ]

    return (
        <Router>
        <Styles>
            <div className="profile">
                <div className="profile-window">
                    <div className="image-container">
                        <img className="profile-image" src={accounts[acctId].image} alt="User's profile photo"/>
                    </div>
                    <div className="user-fullname">
                        <h1 className="name">{accounts[acctId].name}</h1>
                        <h3 className="university">{accounts[acctId].university}</h3>
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
                    <h3 className="bio-text">{accounts[acctId].bio}</h3>
                </div>
                {checkProperty ? (
                    <div className="listings">
                    <h2 className="listings-header">Listings</h2>
                    <hr></hr>
                    <img className="listing-image" src={accounts[acctId].listing_image} alt="User's listing"/>
                    {/* <div className="sold">
                        <img className="sold-listing" src={soldListing} alt="Sold listing"/>
                        <h1 className="sold-header">SOLD OUT</h1>
                    </div> */}
                </div>
                    
                ) :(
                    <div className="listings">
                        <h2 className="listings-header">Listings</h2>
                        <hr></hr>
                        <h4>No Listings Available</h4>

                    </div>
                )}

              
            </div>
        </Styles>
        </Router>
    );
};

export default Account;
