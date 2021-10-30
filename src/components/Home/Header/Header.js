import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <div className="container header-div">
                <div className="header-text">
                    <h1>Quality Learning</h1>
                    <h2>For Every Child</h2>
                    <button className="explore">Explore Classes </button>
                </div>
            </div>
            <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9B4DB" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,256C320,267,400,277,480,266.7C560,256,640,224,720,224C800,224,880,256,960,266.7C1040,277,1120,267,1200,261.3C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
            <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,256C320,267,400,277,480,266.7C560,256,640,224,720,224C800,224,880,256,960,266.7C1040,277,1120,267,1200,261.3C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </section>
    );
};

export default Header;