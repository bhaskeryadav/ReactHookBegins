import React from "react";
import Message from "./message";

export const Messages = props => {
  const { messages } = props;
  console.log("redinring messsss", messages.length);
  return (
    <React.Fragment>
      {messages.map(msg => (
        <Message key={msg.createdAt} message={msg} />
      ))}
    </React.Fragment>
  );
};

export default React.memo(Messages);
