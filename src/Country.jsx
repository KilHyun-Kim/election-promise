import React from "react";
import Notice from "./components/Notice";
import Region from "./components/Region";
import BusanImg from "./image/Busan (1).jpg";
import UlsanImg from "./image/Ulsan.jpg";
import Gyeongsangnamdo from "./image/Gyeongsangnamdo.jpg";
import Gyeongsangbukdo from "./image/Gyeongsangbukdo.gif";
import Daegu from "./image/Daegu.png";
import Gangwondo from "./image/Gangwondo.png";
import Kyeonggido from "./image/Kyeonggido.jpg";
import Incheon from "./image/Incheon.gif";
import Chungcheongbukdo from "./image/Chungcheongbukdo.jpg";
import Chungcheongnamdo from "./image/Chungcheongnamdo.jpg";
import Daejeon from "./image/Daejeon.gif";
import Jeollabukdo from "./image/Jeollabukdo.jpg";
import Jeollanamdo from "./image/Jeollanamdo.jpg";
import Gwangju from "./image/Gwangju.gif";
import Jeju from "./image/Jeju.gif";
const data = {
  busan: {
    alt: "부산지도",
    imgSrc: BusanImg,
    name: "img2",
    useMap: "#busanAria",
    mapName: "busanAria",
    values: [
      {
        id: "busanAria1",
        href: "/country/busan/haeundaegu",
        coords:
          "406,201,433,235,421,256,447,271,451,282,458,272,469,268,477,292,468,294,457,322,445,328,433,318,418,327,411,326,400,325,377,293,370,258,378,249,379,237"
      },
      {
        id: "busanAria2",
        href: "/country/busan/gijanggun",
        coords:
          "386,51,417,54,430,66,441,66,445,58,454,53,461,41,453,22,476,28,487,29,503,22,513,23,530,18,554,56,549,78,575,94,566,114,549,98,529,111,527,162,521,171,503,185,519,191,524,197,514,209,507,238,496,235,492,246,499,260,494,282,491,290,479,290,469,260,453,273,428,254,439,234,404,193,381,187,383,157,389,145,365,127,366,110,378,98,380,77,390,71"
      },
      {
        id: "busanAria3",
        href: "/busan/geumjeonggu",
        coords:
          "311,144,331,148,367,127,385,148,378,161,378,189,402,199,376,237,377,248,370,255,348,246,338,232,317,233,301,229,305,216,300,195,291,192,299,182,300,174"
      },
      {
        id: "busanAria4",
        href: "/busan/bukgu",
        coords:
          "247,223,265,173,289,168,297,173,296,182,288,190,290,198,298,199,302,216,298,230,315,237,303,250,303,262,276,274,271,280,240,271,251,259,249,223"
      },
      {
        id: "busanAria5",
        href: "/busan/geumjeonggu",
        coords:
          "311,144,331,148,367,127,385,148,378,161,378,189,402,199,376,237,377,248,370,255,348,246,338,232,317,233,301,229,305,216,300,195,291,192,299,182,300,174"
      },
      {
        id: "busanAria6",
        href: "/busan/geumjeonggu",
        coords:
          "311,144,331,148,367,127,385,148,378,161,378,189,402,199,376,237,377,248,370,255,348,246,338,232,317,233,301,229,305,216,300,195,291,192,299,182,300,174"
      },
      {
        id: "busanAria7",
        href: "/busan/geumjeonggu",
        coords:
          "311,144,331,148,367,127,385,148,378,161,378,189,402,199,376,237,377,248,370,255,348,246,338,232,317,233,301,229,305,216,300,195,291,192,299,182,300,174"
      },
      {
        id: "busanAria8",
        href: "/busan/gangseogu",
        coords:
          "31,331,56,326,67,332,82,328,89,317,99,312,134,324,125,308,122,292,108,265,138,247,152,251,149,243,156,242,165,254,181,238,244,226,246,261,209,286,207,353,181,391,175,410,151,426,134,415,125,434,111,430,105,411,81,405,76,394,89,390,71,364,57,366"
      },
      {
        id: "busanAria9",
        href: "/busan/sasanggu",
        coords:
          "254,283,273,287,269,298,258,304,267,336,265,346,250,350,256,366,237,368,227,378,206,366,213,355,216,290,236,274"
      },
      {
        id: "busanAria10",
        href: "/busan/jingu",
        coords:
          "274,354,268,349,273,333,266,305,281,295,276,277,301,270,298,282,306,291,318,292,317,300,335,301,337,328,318,336,318,344,296,338,285,353"
      },
      {
        id: "busanAria11",
        href: "/busan/namgu",
        coords:
          "376,356,389,369,389,395,384,399,371,393,356,403,356,386,328,386,333,369,325,361,323,338,340,336,345,323,351,321,352,324,360,343"
      },
      {
        id: "busanAria12",
        href: "/busan/sahagu",
        coords:
          "251,475,245,466,244,454,225,458,230,462,237,470,220,469,227,478,214,486,214,470,204,463,203,414,207,394,193,397,195,418,180,421,185,394,199,374,217,376,225,383,243,370,259,395,265,414,265,424,245,424"
      },
      {
        id: "busanAria13",
        href: "/busan/seodongjoonggu",
        coords:
          "270,465,266,443,257,428,269,424,269,406,264,392,253,376,264,362,269,358,292,358,302,342,319,351,321,370,313,371,305,367,305,378,294,403,283,405,284,426,272,433,278,450"
      },
      {
        id: "busanAria14",
        href: "/busan/yeongdogu",
        coords:
          "354,462,344,462,336,450,329,450,323,434,291,418,292,410,303,406,309,401,321,400,342,422,342,432,348,434,342,438,358,453"
      },
      {
        id: "busanAria15",
        href: "/busan/yeongdogu",
        coords:
          "354,462,344,462,336,450,329,450,323,434,291,418,292,410,303,406,309,401,321,400,342,422,342,432,348,434,342,438,358,453"
      },
      {
        id: "busanAria16",
        href: "/busan/yeongdogu",
        coords:
          "354,462,344,462,336,450,329,450,323,434,291,418,292,410,303,406,309,401,321,400,342,422,342,432,348,434,342,438,358,453"
      },
      {
        id: "busanAria17",
        href: "/busan/yeongdogu",
        coords:
          "354,462,344,462,336,450,329,450,323,434,291,418,292,410,303,406,309,401,321,400,342,422,342,432,348,434,342,438,358,453"
      }
    ]
  },
  ulsan: {
    alt: "울산지도",
    imgSrc: UlsanImg,
    name: "img2",
    useMap: "#ulsanAria",
    mapName: "ulsanAria",
    values: [
      {
        id: "ulsanAria1",
        href: "/country/ulsan/bukgu",
        coords:
          "376,100,399,77,407,81,417,67,442,57,465,70,478,62,505,74,527,91,542,87,549,95,543,105,548,122,575,146,577,158,571,165,571,174,553,188,542,195,519,195,513,200,510,212,504,212,506,232,501,232,502,242,510,250,503,259,492,251,488,257,445,213,446,190,443,186,441,166,425,157,422,162,419,157,412,157,403,167,379,166,377,158,382,151,379,131,381,121,379,113,379,106"
      },
      {
        id: "ulsanAria2",
        href: "/country/ulsan/donggu",
        coords:
          "551,187,565,200,565,214,556,226,556,243,549,249,550,262,553,268,549,274,553,286,529,313,515,312,497,320,491,310,497,295,489,277,488,257,494,256,505,261,512,246,504,241,502,234,505,230,505,215,513,210,514,202,520,199,542,197"
      },
      {
        id: "ulsanAria3",
        href: "/country/ulsan/junggu",
        coords:
          "377,167,387,166,397,170,412,164,413,160,420,158,422,164,432,162,440,171,440,189,445,194,441,202,442,214,448,218,409,220,399,215,391,218,388,225,377,225,369,215,350,216,343,185,354,174,363,181,378,179"
      },
      {
        id: "ulsanAria4",
        href: "/country/ulsan/namgu",
        coords:
          "330,222,325,226,329,241,346,243,369,258,385,285,408,291,413,303,431,304,444,324,467,338,463,328,494,312,490,301,496,294,484,275,484,257,453,224,411,225,402,220,393,221,389,228,373,227,369,220"
      },
      {
        id: "ulsanAria5",
        href: "/country/ulsan/uljugun",
        coords:
          "30,211,36,226,50,230,60,250,136,272,136,282,162,282,171,290,184,294,185,310,197,317,198,329,218,338,224,353,249,365,265,366,277,358,287,363,283,374,301,388,301,401,283,414,293,430,309,430,331,419,346,421,357,426,376,454,374,462,373,475,399,491,404,503,427,488,429,482,463,467,475,344,464,335,437,319,429,307,412,303,399,292,384,290,361,258,325,243,321,223,333,215,342,214,337,191,331,183,356,169,365,174,375,173,373,153,381,147,377,124,380,119,376,102,343,95,333,73,345,52,333,34,293,25,286,14,250,15,241,21,229,17,222,10,185,38,174,32,157,38,141,44,133,60,136,97,148,106,141,115,115,100,108,103,104,118,96,124,88,119,64,130,60,140,83,146,87,170,65,192,36,202"
      }
    ]
  },
  gyeongsangnamdo: {
    alt: "경상남도지도",
    imgSrc: Gyeongsangnamdo,
    name: "img3",
    useMap: "#gyeongsangnamdoAria",
    mapName: "gyeongsangnamdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  gyeongsangbukdo: {
    alt: "경상북도지도",
    imgSrc: Gyeongsangbukdo,
    name: "img4",
    useMap: "#gyeongsangbukdoAria",
    mapName: "gyeongsangbukdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  daegu: {
    alt: "대구지도",
    imgSrc: Daegu,
    name: "img5",
    useMap: "#daeguAria",
    mapName: "daeguAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  gangwondo: {
    alt: "강원도지도",
    imgSrc: Gangwondo,
    name: "img6",
    useMap: "#gangwondoAria",
    mapName: "gangwondoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  kyeonggido: {
    alt: "경기도지도",
    imgSrc: "https://www.epost.go.kr/images/comm/2013/popup/map_kyunggi.gif",
    name: "img7",
    useMap: "#kyeonggidoAria",
    mapName: "kyeonggidoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  seoul: {
    alt: "서울지도",
    imgSrc: "https://miro.medium.com/max/960/1*rCDeP3WlpyHxc3zCob64xg.gif",
    name: "img7",
    useMap: "#kyeonggidoAria",
    mapName: "kyeonggidoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  //서울리
  incheon: {
    alt: "인천지도",
    imgSrc: Incheon,
    name: "img7",
    useMap: "#incheonAria",
    mapName: "incheonAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  chungcheongbukdo: {
    alt: "충청북도지도",
    imgSrc: Chungcheongbukdo,
    name: "img7",
    useMap: "#chungcheongbukdoAria",
    mapName: "chungcheongbukdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  chungcheongnamdo: {
    alt: "충청남도지도",
    imgSrc: Chungcheongnamdo,
    name: "img7",
    useMap: "#chungcheongnamdoAria",
    mapName: "chungcheongnamdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  daejeon: {
    alt: "대전지도",
    imgSrc: Daejeon,
    name: "img7",
    useMap: "#daejeonAria",
    mapName: "daejeonAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  jeollabukdo: {
    alt: "전라북도지도",
    imgSrc: Jeollabukdo,
    name: "img7",
    useMap: "#jeollabukdoAria",
    mapName: "jeollabukdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  jeollanamdo: {
    alt: "전라남도지도",
    imgSrc: Jeollanamdo,
    name: "img7",
    useMap: "#jeollanamdoAria",
    mapName: "jeollanamdoAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  gwangju: {
    alt: "광주지도",
    imgSrc: Gwangju,
    name: "img7",
    useMap: "#gwangjuAria",
    mapName: "gwangjuAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  },
  jeju: {
    alt: "제주지도",
    imgSrc: Jeju,
    name: "img7",
    useMap: "#jejuAria",
    mapName: "jejuAria",
    values: [
      {
        id: "",
        href: "",
        coords: ""
      }
    ]
  }
  //
};

const Country = ({ match }) => {
  const { username } = match.params;

  // console.log(username);
  const country = data[username];
  if (!country) {
    return <div> 없는 지역 입니다.</div>;
  }
  return (
    <div className="BasicContainer">
      <Notice />
      <div className="planetmap boxsizing">
        <Region
          alt={country.alt}
          imgSrc={country.imgSrc}
          name={country.name}
          useMap={country.useMap}
          mapName={country.mapName}
          values={country.values}
        />
      </div>
    </div>
  );
};

export default Country;
