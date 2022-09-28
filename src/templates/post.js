import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { useWindowScroll } from 'react-use'
import CommonBanner from '../components/CommonBanner/CommonBanner'
import styled from 'styled-components'
import TemplateWrapper from '../components/Layout'
import CustomModal from '../components/ModalPopup/ModalPopup'
import BrouchurePopup from '../components/ModalPopup/BrouchurePopup'
import WhitepaperPopup from '../components/ModalPopup/WhitepaperPopup'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import _ from 'lodash'
import BigButton from '../components/button/BigButton'

const BlogPostContentWrapper = styled.div`
  p {
    font-size: 20px;
    line-height: 31px;
    letter-spacing: 0.5px;
    margin-top: 20px;
    color: #4d6e81;
  }
  h1{
    margin-top:25px;
  }
  h2{
    margin-top:25px;
  }
  h3{
    margin-top:25px;
  }
  h4{
    margin-top:25px;
  }
  h5{
    margin-top:25px;
  }
  h6 {
    text-align: center;
  }
  li {
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
  acf,
  title,
  date,
  author,
  socialIcon,
  image,
  slug,
  open,
  open2,
  open3,
  alldata,
  wp_id
}) => {
  const[index,setIndex]=useState();
  const[prev,setPrev]=useState()
  const[next,setNext]=useState()
  const[filterData,setFilterData ] = useState(alldata)  
  const filterPosts = value => {
    return _.filter(alldata, function (post) {
      return _.some(post.categories, { name: value })
    })
  }
  useEffect(()=>{
    // filterPosts(categories[1].name)
    setFilterData(filterPosts(categories[1].name))
    
  },[])
  
  useEffect(()=>{
    // console.log(filterData)
    setIndex ( filterData.findIndex(
      (element) => { 
        return element.wordpress_id==wp_id 
      }))
  },[filterData])

  useEffect(()=>{
    // console.log(filterData)
    if(index==0){
      setPrev(filterData[filterData.length-1])
      setNext(filterData[index+1])
    }
    else if(index==filterData.length-1){
      setNext(filterData[0])
      setPrev(filterData[index-1])
    }
    else{
      setPrev(filterData[index-1])
      setNext(filterData[index+1])

    }
  },[index])
  
  return (
    <main>
      <CommonBanner
        blogHeader={true}
        title={title}
        subHeading={title}
        authorName={author.name}
        categoryName={categories[1].name}
        date={date}
        image={image}
        downloadLink={acf.download_pdf_link}
        socialIcon={socialIcon.options.social_icons}
        popup={open}
        popup2={open2}
        popup3={open3}

      />
      <div className="article_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 mt_30 article_content">
              <BlogPostContentWrapper
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {categories[1].name=="White Papers"&&
              <div className="text-center">
              <BigButton
              click={open3}
              btnClass="black_btn mt_50"
              btnText="Download White papers"
              />
              </div>
              }
              {categories[1].name=="Success Stories"||categories[1].name=="Case Studies"||
                categories[1].name == "Brouchers"?(""):(
                <div className="author_box mx-auto text-center">
                <img src={author.avatar_urls.wordpress_96} className="author_img" alt="" />
                <h6>{author.name}</h6>
                <p>{author.description}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
        <div class="post_area overflow-hidden">
          <div class="row no-gutters">
              {prev &&(
                <div
                class="col-lg-6"
                data-aos={ 'fade-right'}
                style={{
                  backgroundSize: 'cover', 
                  backgroundImage: ` url(${prev.featured_media.localFile.childImageSharp.fluid.src})`,
                }}
              >
                <Link
                  to={`/${prev.slug}`}
                  className="post_box d-block text-lg-right"
                  // style={{
                  //   backgroundImage: ` url(${prev.featured_media.localFile.childImageSharp.fluid.src})`,
                  // }}
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
                className="col-lg-6 "
                data-aos={ 'fade-left'}
                style={{
                  backgroundSize: 'cover', 
                  backgroundImage: ` url(${next.featured_media.localFile.childImageSharp.fluid.src})`,
                }}
               
              >
                <Link
                  to={`/${next.slug}`}
                  className="post_box d-block text-lg-left"
                  // style={{
                  //   backgroundImage: ` url(${next.featured_media.localFile.childImageSharp.fluid.src})`,

                  //   // backgroundImage: ` url(${next.featured_media.localFile.childImageSharp.fluid.src})`,
                  // }}
                >
                  <div className=" post_content mr-lg-auto">
                    <h6 className="text-white">Next Post</h6>
                    <h3 className="title_sm text-white mt_10">{next.title}</h3>
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

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  const { y: pageYOffset } = useWindowScroll()
  
  // for  Popup
  const [display, setDisplay] = React.useState(false)
  const [display2, setDisplay2] = React.useState(false)
  const [display3, setDisplay3] = React.useState(false)

  const open = () => {
    if(window!=="undefined"){
    
      setDisplay(true)
      document.body.style.overflow = 'hidden'
     
    }
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

 
  const open2 = () => {
    setDisplay2(true)
    document.body.style.overflow = 'hidden'
  }

  const close2 = () => {
    setDisplay2(false)
    document.body.style.overflow = 'unset'
  }

  const open3 = () => {
    setDisplay3(true)
    document.body.style.overflow = 'hidden'
  }

  const close3 = () => {
    setDisplay3(false)
    document.body.style.overflow = 'unset'
  }
  // popup close

  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | ${post.title}`} />

      {display ? <CustomModal close={close} /> : ''}

      {display2 ? <BrouchurePopup close={close2} subject={post.categories[1].name} 
      link={post.acf.download_pdf_link
      && post.acf.download_pdf_link}
      // sucess={open3}
      /> : ''}
      {display3 ? <WhitepaperPopup 
      close={close3}
      link={post.acf.download_pdf_link
        && post.acf.download_pdf_link}
      /> : ''}
      <BlogPostTemplate
        slug={post.slug}
        acf={post.acf}
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        authorpic={post.author.avatar_urls}
        socialIcon={data.wordpressAcfOptions}
        image={
          post.featured_media.localFile &&
          post.featured_media.localFile.childImageSharp.fluid.src
        }
        open={open}
        open2={open2}
        open3={open3}

        alldata={data.allWordpressPost.nodes}
        wp_id={post.wordpress_id}
      />
      <GetInTouch/>
    </TemplateWrapper>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }

  query BlogPostByID($id: String!) {
    wordpressAcfOptions {
      options {
        social_icons {
          linkedin
          facebook
          twitter
        }
      }
    }
    allWordpressPost {
      nodes {
        
        title
        wordpress_id
        slug
        categories {
          name
        }
       
        featured_media {
          source_url
          localFile {
            childImageSharp {
              gatsbyImageData
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      pageInfo {
        perPage
      }
    }
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      wordpress_id
      content
      categories {
        name
      }
      acf {
        download_pdf_link
        
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
      author {
        name
        description
        slug
        avatar_urls {
          wordpress_96
        }
      }
    }
  }
`
