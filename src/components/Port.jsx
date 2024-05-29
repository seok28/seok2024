import React from "react";

import port1 from "../assets/img/port1.jpg"; 
import port2 from "../assets/img/port2.jpg";
import port3 from "../assets/img/port3.jpg";

const portText = [
    {
        num:"01",
        title:"나와 성격이 닮은 고양이 종 찾기(MBTI)",
        desc:"리액트를 이용하여 MBTI 검사를 간단한 질문과 답을 통하여 각 질문에 따른 결과 값을 객체 형식으로 만들어 리스트로 받아와서 결과 값에 따라 MBTI 결과가 도출되면 비슷한 성격 유형을 가진 mbti 검사 사이트 입니다.",
        img:port1,
        code:"https://github.com/seok28/_mbti",
        view:"https://catmbti0928.netlify.app/",
        name:"고양이 mbti 검사",
    },
    {
        num:"02",
        title:"첫번째 웹 포트폴리오",
        desc:"대학교 졸업 직전 리액트 자바스크립트 코드를 사용하여 간단하게 구현한 저의 웹 포트폴리오 사이트 입니다.",
        img:port2,
        code:"https://github.com/seok28/web_portfolio",
        view:"https://seok28.github.io/web_portfolio/",
        name:"석준수 포트폴리오",
    },
    {
        num:"03",
        title:"두번째 웹 포트폴리오",
        desc:"대학졸업 후 프런트엔드 개발 취업 구인 구직 중 리액트 공부 용도로 만들어 본 저의 웹 포트폴리오 사이트 입니다.",
        img:port3,
        code:"https://github.com/seok28/seok2024",
        view:"https://seok28.github.io/seok2024/",
        name:"석준수 포트폴리오 2",
    },
];



const Port = () => {
    return (
        <section id="port">
        <div className="port__inner">
            <div className="port__title">
                portfolio <em>포폴 작업물</em>
            </div>
            <div className="port__wrap">
                {portText.map((port, key) => (
                    <article className={`port__item p${key + 1}`} key={key}>
                        <span className="num">{port.num}.</span>
                        <a href={port.code} target="_blank" className="img" rel="noreferrer">
                            <img src={port.img} alt={port.name} />
                        </a>
                        <h3 className="title">{port.title}</h3>
                        <p className="desc">{port.desc}</p>
                        <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
};

export default Port;