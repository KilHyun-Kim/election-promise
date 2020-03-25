import React from "react";

import "../css/Basic.css";
import { GoAlert } from "react-icons/go";

const Notice = () => {
  return (
    <div className="notice boxsizing">
      <p>
        <GoAlert size={20} color="blue" />
        알립니다!
        <GoAlert size={20} color="blue" />
      </p>
      <ul>
        <li className="fontEmphasize">
          현재 개발 중인 사이트입니다.
          <br /> 테스트용 입니다.
          <br />
          3.27 업로드 예정 입니다.
        </li>
        <li className="fontEmphasize">
          <hr />
          지도에서 부산을 클릭후
          <br /> <span>해운대구</span>로 들어가주세요!
        </li>
        <li className="fontEmphasize">
          <hr />
          이 사이트를 보고 피드백을 주세요!
          <br />
          직접 연락을 해주시거나
          <br />
          rlaarlfgus@gmail.com 으로
          <br />
          피드백 주시면 감사하겠습니다!
        </li>

        <li>
          이 사이트의 목적은 2020.4.15에 시행하는 제 21대 대한민국 국회의원
          선거의 각 지역 후보들의 정보와 공약을 선거권을 가진 사람들이 손쉽게
          접근할 수 있기 위해 만든 웹 사이트 입니다.
        </li>
        {/* <li>
          "이 사이트는 <span>절대</span> 상업적으로 사용하지 않습니다."
        </li>
        <li>
          "이 사이트는 <span>절대</span> 정치적인 목적이 존재하지 않습니다."
        </li>
        <li>
          "이 사이트는 <span>절대</span> 금전적인 교류를 허용하지 않습니다."
        </li>
        <li>
          "이 사이트는 <span>절대</span> 위에 쓴 목적과는 다르게 쓰이지
          않습니다."
        </li> */}
        {/* <li className="fontEmphasize">"Made by KiliKili"</li> */}
      </ul>
    </div>
  );
};

export default Notice;
