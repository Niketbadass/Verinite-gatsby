import React from 'react'
import { Link } from 'gatsby'

const LeadersCard = ({
  title,
  description,
  socialLinks,
  image,
  slug,
  imgLink,
}) => {
  return (
    <div
      className="col-lg-4 col-md-6 mt_30"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="blog_box">
        <a href={slug} className="blog_img overflow-hidden">
          
          <img src={image} alt="..." />
        </a>
        <Link to={slug}>
          <h6 dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
        <p className="mt_10">{description}</p>
        <div className="social_area">
          {socialLinks.twitter&&
          <a href={socialLinks && socialLinks.twitter} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          }
          {socialLinks.facebook &&
          <a href={socialLinks && socialLinks.facebook} target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          }
        </div>
      </div>
    </div>
  )
}

export default LeadersCard
