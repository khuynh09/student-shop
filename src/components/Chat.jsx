import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
    }

    .chat {
        width: 100%;
        float: left;
        background: white;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

        color: #434651;

        .chat-header {
            width: 100%;
            padding: 10px;
            border-bottom: 2px solid white;
            position: sticky;
            background: #bf98d1;

            .return {
                font-weight: 10px;
                font-size: 25px;
                padding-left: 10px;
                margin-top: 13px;
                float: left;
            }
            img {
                margin-left: 37%;
                border-radius: 50%;
                width: 10%;
            }

            .chat-about {
                float: left;
                padding-left: 10px;
                margin-top: 6px;
            }

            .chat-with {
                font-weight: bold;
                font-size: 16px;
                text-align: justify;
                padding-left: 33%;
            }
        }

        .chat-history {
            width: 100%;
            border: solid 1px white;
            display: flex;
            flex-direction: column;
            padding: 10px;
            padding-bottom: 30px;
            border-bottom: 1px solid grey;
        }

        .messages {
            flex-direction: column;
            display: flex;
        }

        .message {
            border-radius: 20px;
            padding: 8px 15px;
            margin-top: 5px;
            margin-bottom: 10px;
            display: inline-block;
        }

        .time {
            padding-right: 120px;
            padding-bottom: 10px;
            color: grey;
        }

        .mine .time {
            padding-top: 10px;
        }

        .yours {
            align-items: flex-start;
        }

        .yours .message {
            margin-right: 25%;
            background-color: #eee;
            position: relative;
        }

        .yours .message.last:before {
            content: "";
            position: absolute;
            z-index: 0;
            bottom: 0;
            left: -7px;
            height: 20px;
            width: 20px;
            background: #eee;
            border-bottom-right-radius: 15px;
        }

        .yours .message.last:after {
            content: "";
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: -10px;
            width: 10px;
            height: 20px;
            background: white;
            border-bottom-right-radius: 10px;
        }

        .mine {
            align-items: flex-end;
        }

        .mine .message {
            color: white;
            margin-left: 25%;
            background: linear-gradient(to bottom, #bf98d1 0%, #bf98d1 100%);
            background-attachment: fixed;
            position: relative;
        }

        .mine .message.last:before {
            content: "";
            position: absolute;
            z-index: 0;
            bottom: 0;
            right: -8px;
            height: 20px;
            width: 20px;
            background: linear-gradient(to bottom, #bf98d1 0%, #bf98d1 100%);
            background-attachment: fixed;
            border-bottom-left-radius: 15px;
        }

        .mine .message.last:after {
            content: "";
            position: absolute;
            z-index: 1;
            bottom: 0;
            right: -10px;
            width: 10px;
            height: 20px;
            background: white;
            border-bottom-left-radius: 10px;
        }

        .chat-message {
            position: fixed;
            padding-top: 15px;
            margin-top: 15px;
            padding-bottom: 25px;
            width: 99%;

            textarea {
                width: 90%;
                height: 45px;
                border: none;
                padding: 10px 10px;
                font: 14px/22px "Lato", Arial, sans-serif;
                margin-bottom: 20px;
                border-radius: 50px;
                margin-left: 20px;
                resize: none;
                background: #eee;
            }
        }
    }
`;

const Chat = () => {
    const history = useHistory();
    return (
        <Styles>
            <div className="container clearfix">
                <div className="chat">
                    <div className="chat-header clearfix">
                        <div
                            className="return"
                            onClick={() => {
                                history.push("/messages");
                            }}
                        >
                            &#60;
                        </div>

                        <img
                            src="melissa.png"
                            alt="avatar"
                            onClick={() => {
                                history.push("/account");
                            }}
                        />

                        <div className="chat-with">Melissa Stevens</div>
                    </div>

                    <div className="chat-history">
                        <div className="mine messages">
                            <div className="time">Today 10:30 AM</div>
                            <div className="message last">
                                Hello is the grill still on sale?
                            </div>
                        </div>

                        <div className="yours messages">
                            <div className="message last">
                                Hey! Yes it's still available, would you like to
                                pick it up today at 2 pm?
                            </div>
                            <div className="message last">
                                Here is the address: 123 S Street Ave, Irvine,
                                CA 900XX?
                            </div>
                        </div>

                        <div className="mine messages">
                            <div className="message last">
                                Sound Great thanks!
                            </div>
                            <div className="time recent">Today 1:30 PM</div>
                            <div className="message last">
                                omw to pick up the grill!
                            </div>
                        </div>
                    </div>

                    <div className="chat-message clearfix">
                        <textarea
                            name="message-to-send"
                            id="message-to-send"
                            placeholder="Type your message"
                            rows="3"
                        ></textarea>
                    </div>
                </div>
                
            
                <div className="chat-message clearfix">
                    <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                    
                </div>
            
            </div>
        </Styles>
    );
};

export default Chat;
