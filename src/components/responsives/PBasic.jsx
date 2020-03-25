import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/PhoneVersion.css";

const PBasic = () => {
  const seoulBack = {
    backgroundColor: "#f2bea9"
  };
  const busanBack = {
    backgroundColor: "#9bce95"
  };
  const incheonBack = {
    backgroundColor: "#e2bea9"
  };
  const daeguBack = {
    backgroundColor: "#c8e392"
  };
  const daejeonBack = {
    backgroundColor: "#ffeaa5"
  };
  const gwangjuBack = {
    backgroundColor: "#aecef2"
  };
  const kyeonggidoBack = {
    backgroundColor: "#ffcfba"
  };
  const ulsanBack = {
    backgroundColor: "#9bce95"
  };
  const gyeongsangnamdoBack = {
    backgroundColor: "#d6e9a5"
  };
  const gyeongsangbukdoBack = {
    backgroundColor: "#a8c879"
  };
  const chungcheongbukdoBack = {
    backgroundColor: "#bddfaa"
  };
  const jeollabukdoBack = {
    backgroundColor: "#AC99C1"
  };
  const jeollanamdoBack = {
    backgroundColor: "#96b1d0"
  };
  const chungcheongnamdoBack = {
    backgroundColor: "#fff3c3"
  };
  const gangwondoBack = {
    backgroundColor: "#deaa7d"
  };
  const jejuBack = {
    backgroundColor: "#678FAE"
  };
  const [phoneInfo] = useState([
    {
      id: "서울",
      href: "/country/seoul",
      backgroundClass: seoulBack
    },
    {
      id: "부산",
      href: "/country/busan",
      backgroundClass: busanBack
    },
    {
      id: "인천",
      href: "/country/incheon",
      backgroundClass: incheonBack
    },
    {
      id: "대구",
      href: "/country/daegu",
      backgroundClass: daeguBack
    },
    {
      id: "대전",
      href: "/country/daejeon",
      backgroundClass: daejeonBack
    },
    {
      id: "광주",
      href: "/country/gwangju",
      backgroundClass: gwangjuBack
    },
    {
      id: "경기도",
      href: "/country/kyeonggido",
      backgroundClass: kyeonggidoBack
    },
    {
      id: "울산",
      href: "/country/ulsan",
      backgroundClass: ulsanBack
    },
    {
      id: "경상남도",
      href: "/country/gyeongsangnamdo",
      backgroundClass: gyeongsangnamdoBack
    },
    {
      id: "충청북도",
      href: "/country/chungcheongbukdo",
      backgroundClass: chungcheongbukdoBack
    },
    {
      id: "전라북도",
      href: "/country/jeollabukdo",
      backgroundClass: jeollabukdoBack
    },
    {
      id: "충청남도",
      href: "/country/chungcheongnamdo",
      backgroundClass: chungcheongnamdoBack
    },
    {
      id: "경상북도",
      href: "/country/gyeongsangbukdo",
      backgroundClass: gyeongsangbukdoBack
    },
    {
      id: "강원도",
      href: "/country/gangwondo",
      backgroundClass: gangwondoBack
    },
    {
      id: "전라남도",
      href: "/country/jeollabukdo",
      backgroundClass: jeollanamdoBack
    },
    {
      id: "제주도",
      href: "/country/jeju",
      backgroundClass: jejuBack
    }
  ]);
  return (
    <div className="circleContainer boxsizing">
      <PCircle phoneInfo={phoneInfo} />
    </div>
  );
};

export default PBasic;

export const PCircle = props => {
  console.log(props.phoneInfo);
  const circleList = props.phoneInfo.map(info => (
    <div className="circleWrapper ">
      <Link to={info.href} className="phoneLink">
        <div className="borderradius" style={info.backgroundClass}>
          {info.id}
        </div>
      </Link>
    </div>
  ));
  return <>{circleList}</>;
};

// <Link to={info.href2} className="phoneLink">
//   <div className="borderradius " style={info.backgroundClass2}>
//     {info.id2}
//   </div>
// </Link>
// <Link to={info.href3} className="phoneLink">
//   <div className="borderradius " style={info.backgroundClass3}>
//     {info.id3}
//   </div>
// </Link>
