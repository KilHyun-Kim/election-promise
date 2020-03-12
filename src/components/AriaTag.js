import React from "react";

const AriaTag = props => {
  return (
    <area
      id={props.id}
      shape="poly"
      href={props.href}
      coords={props.coords}
      alt={props.alt}
    />
  );
};

export default AriaTag;
