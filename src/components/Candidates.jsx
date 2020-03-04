import React from "react";
import "../css/Candidates.css";
const Candidates = props => {
  return (
    <>
      <div className="candidatesWrap">
        <div className="candidatesImage item">
          <div>
            <img src={props.src} key={props.index} />
          </div>
          <div className="__kiho">
            <h2>
              기호 {props.kiho}번 {props.name}
            </h2>
            <h3>{props.dang}</h3>
          </div>
        </div>
        <div className="__gongyark item">
          <div className="__introduce">
            <h2>{props.introduce}</h2>
          </div>
          <div className="__desc">
            <ul>
              <li>(1) {props.desc1}</li>
              <li>(2) {props.desc2}</li>
              <li>(3) {props.desc3}</li>
            </ul>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Candidates;
