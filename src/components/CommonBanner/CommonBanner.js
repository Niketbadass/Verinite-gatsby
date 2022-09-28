import React from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'

import BigButton from '../button/BigButton'
import CaseStudySelect from '../CaseStudySelect/CaseStudySelect'
import ReactHtmlParser from 'react-html-parser'

const CommonBannerWrapper = styled.div`
  background-image: ${props => `url(${props.image})`};
`
const CommonBanner = ({
  image,
  title,
  found_date,
  years_of_service,
  projectCount,
  clientCount,
  trustedclientCount,
  countriesCount,
  employeeCount,
  locationCount,
  subHeading,
  description,
  btnClass,
  btnText,
  descText,
  socialIcon,
  //partnership,
  //aboutUs,
  homeBtn,
  subscribeForm,
  home,
  foundedWrapper,
  project,
  align,
  blogHeader,
  authorName,
  date,
  servicelisting,
  servicesdesignation,
  handleDesignation,
  servicetype,
  handleservicetype,
  pageClass,
  badge,
  items,
  click,
  link,
  categoryName,
  downloadLink,
  popup,
  popup2,
  popup3,
}) => {
  return (
    <CommonBannerWrapper
      className={`home_wrapper d-flex align-items-center ${pageClass}`}
      image={image}
    >
      <div className="container">
        <div
          className={
            align === 'left' ? 'row' : 'row  justify-content-center text-center'
          }
        >
          {blogHeader ? (
            <div className="col-xl-8 col-lg-9">
              <div className="home-text">
                {badge ? (
                  <span
                    className="badge_top"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : null}
                <h2
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  
                  {ReactHtmlParser(subHeading)}
                </h2>
                {descText ? (
                  <p
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {description}
                  </p>
                ) : null}
                <p
                  className={
                    align === 'left' ? 'text-white' : 'text-white mx-auto'
                  }
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  By {authorName} . {date} . {categoryName}
                </p>
                {socialIcon ? (
                  <>
                    <div
                      className="social_icon mt_25"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <a href={socialIcon.facebook} target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href={socialIcon.twitter} target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={socialIcon.linkedin} target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      {categoryName === 'Success Stories' ||
                        categoryName === 'Case Studies' ||

                        categoryName === 'Brouchers' ? (
                        <a
                          href="#"
                          onClick={popup2}
                        >
                          <i className="fal fa-arrow-to-bottom"></i>
                        </a>
                      ) : ("")}
                      {categoryName === 'White Papers' && (
                        <a
                          href="#"
                          onClick={popup3}
                        >
                          <i className="fal fa-arrow-to-bottom"></i>
                        </a>
                      )}
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1000">
                      <a onClick={popup} className="button">
                        subscribe
                      </a>
                    </div>
                  </>
                ) : null}
                {subscribeForm ? (
                  <form
                    action="!#"
                    className="subscribe_form"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="1000"
                  >
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email address"
                      />
                      <div className="input-group-append">
                        <button className="button mt-0" type="button">
                          subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                ) : null}
              </div>
            </div>
          ) : (
            <div className="col-xl-7 col-lg-9">
              <div className="home-text">
                {badge ? (
                  <span
                    className="badge_top"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                ) : null}
                <h2
                  className="text-white"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                {ReactHtmlParser(subHeading)}
                </h2>
                <p
                  className={
                    align === 'left' ? 'text-white' : 'text-white mx-auto'
                  }
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  {description}
                </p>
                {homeBtn ? (
                  <div data-aos="fade-up" data-aos-delay="1000">
                    <BigButton
                      btnClass={btnClass}
                      btnText={btnText}
                      link={link}
                      click={click}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
        {home ? (
          <div
            className="row mt_20 label_wrapper"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            {items.map(item => (
              <div className="col mt_30">
                <div className="label_content">
                  <div className="bar">
                    <div className={`value`}></div>
                  </div>
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
        {foundedWrapper && (
          <div className="row justify-content-between founded_wrapper counter">
            {found_date && (
              <div className="col-box mt_30">
                <h3 className="title_2 text-white">{found_date}</h3>
                <p className="text-white mt_5">Founded</p>
              </div>
            )}
            {years_of_service && (
              <div class="col-box mt_30">
              <h3 className="title_2 text-white">
                <CountUp
                  decimal={1}
                  start={1}
                  end={years_of_service}
                  duration={5}
                  suffix="+  Years"
                />
              </h3>
              <p class="text-white mt_5">Years of Service</p>
            </div>
            )}
            {employeeCount && (
              <div class="col-box mt_30">
                <h3 className="title_2 text-white">
                  <CountUp
                    decimal={1}
                    start={1}
                    end={employeeCount}
                    duration={5}
                    suffix="+"
                  />
                </h3>
                <p class="text-white mt_5">Employees</p>
              </div>
            )}
            {project && (
              <div class="col-box mt_30">
                <h3 className="title_2 text-white">
                  <CountUp
                    decimal={1}
                    start={1}
                    end={projectCount}
                    duration={5}
                    suffix="+"
                  />
                </h3>
                <p class="text-white mt_5">Projects</p>
              </div>
            )}
            {clientCount&&(
            <div className="col-box mt_30">
              <h3 className="title_2 text-white">{clientCount}</h3>
              <p className="text-white mt_5">Clients</p>
            </div>
            )}
            {trustedclientCount&&(
            <div className="col-box mt_30">
              <h3 className="title_2 text-center text-white">{trustedclientCount}</h3>
              <p className="text-white mt_5">Trusting Clients</p>
            </div>
            )}
            {/* <div className="col-box mt_30">
            </div> */}
            {countriesCount&&(
              <div className="col-box mt_30">
              <h3 className="title_2 text-center text-white">
                <CountUp
                  decimal={1}
                  start={1}
                  end={countriesCount}
                  duration={5}
                  suffix="+"
                />
              </h3>
              <p className="text-white mt_5">Countries</p>
            </div>
            )}
            {locationCount&&(
            <div className="col-box mt_30">
              <h3 className="title_2 text-white">
                <CountUp
                  decimal={1}
                  start={1}
                  end={locationCount}
                  duration={5}
                  suffix="+"
                />
              </h3>
              <p className="text-white mt_5">Locations</p>
            </div>
            )}
          </div>
        )}
        {servicelisting && (
          <div
            class="col-12 text-center mt_50"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <form action="#" className="case_study">
              <CaseStudySelect
                servicesdesignation={servicesdesignation}
                setDesignation={
                  handleDesignation
                }
                setServices={
                  handleservicetype
                }
                servicetype={servicetype}
              />

            </form>
          </div>
        )}
      </div>
    </CommonBannerWrapper>
  )
}

export default CommonBanner

{
  /*<span
                    className="badge_top"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {title}
                  </span>*/
}
{
  /*<span
                    className="badge_top"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {title}
                  </span>*/
}
