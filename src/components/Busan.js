import React from "react";
import "../css/Busan.css";
import BusanImg from "../image/Busan (1).jpg";
import AriaTag from "./AriaTag";
const Busan = () => {
  return (
    <div>
      <div className="planetmap">
        <img alt="부산지도" src={BusanImg} name="img2" useMap="#busanAria" />

        <map name="busanAria">
          <AriaTag
            id="busanAria1"
            href="/busan/haeundaegu"
            coords="406,201,433,235,421,256,447,271,451,282,458,272,469,268,477,292,468,294,457,322,445,328,433,318,418,327,411,326,400,325,377,293,370,258,378,249,379,237"
          />
          <AriaTag
            id="busanAria2"
            href="/busan/gijanggun"
            coords="386,51,417,54,430,66,441,66,445,58,454,53,461,41,453,22,476,28,487,29,503,22,513,23,530,18,554,56,549,78,575,94,566,114,549,98,529,111,527,162,521,171,503,185,519,191,524,197,514,209,507,238,496,235,492,246,499,260,494,282,491,290,479,290,469,260,453,273,428,254,439,234,404,193,381,187,383,157,389,145,365,127,366,110,378,98,380,77,390,71"
          />
          <AriaTag
            id="busanAria3"
            href="/busan/geumjeonggu"
            coords="311,144,331,148,367,127,385,148,378,161,378,189,402,199,376,237,377,248,370,255,348,246,338,232,317,233,301,229,305,216,300,195,291,192,299,182,300,174"
          />
          <AriaTag
            id="busanAria4"
            href="/busan/bukgu"
            coords="247,223,265,173,289,168,297,173,296,182,288,190,290,198,298,199,302,216,298,230,315,237,303,250,303,262,276,274,271,280,240,271,251,259,249,223"
          />
          <AriaTag
            id="busanAria5"
            href="/busan/dongnaegu"
            coords="315,277,337,267,356,277,372,278,365,254,338,247,334,234,319,238,306,251,305,268,297,270"
          />
          <AriaTag
            id="busanAria6"
            href="/busan/yeonjegu"
            coords="342,321,351,318,352,298,365,292,371,296,375,290,371,281,349,279,337,272,315,281,307,278,301,278,306,286,320,289,321,296,337,299,338,318"
          />
          <AriaTag
            id="busanAria7"
            href="/busan/suyeonggu"
            coords="374,350,377,342,377,326,393,324,393,316,377,298,369,301,361,295,353,303,354,321,359,326,363,341"
          />
          <AriaTag
            id="busanAria8"
            href="/busan/gangseogu"
            coords="31,331,56,326,67,332,82,328,89,317,99,312,134,324,125,308,122,292,108,265,138,247,152,251,149,243,156,242,165,254,181,238,244,226,246,261,209,286,207,353,181,391,175,410,151,426,134,415,125,434,111,430,105,411,81,405,76,394,89,390,71,364,57,366"
          />
          <AriaTag
            id="busanAria9"
            href="/busan/sasanggu"
            coords="254,283,273,287,269,298,258,304,267,336,265,346,250,350,256,366,237,368,227,378,206,366,213,355,216,290,236,274"
          />
          <AriaTag
            id="busanAria10"
            href="/busan/jingu"
            coords="274,354,268,349,273,333,266,305,281,295,276,277,301,270,298,282,306,291,318,292,317,300,335,301,337,328,318,336,318,344,296,338,285,353"
          />
          <AriaTag
            id="busanAria11"
            href="/busan/namgu"
            coords="376,356,389,369,389,395,384,399,371,393,356,403,356,386,328,386,333,369,325,361,323,338,340,336,345,323,351,321,352,324,360,343"
          />
          <AriaTag
            id="busanAria12"
            href="/busan/sahagu"
            coords="251,475,245,466,244,454,225,458,230,462,237,470,220,469,227,478,214,486,214,470,204,463,203,414,207,394,193,397,195,418,180,421,185,394,199,374,217,376,225,383,243,370,259,395,265,414,265,424,245,424"
          />
          <AriaTag
            id="busanAria13"
            href="/busan/seodongjoonggu"
            coords="270,465,266,443,257,428,269,424,269,406,264,392,253,376,264,362,269,358,292,358,302,342,319,351,321,370,313,371,305,367,305,378,294,403,283,405,284,426,272,433,278,450"
          />
          <AriaTag
            id="busanAria14"
            href="/busan/yeongdogu"
            coords="354,462,344,462,336,450,329,450,323,434,291,418,292,410,303,406,309,401,321,400,342,422,342,432,348,434,342,438,358,453"
          />
        </map>
      </div>
    </div>
  );
};

export default Busan;
// 406,201,433,235,421,256,447,271,451,282,458,272,469,268,477,292,468,294,457,322,445,328,433,318,418,327,411,326,400,325,377,293,370,258,378,249,379,237