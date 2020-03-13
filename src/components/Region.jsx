import React from "react";
import AriaTag from "./AriaTag";

const Region = props => {
  const values = props.values;
  // console.log(values);
  return (
    <>
      <div className="imgCenter">
        <img
          alt={props.imgAlt}
          src={props.imgSrc}
          name={props.name}
          useMap={props.useMap}
        />
      </div>

      <map name={props.mapName}>
        {values.map((value, index) => {
          return (
            <AriaTag
              id={value.id}
              href={value.href}
              coords={value.coords}
              alt={value.alt}
              key={index}
            />
          );
        })}
      </map>
    </>
  );
};

export default Region;
