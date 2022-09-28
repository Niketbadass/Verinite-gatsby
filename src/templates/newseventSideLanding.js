import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
//import Layout from '../components/Layout'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import styled from 'styled-components'
import Sidebar from '../components/sidebar'
import TemplateWrapper from '../components/Layout'
import CustomModal from '../components/ModalPopup/ModalPopup'
import Link from 'gatsby-link'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import { Get } from 'react-lodash'

const BlogPostContentWrapper = styled.div`
  p {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    color: #4d6e81;
  }
`

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  image,
  relt,
  open,
  alldata,
  wp_id
}) => {
  const[index,setIndex]=useState(0);
  const[prev,setPrev]=useState(0)
  const[next,setNext]=useState(0)
  useEffect(()=>{
    setIndex ( alldata.findIndex(
      (element) => { 
        return element.wordpress_id==wp_id
      }))

  },[])
  useEffect(()=>{
    if(index==0){
      setPrev(alldata[alldata.length-1])
      setNext(alldata[index+1])
    }
    else if(index==alldata.length-1){
      setNext(alldata[0])
      setPrev(alldata[index-1])
    }
    else{
      setPrev(alldata[index-1])
      setNext(alldata[index+1])

    }
  },[index])
  return (
    <main>
      <CommonBanner
        blogHeader={true}
        title={title}
        // authorName={author.name}
        title={title}
        subHeading={title}
        popup={open}
        categoryName={categories[1].name}
        date={date}
        image={image}
        // downloadLink={acf.download_pdf_link}
        socialIcon
      />
      <div className="article_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt_30 article_content">
              <BlogPostContentWrapper
                dangerouslySetInnerHTML={{ __html: content }}
              />

              {/* <div className="author_box">
                <img src={author.avatar_urls.wordpress_96} className="author_img" alt="" />
                <h6>{author.name}</h6>
                <p>{author.description}</p>
              </div> */}
            </div>
            <Sidebar posts={relt} />
          </div>
        </div>
      </div>
      <div class="post_area overflow-hidden">
          <div class="row no-gutters">
              {prev &&(
                <div
                class="col-lg-6"
                data-aos={ 'fade-right'}
              >
                <Link
                  to={`/${prev.slug}`}
                  class="post_box d-block text-lg-right"
                  style={{
                    backgroundSize: 'cover', 
                    backgroundImage: ` url(${prev.featured_media.localFile.childImageSharp.fluid.src})`,
                  }}
                >
                  <div class="post_content ml-lg-auto">
                    <h6 class="text-white">Previous Post</h6>
                    <h3 class="title_sm text-white mt_10">{prev.title}</h3>
                  </div>
                </Link>
              </div>
              )}
              {next &&(
                <div
                class="col-lg-6"
                data-aos={ 'fade-left'}
              >
                <Link
                  to={`/${prev.slug}`}
                  class="post_box d-block text-lg-left"
                  style={{
                    backgroundImage: ` url(${next.featured_media.source_url})`,
                    backgroundSize: 'cover', 
                    // backgroundImage: ` url(${next.featured_media.localFile.childImageSharp.fluid.src})`,
                  }}
                >
                  <div class="post_content mr-lg-auto">
                    <h6 class="text-white">Next Post</h6>
                    <h3 class="title_sm text-white mt_10">{next.title}</h3>
                  </div>
                </Link>
              </div>
              )}
          </div>
        </div>
    </main>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const PostSidebar = ({ data }) => {
  const { wordpressWpNewsAndEvents: post } = data
  const [display, setDisplay] = React.useState(false)
  const open = () => {
   
      setDisplay(true)
      document.body.style.overflow = 'hidden'
    
   }
  const close = () => {
    setDisplay(false)
    document.body.style.overflow = 'unset'
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if(window!=="undefined"){
        if(localStorage.getItem("suscribe")!=="true"){
      open()
        }}
    }, 15000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | ${post.title}`} />
      {display ? <CustomModal close={close} /> : ''}

      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        image={post.featured_media.localFile.childImageSharp.fluid.src}
        relt={data.allWordpressWpNewsAndEvents.nodes.slice(0,4)}
        open={open}
        alldata={data.allWordpressWpNewsAndEvents.nodes}
        wp_id={post.wordpress_id}
      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

PostSidebar.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PostSidebar

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query EventSidebar($id: String!, $cat: String!) {
    allWordpressWpNewsAndEvents(
      filter: { categories: { elemMatch: { id: { eq: $cat } } } }
    ) {
      nodes {
        title
        slug
        wordpress_id
        featured_media {
          source_url
          localFile {
            childImageSharp {
              fixed {
                src
              }
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        date(formatString: "DD MMMM YYYY")
      }
    }
    wordpressWpNewsAndEvents(id: { eq: $id }) {
      id
      title
      slug
      content
      wordpress_id
      categories {
        name
      }
      date(formatString: "MMMM DD, YYYY")
      featured_media {
        source_url
        localFile {
          childImageSharp {
            fluid(quality: 90) {
              src
            }
          }
        }
      }
      
      
    }
  }
`
