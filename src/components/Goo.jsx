import React from "react";
import Candidates, { Dong } from "./Candidates";
import hoobo from "../image/후보자사진.png";
import sosoc from "../image/소속당.png";
import PBasic from "./responsives/PBasic";

/* data { country {  goo [ { } , { } ] } }  */
const data = {
  busan: {
    gijanggun: [
      {
        src: hoobo,
        dangImg: sosoc,
        kiho: "1",
        name: "후보자 이름",
        introduce: '"후보자 한마디"',
        desc1: "공약란 입니다.",
        desc2: "공약란 입니다.",
        desc3: "공약란 입니다.",
        key: "busan_gijanggun_1"
      },
      {
        src: hoobo,
        dangImg: sosoc,
        kiho: "2",
        name: "후보자 이름",
        introduce: '"후보자 한마디"',
        desc1: "공약란 입니다.",
        desc2: "공약란 입니다.",
        desc3: "공약란 입니다.",
        key: "busan_gijanggun_2"
      }
    ],
    haeundaegu: [
      {
        area: "해운대구 갑",
        dong:
          "우제1동, 우제2동, 우제3동, 중제1동, 중제2동, 좌제1동, 좌제2동, 좌제3동, 좌제4동, 송정동",
        src: hoobo,
        dangImg: sosoc,
        kiho: "1",
        name: "김길현",
        introduce: '"후보자 한마디"',
        desc1: "공약란 입니다.",
        desc2: "공약란 입니다.",
        desc3: "공약란 입니다.",
        key: "busan_haeundaegu"
      },
      {
        src: hoobo,
        dangImg: sosoc,
        kiho: "2",
        name: "임우진",
        introduce: '"후보자 한마디"',
        desc1: "공약란 입니다.",
        desc2: "공약란 입니다.",
        desc3: "공약란 입니다.",
        key: "busan_haeundaegu1"
      },
      {
        area: "해운대구 을",
        dong:
          "반여제1동, 반여제2동, 반여제3동, 반여제4동, 반송제1동, 반송제2동, 재송제1동, 재송제2동",
        src: hoobo,
        dangImg: sosoc,
        kiho: "2",
        name: "후보자 이름",
        introduce: '"후보자 한마디"',
        desc1: "공약란 입니다.",
        desc2: "공약란 입니다.",
        desc3: "공약란 입니다.",
        key: "busan_haeundaegu2"
      }
    ]
  },

  ulsan: {
    bukgu: [
      {
        src: "https://static.thenounproject.com/png/567710-200.png",
        dang: "바른미래당",
        kiho: "2",
        name: "김길현12",
        introduce: "세계를 변화시키겠습니다",
        desc1:
          "안녕하세요나는울산북구를존나게멋지게만들게요배고프다집에뭐먹을거있었나왜나는코딩만시작하면 왤케 배가고픈건지 모르겠다.",
        desc2: "하늘에 와이파이를",
        desc3: "새로운 세계로2",
        key: "ulsan_bukgu"
      }
    ],
    donggu: [],
    junggu: [],
    namgu: [],
    uljugun: []
  },
  daegu: {
    junggunamgu: [],
    donggu: [],
    seogu: [],
    bukgu: [],
    suseonggu: [],
    dalseogu: [],
    dalseonggun: []
  }
};

const Goo = ({ match }) => {
  const { region } = match.params;
  const { area } = match.params;
  const sum = data[region][area];
  //   const third = data[first];
  //   console.log(third);

  if (!sum) {
    return <div className="yetDev">개발 준비 중입니다.</div>;
  }

  return (
    <>
      {sum.map(value => {
        if (value.area !== undefined) {
          return (
            <div className="GooContainer">
              <Dong area={value.area} dong={value.dong} />
              <Candidates
                src={value.src}
                dangImg={value.dangImg}
                kiho={value.kiho}
                name={value.name}
                introduce={value.introduce}
                desc1={value.desc1}
                desc2={value.desc2}
                desc3={value.desc3}
                key={value.key}
              />
            </div>
          );
        } else {
          return (
            <Candidates
              src={value.src}
              dangImg={value.dangImg}
              kiho={value.kiho}
              name={value.name}
              introduce={value.introduce}
              desc1={value.desc1}
              desc2={value.desc2}
              desc3={value.desc3}
              key={value.key}
            />
          );
        }
      })}
    </>
  );
};

export default Goo;
// src: "https://static.thenounproject.com/png/567710-200.png",
//       dang: "바른미래당",
//       kiho: "2",
//       name: "김길현12",
//       introduce: "세계를 변화시키겠습니다",
//       desc1:
//         "안녕하세요나는울산북구를존나게멋지게만들게요배고프다집에뭐먹을거있었나왜나는코딩만시작하면 왤케 배가고픈건지 모르겠다.",
//       desc2: "하늘에 와이파이를",
//       desc3: "새로운 세계로2"
