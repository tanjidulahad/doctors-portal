import React from 'react';
import './AboutUs.css';
import img from '../../images/about.png'

const AboutUs = () => {
    return (
        <div>
            <div className="container about ">
                <div className="row my-5 d-flex align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p>We aim to be the first-choice destination for healthcare. Within our centres, patients can access a range of allied health practitioners and specialists who supplement the family general practice to deliver the best primary care. We achieve this by partnering with exceptional doctors who share our vision.</p>
                        <p>We are building a leading socially responsible medical organisation and we provide excellent facilities for doctors to practice family medicine.</p>
                    </div>
                    <div className="col-md-6 ">
                        <img src={img} alt="" />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default AboutUs;