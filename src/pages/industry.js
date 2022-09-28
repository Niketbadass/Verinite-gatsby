import React from 'react'
import Bankingbox from '../components/Bankingbox'
import BlogCard from '../components/BlogBox'
import CaseStudyBox from '../components/CaseStudyBox/CaseStudyBox'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import TemplateWrapper from '../components/Layout'
import PavingBox from '../components/PavingBox/PavingBox'
import industryImg from '../assets/img/industry.jpg'
import BigButton from '../components/button/BigButton'
import icon4 from '../assets/img/icon4.png'
import icon5 from '../assets/img/icon5.png'
import icon6 from '../assets/img/icon6.png'
import icon7 from '../assets/img/icon7.png'
import icon8 from '../assets/img/icon8.png'
import icon9 from '../assets/img/icon9.png'
import img8 from '../assets/img/img8.png'
import blog1 from '../assets/img/img1.jpg'
import blog2 from '../assets/img/img2.jpg'
import blog3 from '../assets/img/img3.jpg'
import blog4 from '../assets/img/img4.jpg'
import blog5 from '../assets/img/img5.jpg'
import blog6 from '../assets/img/img6.jpg'
import arrow3 from '../assets/img/arrow3.svg'

export const IndustryTemplate = () => {
  return (
    <main>
      <CommonBanner
        badge={true}
        title="Banking Industry"
        homeBtn={true}
        align="left"
        pageClass="industry"
        image={industryImg}
        subHeading="Identity check is an important security function in banking"
        btnClass="white_btn"
        btnText="know more"
        descText={true}
        description="We’re enabling businesses make the out of digital advancements in the retail banking industry."
      />
      <div className="rating_area">
        <div className="container">{/* <PartnerRating /> */}</div>
      </div>
      <div className="banking_area section_padd">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title_sm">
                The top needs of the banking{' '}
                <br className="d-none d-sm-block" /> industry
              </h2>
            </div>
            <div
              className="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Bankingbox
                faIconClass="fal fa-cog"
                title="Easy integration"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Bankingbox
                faIconClass="fal fa-rocket"
                title="Instant activation"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Bankingbox
                faIconClass="far fa-code"
                title="Security 24 x 7"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <Bankingbox
                faIconClass="fal fa-rupee-sign"
                title="Easy Transfers"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Bankingbox
                faIconClass="far fa-wifi"
                title="Great connectivity"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-sm-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Bankingbox
                faIconClass="far fa-headset"
                title="Great connectivity"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="paving_area section_padd pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="title">
                Paving the way to the future <br class="d-none d-md-block" /> of
                banking industry
              </h2>
            </div>
          </div>
          <div class="paving_box overflow-hidden">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#past">
                  Past
                </a>
                <img src={arrow3} alt="" />
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#present">
                  Present
                </a>
                <img src={arrow3} alt="" />
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#future">
                  Future
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="past">
                <PavingBox
                  industryPaving={true}
                  title="How the past practices influenced the banking industry"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                  imgUrl={img8}
                />
              </div>
              <div class="tab-pane fade" id="present">
                <PavingBox
                  industryPaving={true}
                  title="How the past practices influenced the banking industry"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                  imgUrl={img8}
                />
              </div>
              <div class="tab-pane fade" id="future">
                <PavingBox
                  industryPaving={true}
                  title="How the past practices influenced the banking industry"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                  imgUrl={img8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="case_study section_padd v2">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center mb_15">
              <h3 class="title">Verinite’s range of services</h3>
            </div>
            <CaseStudyBox
              boxClass=""
              imgUrl={icon4}
              title="Technology services"
              text="Application Development &amp; Integration Application Managemen"
              dataDelay="200"
            />
            <CaseStudyBox
              boxClass="box2"
              imgUrl={icon5}
              title="Mobility services"
              text="Mobile Application Development &amp; Management Mobile Testing Services"
              dataDelay="200"
            />
            <CaseStudyBox
              boxClass="box3"
              imgUrl={icon6}
              title="Intelligent automation"
              text="AI &amp; Automation Systems Development &amp; Maint Services, Integration Services"
              dataDelay="200"
            />
            <CaseStudyBox
              boxClass="box4"
              imgUrl={icon7}
              title="Quality assurance"
              text="Domain Service, Technical Service Transformational Service"
              dataDelay="200"
            />
            <CaseStudyBox
              boxClass="box5"
              imgUrl={icon8}
              title="Information security"
              text="Security Testing, Security Training &amp; Security Consulting Services"
              dataDelay="200"
            />
            <CaseStudyBox
              boxClass="box6"
              imgUrl={icon9}
              title="Consulting services"
              text="Digital Strategy, Technology Consulting Solution Architecture"
              dataDelay="200"
            />

            <div
              class="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <BigButton btnClass="dark" btnText="view case studies" />
            </div>
          </div>
        </div>
      </div>
      <div className="blog_area section_padd v2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Success Stories</h2>
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                title="RPA Process Discovery"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
                imgUrl={blog1}
              />
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                imgUrl={blog2}
                title="CS FirstVision Migration"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                imgUrl={blog3}
                title="ElectraCard"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                imgUrl={blog4}
                title="Innovation culture"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                imgUrl={blog5}
                title="Blockchain future"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              class="col-lg-4 col-md-6 mt_30"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BlogCard
                imgUrl={blog6}
                title="Machine learning"
                description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit"
              />
            </div>
            <div
              className="col-12 text-center mt_50"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <BigButton btnClass="black_btn" btnText="download whitepaper" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const IndustryPage = () => {
  return (
    <TemplateWrapper>
      <IndustryTemplate />
    </TemplateWrapper>
  )
}

export default IndustryPage
