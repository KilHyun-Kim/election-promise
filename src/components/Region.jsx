import React from "react";
import AriaTag from "./AriaTag";

const Region = props => {
  const values = [
    {
      id: "busanAria1",
      href: "/busan/haeundaegu",
      coords:
        "406,201,433,235,421,256,447,271,451,282,458,272,469,268,477,292,468,294,457,322,445,328,433,318,418,327,411,326,400,325,377,293,370,258,378,249,379,237"
    },
    {
      id: "busanAria2",
      href: "/busan/gijanggun",
      coords:
        "386,51,417,54,430,66,441,66,445,58,454,53,461,41,453,22,476,28,487,29,503,22,513,23,530,18,554,56,549,78,575,94,566,114,549,98,529,111,527,162,521,171,503,185,519,191,524,197,514,209,507,238,496,235,492,246,499,260,494,282,491,290,479,290,469,260,453,273,428,254,439,234,404,193,381,187,383,157,389,145,365,127,366,110,378,98,380,77,390,71"
    }
  ];
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
