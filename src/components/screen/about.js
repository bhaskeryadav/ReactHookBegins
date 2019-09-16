import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../reducers/api-consumers/messages";
import Message from "../reusable/message";

export const About = props => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messageReducer.get("messages"));

  if (messages.size === 0) dispatch(getMessages());

  return (
    <div>
      {messages.map(msg => (
        <Message message={msg} />
      ))}
    </div>
  );
};

export default React.memo(About);
