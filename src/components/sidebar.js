import React from 'react'
import { Link } from 'gatsby'

const Sidebar = ({ posts }) => {
  // console.log(posts)
  return (
    <div className="col-lg-4 mt_30" data-aos="fade-up">
      <div className="related_box mt_25">
        <h5>Related Articles</h5>
        <div className="article">
          {posts?.map((post, index) => {
            return (
              <div className="media" key={index}>
                 <Link to={`/${post.slug}`}>
                  <img
                    src={
                      post.featured_media.localFile.childImageSharp.fixed.src
                    }
                    alt=""
                  />
                </Link>
                <div className="media-body">
                <Link to={`/${post.slug}`}>
                    <p>{post.title}</p>
                  </Link>
                  <span>Published on {post.date}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
