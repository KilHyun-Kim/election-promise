import React from "react";
import "../css/Info.css";

const Info = () => {
  return (
    <main>
      <div className="sequenceWrapper">
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
      </div>
      <div className="explainWrapper boxsizing">
        <div>
          <h1>왜 이 사이트를 만들었나?</h1>
        </div>
        <div>
          <h1>어떻게 사이트를 만들었나?</h1>
        </div>
        <div>
          <h1>개발자 정보</h1>
        </div>
      </div>
    </main>
  );
};

export default Info;
