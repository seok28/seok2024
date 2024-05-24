import React from "react";

const skillText= [
    {
    title:"프런트엔드 개발자를 꿈꾸다.",
    desc: "나는 어려서부터 컴퓨터에 관심이 많았다. 학창시절부터 컴퓨터에 관심이 있어 알아보다 컴퓨터 개발을 주 목적으로 하는 직업이 있어서 대학 진로를 이 진로로 정하고 진학하게 되었다. 현재까지 프런트엔드 개발자를 꿈꾸며 살아가고 있다.",
    },
    {
    title:"열심히 할수록 기회는 따른다.",
    desc:"운이 좋은 사람은 없다. 단지 운을 만들 뿐이다. 운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은일에 몰두하면 된다. 몰두하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어내는 것이다.",
    },
    {
    title:"나에게 정직하다.",
    desc:"정직은 다른사람보다 나에게 큰 의미를 부여해야한다. 자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다. 마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게된다.",
    },
];


const Skill =() => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                Challenge<em>나의 도전</em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key)=> (
                        <div key={key}>
                            <span>{key +1}</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;