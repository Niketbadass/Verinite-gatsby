import React, { useState } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import Img from 'gatsby-image'

const Conclavebox = props => {
  const [focus, setFocus] = useState(false)
  return (
    <>
      {/* {props.data &&
        props.data.map((item, index) => ( */}
          <div
            class="col-lg-3 col-sm-6 mt_30"
            data-aos="fade-up"
            data-aos-delay="400"
            // key={index}
          >
            <div class="stat_box light_bg">
              <div class="">
                {/* {!item.image.localFile.childImageSharp &&
                item.image.localFile.extension === 'svg' ? ( */}
                  <img
                    src={props.img}
                    class="img-fluid"
                    alt="..."
                  />
                {/* ) : null} */}
              </div>
              <h3 class="title_sm mt_20 mb_15">
                <CountUp
                  decimal={1}
                  start={focus ? 1 : null}
                  end={props.heading}
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
              <h3>{props.description}</h3>
            </div>
          </div>
        {/* ))} */}
    </>
  )
}
export default Conclavebox
