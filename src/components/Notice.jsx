import React from "react";

import "../css/Basic.css";
import { GoAlert } from "react-icons/go";

const Notice = () => {
  return (
    <div className="notice">
      <p>
        <GoAlert size={20} color="blue" />
        알립니다!
        <GoAlert size={20} color="blue" />
      </p>
      <ul>
        <li>
          이 사이트의 목적은 2020.4.15에 시행하는 제 21대 대한민국 국회의원
          선거의 각 지역 후보들의 정보와 공약을 선거권을 가진 사람들이 손쉽게
          접근할 수 있기 위해 만든 웹 사이트 입니다.
        </li>
        <li>
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
        </li>
        <li className="fontEmphasize">"Made by KiliKili"</li>
      </ul>
    </div>
  );
};

export default Notice;
