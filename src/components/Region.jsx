import React from "react";
import AriaTag from "./AriaTag";

const Region = props => {
  const values = props.values;
  // console.log(values);
  return (
    <>
      <img
        alt={props.imgAlt}
        src={props.imgSrc}
        name={props.name}
        useMap={props.useMap}
      />

      <map name={props.mapName}>
        {values.map((value, index) => {
          return (
            <AriaTag
              id={value.id}
              href={value.href}
              coords={value.coords}
              key={index}
            />
          );
        })}
      </map>
    </>
  );
};

export default Region;
