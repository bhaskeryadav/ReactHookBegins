import React from "react";
import Message from "./message";

export default function Messages(props) {
  const { messages } = props;

  return (
    <React.Fragment>
      {messages.map(msg => (
        <Message key={msg.id} message={msg} />
      ))}
    </React.Fragment>
  );
}
