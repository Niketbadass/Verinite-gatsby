import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

const ProgressCircle = (props) => {
  const needDominantBaselineFix = true
  /*const data = [
    {
      percentage: '38',
      text: 'Lorem ipsum dolor sit amet, consectetu',
      aosDir: 'fade-up',
      aosDelay: '100',
    },
    {
      percentage: '64',
      text: 'Lorem ipsum dolor sit amet, consectetu',
      aosDir: 'fade-up',
      aosDelay: '200',
    },
    {
      percentage: '94',
      text: 'Lorem ipsum dolor sit amet, consectetu',
      aosDir: 'fade-up',
      aosDelay: '300',
    },
  ]*/
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div
            className="col-md-4 col-sm-6 text-center mt_40"
            data-aos={item.aosDir}
            data-aos-delay={item.aosDelay}
            key={index}
          >
            <div className="progress_circle">
              <CircularProgressbar
                className="text-center"
                value={item.progress_percentage}
                text={
                  <tspan
                    dy={needDominantBaselineFix ? 6 : 0}
                    dx={needDominantBaselineFix ? -14 : 0}
                  >{`${item.progress_percentage}%`}</tspan>
                }
                styles={buildStyles({
                  strokeLinecap: 'round',
                  textSize: '18px',
                  pathTransitionDuration: 0.5,
                  pathColor: '#142270',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
            <p className="mx-auto">{item.progress_text}</p>
          </div>
        )
      })}
    </>
  )
}
export default ProgressCircle
