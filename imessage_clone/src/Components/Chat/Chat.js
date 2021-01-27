import React, { useState } from "react";
import "./Chat.css";
import Picker from "emoji-picker-react";
import { Button, IconButton } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "../Message/Message";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [isToggled, setToggle] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input !== "") {
      console.log("Message  :", input);
      setInput("");
      setToggle(false);
    } else return;
  };

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    chosenEmoji ? setInput(input + emojiObject.emoji) : setInput(input);
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
        {isToggled && (
          <Picker className="chat__emojiPicker" onEmojiClick={onEmojiClick} />
        )}
        {/* message */}
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      {/* chat input */}
      <div className="chat__input">
        <IconButton onClick={() => setToggle(!isToggled)}>
          <EmojiEmotionsIcon className="chat__mic" />
        </IconButton>
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
      </div>
    </div>
  );
}

export default Chat;
