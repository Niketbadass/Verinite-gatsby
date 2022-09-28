import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Img from 'gatsby-image'

const StatisticsBox = props => {
  const [focus, setFocus] = useState(false)
  return (
    <>
      {props.data &&
        props.data.map((item, index) => (
          <div
            class="col mt_30"
            data-aos="fade-up"
            data-aos-delay="400"
            key={index}
          >
            <div class="stat_box light_bg">
              <div class="stat_icon">
                {!item.image.localFile.childImageSharp &&
                item.image.localFile.extension === 'svg' ? (
                  <img
                    src={item.image.localFile.url}
                    class="img-fluid"
                    alt="..."
                  />
                ) : null}
              </div>
              <h3 class="title_sm mt_20 mb_15">
                <CountUp
                  decimal={1}
                  start={focus ? 1 : null}
                  end={item.heading}
                  duration={5}
                  suffix="+"
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      onChange={isVisible => {
                        if (isVisible) {
                          setFocus(true)
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </>
  )
}
export default StatisticsBox
