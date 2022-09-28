import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import CommonBanner from '../components/CommonBanner/CommonBanner'
const Maincontent = styled.div`
  h1,
  h2{
      margin-top:20px
  },
  h3,
  h4,
  h5,
  h6,
  p{
    margin-top:20px;
    font-size:20px;
  },
  img,
  ul {
    margin-top: 20px;
    font-size:20px;

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



export const PageTemplate = ({ title, content, image }) => {
  return (
    <>
    <CommonBanner
        // badge
        // align="left"
        // title={title}
        subHeading={`OUR ${title}`}
        // description={acf.description}
        image={image.localFile.childImageSharp.fluid.src}
        // pageClass="BrandIdentity"
        // align="left"
      />
    <section className="section section_padd">
      <div className="container section_policy">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              {/* <h2 className="title is-size-3 text-center has-text-weight-bold is-bold-light">
                {title}
              </h2> */}
              <Maincontent
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {/* <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <Helmet title={` Verinite | ${page.title}`} />

      <PageTemplate title={page.title} content={page.content} image={page.featured_media} />
      <GetInTouch/>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageForPolicy($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid{
              src
            }
          }
        }
      }
    }
  }
`
