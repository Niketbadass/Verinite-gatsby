import React from 'react'
import BlogBox from '../BlogBox'
import blog1 from '../../assets/img/img1.jpg'
import blog2 from '../../assets/img/img2.jpg'
import blog3 from '../../assets/img/img3.jpg'
import blog4 from '../../assets/img/img4.jpg'
import blog5 from '../../assets/img/img5.jpg'
import blog6 from '../../assets/img/img6.jpg'
import BigButton from '../button/BigButton'

const BlogPage = () => {
  return (
    <div className="blog_area section_padd pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb_15">
            <h2 className="title">Success Stories</h2>
          </div>
          <BlogBox
            title="RPA Process Discovery"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
            image={blog1}
          />

          <BlogBox
            image={blog2}
            title="CS FirstVision Migration"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
          />
          <BlogBox
            image={blog3}
            title="ElectraCard"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
          />
          <BlogBox
            image={blog4}
            title="Innovation culture"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
          />
          <BlogBox
            image={blog5}
            title="Blockchain future"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
          />
          <BlogBox
            image={blog6}
            title="Machine learning"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
          />
          <div
            className="col-12 text-center mt_50"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <BigButton
              btnclassName="big_btn dark"
              btnText="download whitepaper"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogPage
