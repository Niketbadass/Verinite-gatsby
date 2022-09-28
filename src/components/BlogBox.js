import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Twitter from './icons/Twitter'
import LinkedIn from './icons/Linkedin'
import ReactHtmlParser from 'react-html-parser'
import { takeRightWhile } from 'lodash'

const BlogCard = props => {
  const { image: imageFile, title, socialClass, slug } = props

  const imageClassName = 'blog_img'

  const renderNormalImage = () => {
    return <img src={imageFile} alt="..." className={imageClassName} />
  }

  const renderGatsbyImg = () => {
    const image = getImage(imageFile)
    return <GatsbyImage image={image} className={imageClassName} />
  }

  const renderImage = () => {
    if (imageFile && imageFile.childImageSharp) {
      return renderGatsbyImg()
    }
    return renderNormalImage()
  }
  return (
    <div className="col-lg-4 col-md-6 mt_30">
      <div className="blog_box">
        <a href={`/${slug}`} className="blog_img overflow-hidden">
          {renderImage()}
        </a>
        <Link to={`/${slug}`}>
          {title.length<="45"?(<p>
            <h6>{ReactHtmlParser(title)}</h6>
            </p>)
          :(<h6>{ReactHtmlParser(title.slice(0,45))}...</h6>)}
          
        </Link>
        <div dangerouslySetInnerHTML={{ __html: props.content }}
          style={{
            width: '303px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        />
        {socialClass === 'socialIcon' ? (
          <div className="social_area">
            <a href="!#">
              <Twitter />
            </a>
            <a href="!#">
              <LinkedIn />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default BlogCard
