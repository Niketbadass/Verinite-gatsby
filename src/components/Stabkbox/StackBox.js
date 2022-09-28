import React from 'react'
import './StackIntegration.scss'
import { Link } from 'gatsby'


const StackBox = props =>{
    return(
        
        <div className="col-lg-4 visionbox mb_30"
            data-aos="fade-up"
            data-aos-delay="400"
            >
            <a href={props.link} className="color-para">
            <div className="row">
            <div className="col-3">
            <div className="stackimgBox">
                <img
                src={props.icon}
                />
                </div>
            </div>
            <div className="col-9 mb-auto mt-auto">
            <div className="stackContent">
                    <h6>{props.heading}</h6>
                    <p>{props.subHeading}</p>
                </div>
            </div>
            </div>
            </a>
        </div>
       
    )
}

export default StackBox