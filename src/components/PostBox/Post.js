import React from 'react'

const Post = props => {
  const {
    postBgImg,
    postImgClass,
    postTextClass,
    title,
    subTitle,
    aosDir,
  } = props
  return (
    <div className="col-lg-6" data-aos={aosDir}>
      <a
        href="!#"
        className={`post_box d-block ${postImgClass}`}
        style={{ backgroundImage: `url(${postBgImg})` }}
      >
        <div className={`post_content ${postTextClass}`}>
          <h6 className="text-white">{title}</h6>
          <h3 className="title_sm text-white mt_10">{subTitle}</h3>
        </div>
      </a>
    </div>
  )
}

export default Post
