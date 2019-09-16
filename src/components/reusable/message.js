import React from "react";

export default function Message(props) {
  const { message, type, id } = props.message;

  return (
    <React.Fragment>
      <ul>
        <li>{message}</li>
        <li>{id}</li>
        <li>{type}</li>
      </ul>
    </React.Fragment>
  );
}
