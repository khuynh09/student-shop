import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`

*, *:before, *:after {
  box-sizing: border-box;
}


ul {
    list-style-type: none;
   }

  
.chat {
    padding-top: 20px;
    width: 100%;
    float:left;
    background: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  
  color: #434651;


    .chat-header {
        width:100%;
        padding: 10px;
        border-bottom: 2px solid white;
        position:sticky;
        background: #BF98D1;
        padding-bottom: 25px;
        
        
        font-size: 17px;
        font-weight: bold;
        text-align:center;

        .return {
            font-weight: 10px;
            font-size: 25px;
            margin-top:-5px;
            float:right;
            padding-right:5px;
        }
        .new-message{
            padding-top:20px;
            padding-left: 15px;
        }
        
         
    }
    .chat-with {
        font-weight: bold;
        font-size: 16px;
        text-align: justify;
        padding-left:10%;
        padding-bottom: 75%;
        }

        input {
            padding-top:10px;
            margin-top: 20px;
            width: 90%;
            border-radius: 30px;
            text-align:flex;
            padding-left: 15px;
            padding-bottom:10px;
        }

    .chat-history {
        width: 100%;
        border: solid 1px white;
        display: flex;
        flex-direction: column;
        padding:10px;
        padding-bottom: 30px;
        border-bottom: 1px solid grey
    }
  
    .messages {

    flex-direction: column;
    display:flex;

    }

    .message {
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 10px;
    display: inline-block;
   
    }

    .time {
        padding-right:120px;
        padding-bottom: 10px;
        color: grey
    }


   

  .chat-message {
    position:fixed;
    padding-top:15px;
    margin-top:15px;
    padding-bottom:25px;
    width:99%;

    textarea {
      width: 90%;
      height: 45px;
      border: none;
      padding: 10px 10px;
      font: 14px/22px "Lato", Arial, sans-serif;
      margin-bottom: 20px;
      border-radius: 50px;
      margin-left:20px;
      resize: none;
      background:#eee;
      
    }
    
  }
}



`;

const New = () => {
    const history = useHistory();
    return (
        <Styles>
          <div className="container clearfix">
   
            <div className="chat">
                <div className="chat-header clearfix">
                    <div className="return" onClick={() => {history.push("/messages"); }}>x
                    </div>
                    
                    <div className="new-message">New Message</div>
                </div> 
                <div className="chat-with">
                        <input type="text" placeholder="Send To"></input>
                    </div>
                <div className="chat-history">
                    <div className="mine messages">
                        
                        
                    </div>

                    
                </div>
                
            
                <div className="chat-message clearfix">
                    <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                    

                </div>
                
            </div>

        </div> 

    </Styles>
    );

};
        
        
  

export default New;