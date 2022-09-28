import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
//import shape5 from '../../img/shape5.png'

import Tooltip from '../ToolTipBox'
import BigButton from '../button/BigButton'
import ReactTooltip from 'react-tooltip'

const JobBannerWrapper = styled.div`
  background-image: ${props => `url(${props.image})`};
`

const JobBanner = props => {
  const ANIMATION_DELAY = 4000

  const [shownTooltipIndex, setShownTooltipIndex] = useState(-1)
  const [tooltips, setTooltips] = useState({})

  const getTooltipWithId = (tooltipData, index) => {
    return {
      ...tooltipData,
      id: `tooltip-${index}`,
    }
  }

  const tooltipsWithId = props.toolTipData.map(getTooltipWithId)

  const getTooltipIdByIndex = index => {
    const { id } = tooltipsWithId[index]
    return id
  }

  const showTooltip = newTooltipIndex => {
    const tooltipId = getTooltipIdByIndex(newTooltipIndex)
    const { [tooltipId]: reference } = tooltips
    if (reference) ReactTooltip.show(reference)
  }

  const getNewTooltipIndex = () => {
    const newTooltipIndex = shownTooltipIndex + 1
    if (newTooltipIndex >= tooltipsWithId.length) {
      return 0
    }
    return newTooltipIndex
  }

  const switchAnimation = () => {
    const newTooltipIndex = getNewTooltipIndex()
    setShownTooltipIndex(newTooltipIndex)
    ReactTooltip.hide()
    showTooltip(newTooltipIndex)
  }

  useEffect(() => {
    setTimeout(switchAnimation, ANIMATION_DELAY)
  }, [shownTooltipIndex, tooltips])

  return (
    <JobBannerWrapper
      className="home_wrapper d-flex align-items-center current"
      image={props.image}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7 mb_20">
            <div className="home-text">
              <span
                className="badge_top"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                {props.position ? props.position : 'Developer'}
              </span>
              <h2
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {props.subHeading} {props.subTitle}
              </h2>
              <p className="text-white" data-aos="fade-up" data-aos-delay="800">
                {props.description}
              </p>
              <div data-aos="fade-up" data-aos-delay="1000">
                <BigButton
                  btnText={props.btnTxt ? props.btnTxt : 'explore roles'}
                  click={props.click}
                  btnClass="white_btn"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb_30 col-md-8">
            <div class="tooltip_box position-relative">
              {tooltipsWithId.map((item, index) => (
                <Tooltip
                  idToolTip={item.id}
                  toolTipText={item.title}
                  image={
                    item.image.localFile &&
                    item.image.localFile.childImageSharp.fluid.src
                  }
                  key={index}
                  setTooltips={setTooltips}
                  tooltips={tooltips}
                />
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </JobBannerWrapper>
  )
}

export default JobBanner
