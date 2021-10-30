import React from 'react';
import sport from '../../../images/trophy.png';
import friendly from '../../../images/friendship.png';
import multimedia from '../../../images/projector.png';
import './Welcome.css';
import drawings from '../../../images/drawing.jpg';

const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <div className="text-center">
                    <h1 className="welcome-header"><span style={{color: '#423F8D'}}>Welcome to our</span> Kindergarten</h1>
                    <p className="welcome-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem hic quibusdam in quas, corporis fugit quaerat ducimus fugiat reiciendis dolore! Inventore nihil ea nesciunt qui rem necessitatibus, dicta aliquid?</p>
                </div>
                <div className="row">
                    <div className="col-md-4 facilities">
                        <div className="facility shadow">
                            <div>
                                <img src={sport} alt="" />
                            </div>
                            <div>
                                <h3 style={{color: '#1F97D4'}}>Inter School Sports</h3>
                                <p style={{color: '#423F8D'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="facility shadow">
                            <div>
                                <img src={friendly} alt="" />
                            </div>
                            <div>
                                <h3 style={{color: '#FBCE0F'}}>Friendly Environment</h3>
                                <p style={{color: '#423F8D'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="facility shadow">
                            <div>
                                <img src={multimedia} alt="" />
                            </div>
                            <div>
                                <h3 style={{color: '#12D9DF'}}>Multimedia Class</h3>
                                <p style={{color: '#423F8D'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 drawing">
                        <img src={drawings} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
