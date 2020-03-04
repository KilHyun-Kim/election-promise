import React from "react";
import Candidates from "./Candidates";

/* data { country {  goo [ { } , { } ] } }  */
const data = {
  busan: {
    gijanggun: [
      {
        src: "https://static.thenounproject.com/png/567710-200.png",
        dang: "바른미래당",
        kiho: "1",
        name: "김길현",
        introduce: "세계를 변화시키겠습니다",
        desc1:
          "안녕하세요나는울산북구를존나게멋지게만들게요배고프다집에뭐먹을거있었나왜나는코딩만시작하면 왤케 배가고픈건지 모르겠다.",
        desc2: "하늘에 와이파이를",
        desc3: "새로운 세계로"
      },
      {
        src: "https://static.thenounproject.com/png/567710-200.png",
        dang: "애국당",
        kiho: "2",
        name: "김밀현",
        introduce: "세계를 파괴시키겠습니다",
        desc1: "뀨 왤케 배가고픈건지 모르겠다.",
        desc2: "하늘에 와이파이를",
        desc3: "새로운 세계로"
      }
    ],
    haeundaegu: [
      {
        src: "https://static.thenounproject.com/png/567710-200.png",
        dang: "바른미래당",
        kiho: "2",
        name: "김길현12",
        introduce: "세계를 변화시키겠습니다",
        desc1:
          "안녕하세요나는울산북구를존나게멋지게만들게요배고프다집에뭐먹을거있었나왜나는코딩만시작하면 왤케 배가고픈건지 모르겠다.",
        desc2: "하늘에 와이파이를",
        desc3: "새로운 세계로2"
      },
      {}
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
        desc3: "새로운 세계로2"
      }
    ]
  }
};

const Goo = ({ match }) => {
  const { region } = match.params;
  const { area } = match.params;
  const sum = data[region][area];
  //   const third = data[first];
  //   console.log(third);
  return (
    <>
      {sum.map((value, index) => {
        return (
          <Candidates
            src={value.src}
            dang={value.dang}
            kiho={value.kiho}
            name={value.name}
            introduce={value.introduce}
            desc1={value.desc1}
            desc2={value.desc2}
            desc3={value.desc3}
            key={index}
          />
        );
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
