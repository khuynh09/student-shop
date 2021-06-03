import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";
import Fuse from "fuse.js";
import Search from "./Search";
import contacts from "./contact-info.json";
import { Link } from "react-router-dom";
import Chat from "./Chat";

const Styles = styled.div`
    .message-list {
        grid-area: conversation-list;
        background: $primary-color;
        overflow-y: scroll;
    }
    .contact {
        display: grid;
        grid-template-columns: 30px 1fr max-content;
        grid-gap: 10px;
        color: black;
        border-bottom: 1px solid grey;
        padding: 10px 20px 20px 15px;

        &.active,
        &:hover {
            background: #ca7cb9;
        }

        &:hover {
            cursor: pointer;
        }

        > img {
            grid-row: span 2;
            height: 45px;
            width: 45px;
            border-radius: 100%;
        }

        .title-name {
            font-weight: bold;
            padding-left: 25px;
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
            font-size: 15px;
        }

        .message-time {
            color: grey;
            white-space: nowrap;
            font-size: 14px;
        }

        .contact-text {
            grid-column: span 2;
            padding-left: 25px;
            white-space: nowrap;
            overflow-x: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
        }
    }

    .new-message {
        margin-top: 20px;
        float: right;
        padding: 20px;

        margin-right: 20px;
        border-radius: 50%;
        background: #bf98d1;

        img {
            width: 40px;
            height: 40px;
        }
    }
`;

const Card = ({ title, image, time, text }) => {
    const history = useHistory();
    return (
        <div className="contact">
            <img src={image} key={title} />
            <div className="title-name">{title}</div>
            <div className="message-time">{time}</div>
            <div className="contact-text">{text}</div>
        </div>
    );
};

const Messages = () => {
    const [data, setData] = useState(contacts);

    const searchData = (pattern) => {
        if (!pattern) {
            setData(contacts);
            return;
        }

        const fuse = new Fuse(data, {
            keys: ["title", "text"],
        });

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({ item }) => {
                matches.push(item);
            });
            setData(matches);
        }
    };
    const history = useHistory();
    const location = useLocation();
    return (
        <Router>
            <Search
                placeholder="Search"
                onChange={(e) => searchData(e.target.value)}
            />
            <Styles>
                <div
                    className="message-list"
                    onClick={() => {
                        history.push({
                            pathname: "/chat",
                        });
                    }}
                >
                    {data.map((item) => (
                        <Card {...item} key={item.title} />
                    ))}
                </div>

                <div
                    className="new-message"
                    onClick={() => {
                        history.push("/new-chat");
                    }}
                >
                    <img src="new-message.png" />
                </div>
            </Styles>
        </Router>
    );
};

export default Messages;
