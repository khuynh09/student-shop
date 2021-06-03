import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
    FavoriteBorder,
    Favorite,
    AccountCircle,
    BookmarkBorder,
    Bookmark,
    MailOutline,
} from "@material-ui/icons";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import squareImage from "../assets/square.png";

const Styles = styled.div`
    .header {
        height: 55px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    .user-info {
        padding-left: 10px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .post-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        min-width: 100%;
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

    .likes-info {
        padding: 0px 10px;
    }

    .description {
        padding: 0px 10px;
        p {
            margin: 0;
            margin-top: 4px;
        }
    }

    .post-info {
        padding: 0 10px;
    }

    .favorites {
        display: flex;
        align-items: center;
    }

    .updated {
        display: flex;
        justify-content: flex-start;
        margin-left: 10px;
    }
`;
const Post = ({ post }) => {
    let history = useHistory();

    let { postId } = useParams();

    let postings = [
        {
            title: "Custom Stoles",
            image:
                "https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca",
            likes: 100,
            condition: "New",
            description: "Design your custom stole! DM for more details",
            price: "DM for Pricing",
            user: "lynettenguyen",
        },
        {
            title: "America’s Majestic Canyons",
            image:
                "https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg",
            likes: 80,
            condition: "New",
            description:
                "Selling this “America’s Majestic Canyons” textbook for Canyons 101 this quarter! I decided to drop the class, but message me if interested!",
            price: "$15 USD",
            user: "melissastevens",
        },
        {
            title: "Give Liberty",
            image:
                "https://d27x836h90buu9.cloudfront.net/609c4dc4f11b2b0dde5260cd/mijems/df043e30-c8bc-45a5-b446-830850a775f7.jpeg",
            likes: 55,
            condition: "Used",
            description:
                "Selling this “Give Liberty” textbook for this quarter! I decided to drop the class, but message me if interested!",
            price: "$10 USD",
            user: "melissastevens",
        },
        {
            title: "CS147 IOT Kit",
            image:
                "https://stemeducationworks.com/wp-content/uploads/IoT-Kit_1000x769.jpg",
            likes: 20,
            condition: "Used",
            description:
                "Selling this kit for cheap! Used but almost mint condition!",
            price: "$20 USD",
            user: "amandaslin",
        },
        {
            title: "CS147 IOT Kit",
            image:
                "https://stemeducationworks.com/wp-content/uploads/IoT-Kit_1000x769.jpg",
            likes: 20,
            condition: "Used",
            description:
                "Selling this kit for cheap! Used but almost mint condition!",
            price: "$20 USD",
            user: "amandaslin",
        },
        {
            title: "CS122A Intro to Databases",
            image:
                "https://images-na.ssl-images-amazon.com/images/I/41o0pNCYaBL.jpg",

            likes: 200,
            condition: "Used",
            description: "Price negotiable",
            price: "$8 USD",
            user: "kevinhuynh",
        },
        {
            title: "Graduation Shoot",
            image:
                "http://www.hunterandsarahphotography.com/wp-content/uploads/2020/02/3-Tips-for-the-Best-UVA-Graduation-Pictures-Hunter-and-Sarah-Photography-Cover.jpg",
            likes: 200,
            condition: "New",
            description:
                "Now accepting bookings. Shoot me a message to see my portfolio",
            price: "$120/hr",
            user: "dayam",
        },
        {
            title: "Custom Cap Art",
            image:
                "https://i.etsystatic.com/8587178/r/il/daedb5/1261080445/il_570xN.1261080445_8ciu.jpg",
            likes: 200,
            condition: "New",
            description: "I'll make your caps cute",
            price: "$30",
            user: "maiespiritu",
        },
        {
            title: "Homemade Graduation Leis",
            image:
                "https://i.pinimg.com/originals/a9/a3/d5/a9a3d5876168df4f3942edcc39ebd25c.jpg",
            likes: 200,
            condition: "New",
            description: "Selling leis!!!",
            price: "$10",
            user: "amandaslin",
        },
    ];
    let price = 15;
    const [favorited, setFavorited] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(postings[postId].likes);
    const favorite = () => {
        setFavorited(!favorited);

        if (favorited) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
    };
    const bookmark = () => {
        setBookmarked(!bookmarked);
    };
    return (
        <Router>
            <Styles>
                <div className="post">
                    <div
                        className=""
                        style={{
                            margin: 0,
                            height: "375px",
                        }}
                    >
                        <img
                            className="post-image"
                            style={{
                                width: "auto",
                                height: "100%",
                                objectFit: "contain",
                            }}
                            src={postings[postId].image}
                            alt=""
                        />
                    </div>
                    <div className="actions">
                        <div className="favorites">
                            {favorited ? (
                                <Favorite
                                    className="action-item"
                                    onClick={favorite}
                                />
                            ) : (
                                <FavoriteBorder
                                    className="action-item"
                                    onClick={favorite}
                                />
                            )}

                            <b>{likes}</b>
                        </div>
                        <div>
                            <Button
                                onClick={() => {
                                    history.push("/chat");
                                }}
                                className="add-button"
                            >
                                Purchase
                            </Button>
                        </div>
                    </div>

                    <div className="post-info">
                        <div>
                            <span
                                style={{ fontWeight: 600, fontSize: "1.2rem" }}
                            >
                                {postings[postId].title}
                            </span>
                        </div>
                        <b>Price </b> {postings[postId].price}{" "}
                        <span style={{ color: "grey", fontSize: "0.9rem" }}>
                            +shipping
                        </span>
                    </div>

                    <div className="post-info">
                        <b>Condition: </b>
                        <span>{postings[postId].condition}</span>
                    </div>
                    <div className="header">
                        <AccountCircle
                            style={{ fontSize: "2.8rem" }}
                            onClick={() => {
                                history.push("/account");
                            }}
                        />
                        <div className="user-info">
                            <div>{postings[postId].user}</div>
                            <div>Irvine, CA, United States</div>
                        </div>
                    </div>

                    <div className="description">
                        <p>{postings[postId].description}</p>
                    </div>
                </div>

                <div className="updated">
                    <span style={{ color: "grey", fontSize: "0.9rem" }}>
                        Posted a day ago
                    </span>
                </div>
            </Styles>
        </Router>
    );
};

export default Post;
