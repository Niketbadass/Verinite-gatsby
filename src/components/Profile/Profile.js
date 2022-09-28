import React from 'react'

const Profile = props => {
  return (
    <>
      <div className="personal_details text-center">
        <img src={props.img} className="leader_img" alt="" />

        <h5 className="mt_20">{props.name}</h5>
        <p className="mt_10">{props.desg}</p>
        {props.company ? <p className="mt_10">{props.company}</p> : ''}
        <div className="social_icon mt_25">
          {props.twitter ? (
            <a href={props.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
          ) : (
            ''
          )}
          {props.linkedin ? (
            <a href="!#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default Profile
