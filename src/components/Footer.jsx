import React from "react";

const Footer =() => {
    return(
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>seok28</span>
                    <span>석준수</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p> 회원가입, 댓글과 게시판 기능 배포 예정입니다.</p>
                    </div>
                    <div className="right">
                        <h3>SNS</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/seok28">github</a>
                                <em>깃허브에 들어오시면 저의 모든 소스를 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="https://velog.io/@seok28/posts">velog</a>
                                <em>벨로그에 들어오시면 제가 공부했던 자료들을 볼 수 있습니다.</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    2024 seok28 <br />
                    이 사이트는 리액트를 사용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;