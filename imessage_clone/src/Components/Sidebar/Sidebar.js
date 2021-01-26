import React from "react";
import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../features/firebase";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          src={user.photo}
          onClick={() => auth.signOut()}
          className="sidebar__avatar"
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <IconButton className="sidebar__inputButton" variant="outlined">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
