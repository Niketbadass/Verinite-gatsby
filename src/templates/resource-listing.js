import { graphql, Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'
import _ from 'lodash'
import Helmet from 'react-helmet'
import queryString from 'query-string'
import ReactHtmlParser from 'react-html-parser'
import PodcastBox from '../components/PodcastBox'
import TemplateWrapper from '../components/Layout'
import Banner from '../components/SliderComponents/Banner/CustomBanner'
import CustomModal from '../components/ModalPopup/ModalPopup'
import notfound from '../assets/img/not found.svg'
import GetInTouch from '../components/GetInTouch/GetInTouch'

const ResourceListing = props => {
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
      if (window !== "undefined") {
        if (localStorage.getItem("suscribe") !== "true") {
          open()
        }
      }
    }, 15000)
    return () => clearTimeout(timer)
  }, [])

  // popup close

  // For Podcast
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" && new Audio());
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  const toggle = (url, index) => {
    audio.src = url
    // console.log(url)
    setPlaying(!playing)

  };

  // Podcast close

  const scrollToRef = ref => {
    window.scrollTo({ top: ref.current.offsetTop + 220, behavior: 'smooth' })
  }
  const myRef = useRef(null);

  const executeScroll = () => {
    // console.log(myRef)
    scrollToRef(myRef)
  }

  // Pagination data thing




  const POSTS_PER_PAGE = 6

  const [maximumPostsShown, setMaximumPostsShown] = useState(POSTS_PER_PAGE)

  const getCategoryParam = () => {
    const params = queryString.parse(props.location.search)
    return params.type
  }

  const categoryParam = getCategoryParam()

  const { data } = props
  const content = data.wordpressPage.acf.top_slider
  let headData = [];
  data.allWordpressPost.nodes.map((e, index) => {


    if (e.categories.some(e => e.name == "Blogs")) {
      headData.push(e)

    }
  })

  


  const categories = data.allWordpressCategory.nodes.map(e => e)

  const getPaginatedPosts = posts => posts.slice(0, maximumPostsShown)

  const getPaginatedDefaultPosts = () => {
    const { nodes: posts } = data.allWordpressPost
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
    const posts = data.allWordpressPost.nodes || []
    const filteredData = posts.filter(post => {
      const { title } = post
      return title.toLowerCase().includes(query.toLowerCase())
    })
    setState({
      query,
      filteredData: filteredData,
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
    return _.filter(data.allWordpressPost.nodes, function (post) {
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
    return data.allWordpressPost.nodes.length
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
      <Helmet title={` Verinite | Resources`} />
      <main>
        <Banner
          seperateContent={headData.slice(0, 5)}
          seperatBackground={headData.slice(0, 5)}
          btnPopup
          popupclick={open}
        />
        {display ? <CustomModal close={close} /> : ''}
        <div className="blog_area section_padd">
          <div className="container">
            <div className="row">
              {/* Input Button for Submit */}
              <div className="col-12 text-center mb_15">
                <h2 className="title_sm">Knowledge Center</h2>
                <div className="search_box" ref={myRef}>
                  <input
                    type="text"
                    placeholder="Search"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <ul className="nav nav-pills justify-content-center blog_tab">
              {/* {categories.map((category, index) => {
                if (category.wordpress_parent == 1175) {
                  return ( */}
              <li
                className="nav-item"
                key="0"
                onClick={() => {
                  handleSelectedCategory("All Articles")
                }}
              >
                <a
                  className={`nav-link ${"All Articles" === selectedCategory ? 'active' : ''
                    }`}
                  data-toggle="pill"

                >
                  All Articles
                  {/* {category.name} */}
                </a>
              </li>
              <li
                className="nav-item"
                key="1"
                onClick={() => {
                  handleSelectedCategory("Blogs")
                }}
              >
                <a
                  className={`nav-link ${"Blogs" === selectedCategory ? 'active' : ''
                    }`}
                  data-toggle="pill"

                >
                  Blogs
                  {/* {category.name} */}
                </a>
              </li>
              <li
                className="nav-item"
                key="2"
                onClick={() => {
                  handleSelectedCategory("Podcasts")
                }}
              >
                <a
                  className={`nav-link ${"Podcasts" === selectedCategory ? 'active' : ''
                    }`}
                  data-toggle="pill"

                >
                  Podcasts

                </a>
              </li>
              <li
                className="nav-item"
                key="3"
                onClick={() => {
                  handleSelectedCategory("Success Stories")
                }}
              >
                <a
                  className={`nav-link ${"Success Stories" === selectedCategory ? 'active' : ''
                    }`}
                  data-toggle="pill"

                >
                  Success Stories

                </a>
              </li>
              <li
                className="nav-item"
                key="4"
                onClick={() => {
                  handleSelectedCategory("White Papers")
                }}
              >
                <a
                  className={`nav-link ${"White Papers" === selectedCategory ? 'active' : ''
                    }`}
                  data-toggle="pill"

                >
                  White Papers

                </a>
              </li>
              {/* <li
                      className="nav-item"
                      key="5"
                      onClick={() => {
                        handleSelectedCategory("Brochures")
                      }}
                    >
                      <a
                        className={`nav-link ${"Brochures" === selectedCategory ? 'active' : ''
                          }`}
                        data-toggle="pill"
                         
                      >
                        Brochures
                      </a>
                    </li> */}
              {/* //     )
              //   }
              // })} */}
            </ul>
            {/* {Categories End} */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="all">
                <div className="row">
                  {state.filteredData.length == 0 ? (
                    <div className="col-12 mt_40 text-center">
                      <img
                        src={notfound}
                        className="notfoundlogo"
                      />
                      <h2 className=" mt_30">Sorry, we couldn’t find any results</h2>
                      <p className=" mt_10">Try searching with other keyword</p>
                      <button className="button black_btn mt_20" onClick={executeScroll}>
                        search again
                      </button>
                    </div>
                  ) : ("")}
                  {state.filteredData.map((post, index) => {
                    if (post.categories.some(e => e.name == "Podcasts")) {
                      return (
                        <PodcastBox
                          index={index}
                          image={post.featured_media.source_url}
                          title={post.title}
                          // audioFunction={() => toggle(post.acf.podcastlink.source_url, index)}
                          // btnToggle={playing}
                          url={post.acf.podcastlink}
                        />

                      )
                    }
                    else {
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

                    }
                  })}
                </div>
                {state.filteredData.length == 0 ? (
                  ""
                ) : (renderShowMoreButton())}
                {/* {renderShowMoreButton()} */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <GetInTouch />
    </TemplateWrapper>
  )
}

export default ResourceListing

export const ResourceListingQuery = graphql`
  query ResourceListingss($id: String!) {
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
    allWordpressCategory {
      nodes {
        wordpress_parent
        name
      }
    }
  }
`
