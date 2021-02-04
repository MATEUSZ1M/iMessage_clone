import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import db, { auth } from "../../features/firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
      );
  }, []);
  
  const addChat = () => {
    const chatName = prompt("Please enter a chat name");

    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    } else alert("You trying add epmty chat name 🙄");
  };

  const filterList = (e) => {
    // let chatF = chats.map(({id, data: { chatName } }) => {
    //   return ( chatName[id] )
    // });
    // console.log(chatF)

    // chatF = chatF.filter((item) => {
    // return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    // });

    console.log(chats.map());
  
  };

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
          <input type="text" placeholder="Search" onChange={filterList} />
        </div>
        <IconButton
          onClick={addChat}
          className="sidebar__inputButton"
          variant="outlined"
        >
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
