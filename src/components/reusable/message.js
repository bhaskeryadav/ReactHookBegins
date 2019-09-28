import React from "react";

export default function Message(props) {
  const { message, category } = props.message;

  return (
    <React.Fragment>
      <ul>
        <li>{`${category} : ${message}`}</li>
      </ul>
    </React.Fragment>
  );
}
