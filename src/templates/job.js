import React,{ useRef,useState } from 'react'
//import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import JobBanner from '../components/JobBanner/JobBanner'
import JobForm from '../components/JobForm'
import { graphql } from 'gatsby'
import TemplateWrapper from '../components/Layout'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

import GetInTouch from '../components/GetInTouch/GetInTouch'


const { TabPane } = Tabs;

const JobDescriptionWrapper = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  img,
  ul {
    margin-top: 20px;
    font-size: 20px;
    
    li {
      position: relative;
      padding-left: 28px;
      margin-top: 10px;
      &:before {
        position: absolute;
        content: '';
        left: 0;
        top: 14px;
        width: 13px;
        height: 3px;
        background-color: #142270;
      }
    }
  }
`



export const PageTemplate = ({ content, title, acf }) => {
  const [AtiveTab,setActiveTab] = useState("1");
  const changeTab =(activeKey)=>{
    // console.log(activeKey)
    setActiveTab(activeKey)
  }
  const scrollToRef = (ref) => window.scrollTo({ top:ref.current.offsetTop-80  , behavior: 'smooth' })
  const myRef = useRef(null)
  const test =useRef(null)  ;
  const executeScroll1 = () => {
    changeTab("2");
    scrollToRef(myRef)}

  const executeScroll = () => scrollToRef(myRef)
  return (
    <main>
      <JobBanner
        image={acf.image.localFile.childImageSharp.fluid.src}
        subHeading={acf.sub_heading}
        subTitle={title}
        position={title}
        description={acf.description}
        toolTipData={acf.tool_tip}
        click={executeScroll}

      />
      {/* <TabPannel /> */}
      <Tabs defaultActiveKey="1" activeKey={AtiveTab}  onChange={changeTab} onTabScroll={({ direction }) =>"top"} centered className="Hoal">
      <TabPane tab="Overview" key="1" size="large">
      <div className="personal_details_wrapper section_padd v2" ref={myRef}>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="over">
            <div className="container">
              <JobDescriptionWrapper
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="text-center mt_45" data-aos="fade-up">
    
                <a onClick={
                  
                  executeScroll1
                  
                  } 
                className="button black_btn">
                  Apply now
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
      </TabPane>
      <TabPane tab="Application" key="2" size="large">
      <div className="personal_details_wrapper section_padd v2">
        <div className="tab-content">
          
          <div className="tab-pane fade show active" id="app">
            <div className="container">
              <JobForm  position={title} />
            </div>
          </div>
        </div>
      </div>
      </TabPane>
      
      </Tabs>
      
    </main>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Job = ({ data }) => {
  const { wordpressWpJobs: job } = data
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | Careers | ${job.title}`} />
      <PageTemplate content={job.content} title={job.title} acf={job.acf} />
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default Job

export const jobQuery = graphql`
  query JobPage($id: String!) {
    wordpressWpJobs(id: { eq: $id }) {
      title
      content
      id
      acf {
        sub_heading
        description
        image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        tool_tip {
          title
          image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
