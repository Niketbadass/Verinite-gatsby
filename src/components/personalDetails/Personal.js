import React from 'react'

const PersonalData = props => {
  const {
    name,
    subTitle,
    personalImg,
    description,
    heading,
    designation,
  } = props
  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-11">
        <div className="personal_details text-center">
          <img src={personalImg} className="leader_img" alt="" />
          <h5 className="mt_20">{name}</h5>
          <p className="mt_10">{designation}</p>
          <div className="social_icon mt_25">
            <a href="!#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="!#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <h6 className="mt_40">{subTitle}</h6>
        </div>
        <h6 className="text-center mt_45 about_title">{heading}</h6>
        <p className="mt_25">{description}</p>
      </div>
    </div>
  )
}
export default PersonalData
