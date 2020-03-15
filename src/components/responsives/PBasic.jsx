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
  const chungcheongbukdoBack = {
    backgroundColor: "#bddfaa"
  };
  const jeollabukdoBack = {
    backgroundColor: "#d6d3ef"
  };
  const chungcheongnamdoBack = {
    backgroundColor: "#fff3c3"
  };
  const [phoneInfo] = useState([
    {
      id: "서울",
      href: "/country/seoul",
      backgroundClass: seoulBack,
      id2: "부산",
      href2: "/country/busan",
      backgroundClass2: busanBack
    },
    {
      id: "인천",
      href: "/country/incheon",
      backgroundClass: incheonBack,
      id2: "대구",
      href2: "/country/daegu",
      backgroundClass2: daeguBack
    },
    {
      id: "대전",
      href: "/country/daejeon",
      backgroundClass: daejeonBack,
      id2: "광주",
      href2: "/country/gwangju",
      backgroundClass2: gwangjuBack
    },
    {
      id: "경기도",
      href: "/country/kyeonggido",
      backgroundClass: kyeonggidoBack,
      id2: "울산",
      href2: "/country/ulsan",
      backgroundClass2: ulsanBack
    },
    {
      id: "경상남도",
      href: "/country/gyeongsangnamdo",
      backgroundClass: gyeongsangnamdoBack,
      id2: "충청북도",
      href2: "/country/chungcheongbukdo",
      backgroundClass2: chungcheongbukdoBack
    }
    // {
    //   id: "전라북도",
    //   href: "/country/jeollabukdo",
    //   backgroundClass: jeollabukdoBack,
    //   id2: "충청남도",
    //   href2: "/country/chungcheongnamdo",
    //   backgroundClass2: chungcheongnamdoBack
    // },
    // {
    //   id: "경상북도",
    //   href: "/country/jeollabukdo",
    //   backgroundClass: jeollabukdoBack,
    //   id2: "강원도",
    //   href2: "/country/chungcheongnamdo",
    //   backgroundClass2: chungcheongnamdoBack
    // },
    // {
    //   id: "전라남도",
    //   href: "/country/jeollabukdo",
    //   backgroundClass: jeollabukdoBack,
    //   id2: "제주도",
    //   href2: "/country/chungcheongnamdo",
    //   backgroundClass2: chungcheongnamdoBack
    // }
  ]);
  return (
    <div className="circleContainer boxsizing">
      <PCircle phoneInfo={phoneInfo} />
    </div>
  );
};

export default PBasic;

const PCircle = props => {
  const circleList = props.phoneInfo.map(info => (
    <div className="circleWrapper ">
      <Link to={info.href} className="phoneLink">
        <div className="borderradius" style={info.backgroundClass}>
          {info.id}
        </div>
      </Link>
      <Link to={info.href2} className="phoneLink">
        <div className="borderradius " style={info.backgroundClass2}>
          {info.id2}
        </div>
      </Link>
      <Link to={info.href2} className="phoneLink">
        <div className="borderradius " style={info.backgroundClass2}>
          {info.id2}
        </div>
      </Link>
    </div>
  ));
  return <>{circleList}</>;
};
