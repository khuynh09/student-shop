import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
    FavoriteBorder,
    Favorite,
    AccountCircle,
    BookmarkBorder,
    Bookmark,
    MailOutline,
} from "@material-ui/icons";

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
const Post = () => {
    let price = 15;
    const [favorited, setFavorited] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likes, setLikes] = useState(88);
    const favorite = () => {
        setFavorited(!favorited);

        if (favorited) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
    };
    const bookmark = () => {
        setBookmarked(!bookmarked);
    };
    return (
        <Styles>
            <div className="post">
                <div className="">
                    <img className="post-image" src={squareImage} alt="" />
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
                        <Button className="add-button">Purchase</Button>
                    </div>
                </div>

                <div className="post-info">
                    <div>
                        <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                            America’s Majestic Canyons
                        </span>
                    </div>
                    <b>Price </b> ${price} USD{" "}
                    <span style={{ color: "grey", fontSize: "0.9rem" }}>
                        +shipping
                    </span>
                </div>

                <div className="post-info">
                    <b>Condition: </b>
                    <span>New</span>
                </div>
                <div className="header">
                    <AccountCircle style={{ fontSize: "2.8rem" }} />
                    <div className="user-info">
                        <div>student_seller</div>
                        <div>Irvine, CA, United States</div>
                    </div>
                </div>

                <div className="description">
                    <p>
                        Selling this “America’s Majestic Canyons” textbook for
                        Canyons 101 this quarter! I decided to drop the class,
                        but message me if interested!
                    </p>
                </div>
            </div>

            <div className="updated">
                <span style={{ color: "grey", fontSize: "0.9rem" }}>
                    Posted a day ago
                </span>
            </div>
        </Styles>
    );
};

export default Post;
