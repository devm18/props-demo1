import React from "react";

function PeopleList(props) {
  return (
    <button onClick={() => props.confirmMethod(props.name)}>
      {props.name}
    </button>
  );
}

export default PeopleList;
