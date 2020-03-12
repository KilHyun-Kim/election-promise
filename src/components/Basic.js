import React from "react";
import koreaMap from "../image/koreamap (1).jpg";
import AriaTag from "./AriaTag";
import Notice from "./Notice";

const Basic = () => {
  return (
    <div className="BasicContainer">
      <Notice />
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
            href="/country/busan"
            coords="466,434,477,443,469,446,465,474,443,478,430,482,429,487,413,479,405,485,407,493,391,494,390,481,409,466,422,474,429,470,429,460,449,446"
          />
          <AriaTag
            id="ulsanArea"
            href="/country/ulsan"
            coords="492,396,481,443,472,441,471,428,463,424,458,425,445,416,454,398,458,388,465,387,475,392,477,397,483,399,484,394,490,396"
          />
        </map>
      </div>
    </div>
  );
};

export default Basic;
