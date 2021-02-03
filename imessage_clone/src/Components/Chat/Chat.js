import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Button, IconButton } from "@material-ui/core";
import Picker from "emoji-picker-react";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "../Message/Message";
import FlipMove from "react-flip-move";

import { selectChatName, selectChatId } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import db from "../../features/firebase";
import firebase from "firebase/app";

function Chat() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  const [isToggled, setToggle] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
    setToggle(false);
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
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat messages */}
      <div className="chat__messages">
        {isToggled && (
          <Picker className="chat__emojiPicker" onEmojiClick={onEmojiClick} />
        )}
        {/* message */}
        <FlipMove 
           >
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
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
