import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({id, chatName}) {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>last message sent</p>
        <small>timeStamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
