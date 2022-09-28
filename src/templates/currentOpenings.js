import React,{ useRef} from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
//import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import JobBanner from '../components/JobBanner/JobBanner'
import QuoteBox from '../components/QuoteBox/QuoteBox'
import shape5 from '../assets/img/shape5.png'
import GetInTouch from '../components/GetInTouch/GetInTouch'

export const JobCard = ({ title, acf, slug }) => {

  return (
    <div
      className="col-lg-4 col-md-6 mt_30"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="job_box">
        <h5>
          {title} {acf.special_mention && <span>( {acf.special_mention})</span>}
        </h5>
        <p className="mt_20 job_location">
          <span className="theme_text">{acf.city && acf.city}</span>
          <span className="job_status">{acf.type && acf.type}</span>
        </p>
        <Link to={slug} className="mt_30">
          Apply Now
        </Link>
      </div>
    </div>
  )
}

const CurrentOpennings = ({ data }) => {
  const { wordpressPage:page } = data
  const { allWordpressWpJobs: jobs } = data
  const scrollToRef = (ref) => window.scrollTo({ top:ref.current.offsetTop-80  , behavior: 'smooth' })
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)
  return (
    <Layout>
      <Helmet title={` Verinite | ${page.title}`} />
      <JobBanner
        position={page.title}
        toolTipData={page.acf.tool_tip}
        image={shape5}
        description={page.acf.description}
        subHeading={page.acf.second_heading}
        click={executeScroll}
        
      />
      <div className="job_post section_padd" ref={myRef} >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb_15">
              <h2 className="title">Are you ready to Join?</h2>
            </div>
            {jobs.nodes.map(job => {
              return (
                <JobCard
                  key={job.id}
                  title={job.title}
                  slug={`/jobs/${job.slug}`}
                  acf={job.acf}
                />
              )
            })}
            {jobs.nodes.length > 9 && (
              <div className="col-12 text-center mt_50" data-aos="fade-up">
                <a href="!#" className="button black_btn">
                  view more
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <QuoteBox quoteTitle={page.acf.quote_box.heading} 
        sideimg={page.acf.quote_box.image.localFile.childImageSharp.fluid.src}
        btntxt={page.acf.quote_box.button.title}
        links={page.acf.quote_box.button.url}
      />
      <GetInTouch/>
    </Layout>
  )
}

export default CurrentOpennings

export const currentOpeningQuery = graphql`
  query currentOpeningss($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      acf {
        sub_heading
        second_heading
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


        quote_box {
          heading
          image {
            id
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          button {
            title
            url
          }
        }

        tool_tip {
          title
          image {
            source_url
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



    allWordpressWpJobs {
      nodes {
        acf {
          type
          special_mention
          city
          description
          tool_tip {
            title
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        title
        slug
        id
      }
    }
  }
`
