import React, { useState } from "react";
import "./Chat.css";
import Picker from 'emoji-picker-react';
import { Button, IconButton } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function Chat() {
  const [input, setInput] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isToggled, setToggle] = useState(false);


  const sendMessage = (e) => {
    e.preventDefault();
    if(input !== ""){
      console.log(input, "<- Message");
  
      setInput("");
      setToggle(!isToggled);
    }else return
  };


  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setInput(input + emojiObject.emoji)
    console.log(emojiObject.emoji)
  };



  return (
    <div className="chat">
      {/* chat cheader */}
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat messages */}
      <div className="chat__messages">
        {isToggled && <Picker className='chat__emojiPicker' onEmojiClick={onEmojiClick} />}
      </div>

      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message"
            type="text"
          />
          <Button type="submit" onClick={sendMessage}>
            send message
          </Button>
        </form>
        <IconButton>
          <EmojiEmotionsIcon onClick={()=> setToggle(!isToggled)} className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
