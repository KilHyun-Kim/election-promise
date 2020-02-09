import React from "react";
import koreaMap from "../image/koreamap (1).jpg";
import "../css/Basic.css";
import AriaTag from "./AriaTag";
const Basic = () => {
  return (
    <div>
      <div className="planetmap">
        <img
          src={koreaMap}
          usemap="#menuMap"
          alt="남한사진"
          name="img"
          className="backgroundimage"
        />
        <map name="menuMap">
          <AriaTag
            id="busanArea1"
            href="/busan"
            coords="466,434,477,443,469,446,465,474,443,478,430,482,429,487,413,479,405,485,407,493,391,494,390,481,409,466,422,474,429,470,429,460,449,446"
          />
        </map>
      </div>
    </div>
  );
};

export default Basic;
