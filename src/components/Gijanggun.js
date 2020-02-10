import React from "react";
import Candidates from "./Candidates";

const Gijanggun = () => {
  return (
    <div>
      <Candidates
        src="data:image/jpeg;base64,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"
        dang="바른미래당"
        kiho="1"
        name="김길현"
        introduce="세계를 변화시키겠습니다"
        desc1="안녕하세요나는울산북구를존나게멋지게만들게요배고프다집에뭐먹을거있었나왜나는코딩만시작하면 왤케 배가고픈건지 모르겠다."
        desc2="하늘에 와이파이를"
        desc3="새로운 세계로"
      />
      <Candidates
        src="data:image/jpeg;base64,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"
        dang="대한애국당"
        kiho="2"
        name="아이언맨"
        introduce="일론 머스크보다 나아욤"
        desc1="gkgkdl"
        desc2="돈많음"
        desc3="헤헿"
      />
    </div>
  );
};

export default Gijanggun;
