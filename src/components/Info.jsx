import React from "react";
import "../css/Info.css";

const Info = () => {
  return (
    <div className="infoContainer">
      <div className="explainWrapper boxsizing">
        <div className="_why question">
          <h1>왜 이 사이트를 만들었나?</h1>
          <h2>사이트를 만들게된 계기</h2>
          <hr />
          <p>대한민국 국민의 한 사람으로서 </p>
          <p>
            이번 2020.4.15 국회의원 선거를 통하여 국가의 주인인 국민이 자신이
            생각하는 훌륭한 국회의원에게 투표하여 보다 더 나은 대한민국의 미래를
            함께 만들어 보고자 이 사이트를 만들게 되었습니다.
          </p>
          <p>
            위의 계기로 내가 할 수 있는 일이 무엇인지를 생각하던 도중, 각 구마다
            국회의원의 아주 간단한 정보, 공약등을 정리하여 모아두는 사이트가
            있으면 좋다고 판단하여 만들게 되었습니다.
          </p>
        </div>
        <div className="_how question">
          <h1>어떻게 사이트를 만들었나?</h1>
          <h2>기술에 대하여</h2>
          <hr />
          <p>
            1. 기본적으로 초기 기획 및 목표를 간단한 사이트로 정했기 때문에
            SPA(Single Page Application)로 정하였습니다.
          </p>
          <p>
            2. React를 사용하여 구현하였고, react-router-dom를 사용하여 url의
            match 객체를 사용하여 간편하게 Component들을 작성 하였습니다.
          </p>

          <p>
            3. AWS (Amazon Web Service)의 S3(Simple Storage Service)를 사용하여
            SPA를 호스팅 하였습니다.
          </p>
          <p>4. AWS의 Route53을 사용하여 도메인을 설정 하였습니다.</p>
        </div>
        <div className="devInfo question">
          <h1>개발자 정보</h1>
          <hr />
          <p>현재는 프론트엔드 개발자가 되기 위한,</p>
          <p>미래에는 풀스텍 개발자가 되고싶은 취준생 개발자,</p>
          <p className="emphasize">Made by Kilikili</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
/* <div className="sequenceWrapper">
  <div className="sequenceList  boxsizing">
    <div className="clickScroll">
      <p className="clickP">목록을 클릭하세요.</p>
      <p>목록으로 스크롤이 이동합니다.</p>
    </div>
    <div className="clickScroll">
      <ul>
        <li>
          <p>1. 왜 이 사이트를 만들었나?</p>
        </li>
        <li>
          <p>2. 어떻게 사이트를 만들었나?</p>
        </li>
        <li>
          <p>3. 개발자 정보</p>
        </li>
      </ul>
    </div>
  </div>
</div> */
