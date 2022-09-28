import { graphql, Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import queryString from 'query-string'
import Helmet from 'react-helmet'
import TemplateWrapper from '../components/Layout'
import Banner from '../components/SliderComponents/Banner/CustomBanner'
import CustomModal from '../components/ModalPopup/ModalPopup'
import GetInTouch from '../components/GetInTouch/GetInTouch'
import ReactHtmlParser from 'react-html-parser'

const Newsevents = props => {
  // for  Popup
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

  // popup close

  const POSTS_PER_PAGE = 6

  const [maximumPostsShown, setMaximumPostsShown] = useState(POSTS_PER_PAGE)

  const getCategoryParam = () => {
    const params = queryString.parse(props.location.search)
    return params.type
  }

  const categoryParam = getCategoryParam()

  const { data } = props
  let headData = [];
  data.allWordpressPost.nodes.map((e, index) => {


    if (e.categories.some(e => e.name == "Blogs")) {
      headData.push(e)

    }
  })
  const content = data.wordpressPage.acf.top_slider
  const categories = data.allWordpressCategory.nodes.map(e => e)

  const getPaginatedPosts = posts => posts.slice(0, maximumPostsShown)

  const getPaginatedDefaultPosts = () => {
    const { nodes: posts } = data.allWordpressWpNewsAndEvents
    if (posts) {
      return getPaginatedPosts(posts)
    }
    return []
  }

  const [state, setState] = React.useState({
    filteredData: getPaginatedDefaultPosts(),
    query: '',
  })

  const [selectedCategory, setSelectedCateogory] = useState('')

  const handleInputChange = event => {
    setSelectedCateogory('')
    const query = event.target.value
    const posts = data.allWordpressWpNewsAndEvents.nodes || []
    const filteredData = posts.filter(post => {
      const { title } = post
      return title.toLowerCase().includes(query.toLowerCase())
    })
    setState({
      query,
      filteredData,
    })
  }

  const resetMaximumPostsShown = () => {
    if (maximumPostsShown !== POSTS_PER_PAGE) {
      setMaximumPostsShown(POSTS_PER_PAGE)
    }
  }

  const handleSelectedCategory = value => {
    resetMaximumPostsShown()
    setSelectedCateogory(value)
  }

  const filterPosts = value => {
    return _.filter(data.allWordpressWpNewsAndEvents.nodes, function(post) {
      return _.some(post.categories, { name: value })
    })
  }

  const getPaginatedFilteredPosts = category => {
    const filteredPosts = filterPosts(category)
    return getPaginatedPosts(filteredPosts)
  }

  useEffect(() => {
    if (selectedCategory !== '') {
      const filteredPost = getPaginatedFilteredPosts(selectedCategory)
      setState({
        query: '',
        filteredData: filteredPost,
      })
    } else {
      setState({
        query: '',
        filteredData: getPaginatedDefaultPosts(),
      })
    }
  }, [selectedCategory, maximumPostsShown])

  useEffect(() => {
    if (categoryParam && categoryParam !== '') {
      setSelectedCateogory(categoryParam)
    }
  }, [categoryParam])

  const handleReadMoreClick = () => {
    setMaximumPostsShown(maximumPostsShown + POSTS_PER_PAGE)
  }

  const getPostsAmount = () => {
    if (selectedCategory) {
      const filteredPosts = filterPosts(selectedCategory)
      return filteredPosts.length
    }
    return data.allWordpressWpNewsAndEvents.nodes.length
  }

  const renderShowMoreButton = () => {
    const postsAmount = getPostsAmount()
    if (maximumPostsShown >= postsAmount) {
      return null
    }
    return (
      <div className="row mt-3 d-flex justify-content-center">
        <button className="button black_btn" onClick={handleReadMoreClick}>
          Show More
        </button>
      </div>
    )
  }
  return (
    <TemplateWrapper>
      <Helmet title={` Verinite | News | Events`} />

      <main>
        <Banner 
        seperateContent={headData.slice(0, 5)}
        seperatBackground={headData.slice(0, 5)}
        btnPopup popupclick={open}/>
        {display ? <CustomModal close={close} /> : ''}
        <div className="blog_area section_padd">
          <div className="container">
            <div className="row">
              {/* Input Button for Submit */}
              <div className="col-12 text-center mb_15">
                <h2 className="title_sm">Knowledge Center</h2>
                <form action="#" className="search_box">
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </div>
            {/* End Input Button */}
            {/* {Categories} */}
            <ul className="nav nav-pills justify-content-center blog_tab">
              {categories.map((category, index) => {
                if(category.wordpress_parent==162)
                {
                  return (
                    <li
                      className="nav-item"
                      key={index}
                      onClick={() => {
                        handleSelectedCategory(category.name)
                      }}
                    >
                      <a
                        className={`nav-link ${
                          category.name === selectedCategory ? 'active' : ''
                        }`}
                        data-toggle="pill"
                        href="#all"
                      >
                        {category.name}
                      </a>
                    </li>
                  )
                }
              })}
            </ul>
            {/* {Categories End} */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="all">
                <div className="row">
                  {state.filteredData.map(post => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 mt_30"
                        key={post.wordpress_id}
                      >
                        <div className="blog_box">
                          <Link
                            to={`/${post.slug}`}
                            className="blog_img overflow-hidden"
                          >
                            {post.featured_media && (
                              <img
                                src={
                                  post.featured_media.source_url
                                }
                              />
                             )} 
                          </Link>
                          <Link to={`/${post.slug}`}>
                          {post.title.length <= "45" ? (
                                <h6>{ReactHtmlParser(post.title)}</h6>
                              )
                                : (<h6>{ReactHtmlParser(post.title.slice(0, 45))}...</h6>)}
                          </Link>
                          <div
                            className="mt_10"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                            style={{
                              width: '303px',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
                {renderShowMoreButton()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <GetInTouch />

    </TemplateWrapper>
  )
}

export default Newsevents

export const newseventsAndNewseventQuery = graphql`
  query newseventsAndNewsevent($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      template
      slug
      id
      link
      acf {
        top_slider {
          author
          control_text
          date
          description
          sub_title
          title
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    allWordpressPost {
      nodes {
        author {
          name
        }
        title
        excerpt
        wordpress_id
        slug
        categories {
          name
        }
        acf {
          podcastlink
        }
        date(formatString: "MMMM DD, YYYY")
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
    allWordpressWpNewsAndEvents {
      nodes {
        title
        excerpt
        wordpress_id
        slug
        categories {
          name
          wordpress_parent
        }
        featured_media {
          source_url
          localFile {
            childImageSharp {
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
    allWordpressCategory {
      nodes {
        wordpress_parent
        name
      }
    }
  }
`
