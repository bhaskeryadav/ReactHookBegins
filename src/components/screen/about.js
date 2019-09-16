import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../reducers/api-consumers/messages";
import Message from "../reusable/message";
import getSocket from "../../commons/socketService";

export const About = props => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messageReducer.get("messages"));

  if (messages.size === 0) dispatch(getMessages());

  useEffect(() => {
    console.log("calling use effect in about js");
    const sock = getSocket();
    sock.on("time", data => {
      console.log(data);
      dispatch({
        type: "ADD_MESSAGE",
        payload: data
      });
    });
  }, [dispatch]);

  return (
    <div>
      {messages.map(msg => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default React.memo(About);
