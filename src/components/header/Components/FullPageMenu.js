import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Map } from 'react-lodash'
import _ from 'lodash'
import Img from 'gatsby-image'

import SiteLogo from '../../UI/SiteLogo/SiteLogo'
import WidgetBox from '../../UI/WidgetBox/WidgetBox'
import SocialIcons from '../../UI/SocialIcons/SocialIcons'

const FullPageMenu = props => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query fullPageMenu {
            allWordpressWpApiMenusMenusItems {
              nodes {
                name
                id
                items {
                  url
                  title
                  wordpress_id
                }
              }
            }
            wordpressAcfOptions {
              options {
                social_icons {
                  linkedin
                  facebook
                  twitter
                }
              }
            }
            file(name: { regex: "/menu_bg/" }) {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        `}
        render={data => {
          const { file: backgroundImage } = data
          // console.log("header",data.allWordpressWpApiMenusMenusItems.nodes)
          return (
            <div className={props.showclass}>
              {backgroundImage && (
                <Img
                  fluid={backgroundImage.childImageSharp.fluid}
                  className="background_image"
                />
              )}
              <div className="container mb_20">
                <div className="row align-items-center top_bar">
                  <div className="col-7 logo">
                    <SiteLogo imgclassName="img-fluid" />
                  </div>
                  <div className="col-5 text-right">
                    <div
                      className="close_btn"
                      onClick={() => props.setFullPageMenu()}
                    >
                      ×
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-6 order-md-2">
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Domains'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Domains'
                        )[0].name
                      }
                    />
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Industries'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Industries'
                        )[0].name
                      }
                    />
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Application Stack'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Application Stack'
                        )[0].name
                      }

                    />
                    
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 order-md-4">
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Resources'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Resources'
                        )[0].name
                      }
                    />
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Company'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Company'
                        )[0].name
                      }
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-6 order-md-3">
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Services'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Services'
                        )[0].name
                      }
                    />
                    <WidgetBox
                      box_items={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Media'
                        )[0].items
                      }
                      name={
                        _.filter(
                          data.allWordpressWpApiMenusMenusItems.nodes,
                          o => o.name === 'Media'
                        )[0].name
                      }
                    />
                  </div>
                  <div className="col-lg-4 col-md-3 col-6 order-md-1">
                    <ul className="menu menu-mobile-hide">
                      <Map
                        collection={
                          _.filter(
                            data.allWordpressWpApiMenusMenusItems.nodes,
                            o => o.name === 'Side Menu'
                          )[0].items
                        }
                        iteratee={item => (
                          <li key={item.wordpress_id} >
                            <Link to={item.url}>{item.title}</Link>
                          </li>
                        )}
                      ></Map>
                    </ul>
                    <SocialIcons from="header" 
                    social={
                      data.wordpressAcfOptions.options.social_icons
                    }
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      />
    </>
  )
}

export default FullPageMenu
