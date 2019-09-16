import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../reducers/api-consumers/messages";
import Messages from "../reusable/messages";
import getSocket from "../../commons/socketService";

export const About = props => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messageReducer.get("messages"));

  if (messages.size === 0) dispatch(getMessages());

  // To be added in the landing page
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
      <Messages messages={messages} />
    </div>
  );
};

export default React.memo(About);
