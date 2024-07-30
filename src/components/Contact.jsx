import React from "react";

const contactText = [
    {
        link:"https://open.kakao.com/o/sYCUFYFg",
        title:"KAKAO : SEOK28",
    },
    {
        link:"mailto:seokjoonsoo@naver.com",
        title:"E-mail : SEOKJOONSOO@NAVER.COM",
    },
];

const Contact = () => {
    return(
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact,key)=> (
                            <div key={key}>
                                <a
                                href={contact.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                    {contact.title}
                                </a>
                                </div>
                        ))}
                        <div>   
                        </div>
                        <div>
                           
                        </div>
                    </div>
                </div>
                <div className="contact__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;