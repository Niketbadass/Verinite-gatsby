import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BackgroundImage = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    {
      backgroundImage: file(absolutePath: { regex: "/card_video_bg/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    backgroundImage && (
      <Img
        fluid={backgroundImage.childImageSharp.fluid}
        className="mission_background_image"
      />
    )
  )
}

export default BackgroundImage
