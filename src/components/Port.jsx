import React from "react";

import port1 from "../assets/img/port1.jpg"; 

const Port = () => {
    return (
        <section id="port">
            <div className="port__inner">
                <div className="port__title">
                    portfolio<em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    <article className="port__item p1">
                        <span className="num">01.</span>
                        <a href="https://github.com/seok28/_mbti" target="_blank" className="img" rel="noreferrer">
                            <img src= {port1} alt="mbti 검사" />
                        </a>
                        <h3 className="title">나와 성격이 닮은 고양이 종 찾기(MBTI) </h3>
                        <p className="desc">
                            리액트를 이용하여 MBTI 검사를 간단한 질문과 답을 통하여 각 질문에 따른 결과 값을 
                            객체 형식으로 만들어 리스트로 받아와서 결과 값에 따라 MBTI 결과가 도출되면 비슷한 성격 유형을 가진 mbti 검사 사이트 입니다.
                        </p>
                        <a href="https://catmbti0928.netlify.app/" target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Port;