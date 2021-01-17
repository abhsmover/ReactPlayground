import React from "react";

export default function (props) {
  const handleClick = (e) => {
    e.preventDefault()
    console.log({props})
    props.propsFromParent("Button Pressed")
  };

  return (
      <button onClick={handleClick}>
        DataToParent
      </button>
  );
}
