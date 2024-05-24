import React from "react";

const siteText = [
    {
        text:["make","site compliant","with"],
        title:["리액트를 이용한 사이트 제작"],
        code:["https://github.com/seok28/seok2024"],
        info : [
            "site coding",
            "production period : 1 weeks",
            "use stack : html5/css3, CSS Varible, React",
        ],
    },
    {
        text:["make","site compliant","with"],
        title:["리액트를 이용한 사이트 제작(MBTI 검사)"],
        code:["https://github.com/seok28/_mbti"],
        info : [
            "site coding",
            "production period : 1 weeks",
            "use stack : html5/css3, CSS Varible, React",
        ],
    },
];


const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Site Coding <em>나의 작업물</em>
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>코드 보기</a>   
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Site;