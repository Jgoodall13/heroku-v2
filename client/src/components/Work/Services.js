import React from 'react';

import House1 from '../../images/work/inhouse_img1.jpg';
import House2 from '../../images/work/inhouse_img2.jpg';
import House3 from '../../images/work/inhouse_img3.jpg';

const Services = () => {
    return (
        <div className="container-fluid how-we-do">
            <div className="row">
                <div className="col-md-5 work-images-odd">
                    <img src={House1} className="about-hats" alt="" />
                    <img src={House2} className="about-corona" alt="" />
                    <img src={House3} className="work-music" alt="about-music" />
                </div>
                <div className="container col-md-7 how-we-service">
                    <h4 className="programs-orange">In-house Services</h4>
                    <p className="programs-paragraph">Our in-house services provide impeccable quality, affordable prices and ultimate quality assurance. Need a different type of printing method? Not a problem; through our extensive network of supplier partners we can complete any job.</p>
                    <div className="row">
                        <div className="col-md-6 work-program-links">
                            Pad Printing
                        </div>
                        <div className="col-md-6 work-program-links">
                            Embroidery
                        </div>
                        <div className="col-md-6 work-program-links">
                            Screen Printing
                        </div>
                        <div className="col-md-6 work-program-links">
                            Digitizing and Banner Production
                        </div>
                        <div className="col-md-6 work-program-links">
                            Hot Stamping
                        </div>
                        <div className="col-md-6 work-program-links">
                            ... And much more!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;