import React from "react";

import about from "../assets/img/about.jpg";

const introText= {
    title:"FrontEnd",
    title2:"Developer",
    desc:["문구 생각 중"],
};

const Intro = () => {
    return (
        <section id="intro">
            <div class="intro__inner">
                <h1 class="intro__title">{introText.title}</h1> 
                <h1 class="intro__title">{introText.title2}</h1>
                <div class="intro__lines" aria-hidden="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <div class="intro__text">
                    <div class="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div class="img">
                        <img src={about} alt="어바웃" />
                    </div>
                </div>
                <div class="intro__lines bottom" aria-hidden="true">
                <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;