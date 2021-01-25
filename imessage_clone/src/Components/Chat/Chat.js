import React, { useState } from "react";
import "./Chat.css";
import { Button, IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input, "<- Message");

    setInput("");
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
          <IconButton >
            <MicNoneIcon className="chat__mic" />
          </IconButton>
      </div>
    </div>
  );
}

export default Chat;
