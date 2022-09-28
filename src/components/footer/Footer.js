import React from 'react'
import SiteLogo from '../UI/SiteLogo/SiteLogo'
import { Link } from 'gatsby'

import WidgetBox from '../UI/WidgetBox/WidgetBox'
import './footer.css'
import SocialIcons from '../UI/SocialIcons/SocialIcons'
import BackToTopItem from './BackToTop'
import { graphql, StaticQuery } from 'gatsby'
import _ from 'lodash'
import CookieConsent from "react-cookie-consent";
import cookie from "../../img/cookie.png"
const Footer = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query footer {
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
          }
        `}
        render={data => {
          return (
            <footer>
              <div className="footer_top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <SiteLogo />
                      <h6 className="text-white mt_30 text">
                        Cards, Payments & Lending Focused Specialist Technology Services & Solutions Company.
                      </h6>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
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
                        headlink='/application-stack/'
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4">
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
                            o => o.name === 'Products'
                          )[0].items
                        }
                        name={
                          _.filter(
                            data.allWordpressWpApiMenusMenusItems.nodes,
                            o => o.name === 'Products'
                          )[0].name
                        }
                      />
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
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
                    </div>

                    <div className="col-lg-4 copyright">
                      <div className="row align-items-end">
                        <div className="col-lg-12 col-sm-5">
                          <SocialIcons
                            from="footer"
                            social={
                              data.wordpressAcfOptions.options.social_icons
                            }
                          />
                        </div>
                        <div className="col-lg-12 col-sm-7 text-sm-right text-lg-left">
                          <p className="text-white mt_40">
                            © Verinite {new Date().getFullYear()}{' '}
                            <br class="d-none d-lg-block" /> All rights
                            reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_bottom">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <p className="text-white">
                        This site is compliant with Google
                        <a href="/privacy-policy/"> Privacy Policy </a> and
                        <a href="/terms-of-use/"> GDPR. Terms of Service </a> apply.
                      </p>
                    </div>
                  </div>
                </div>
                <CookieConsent
                  style={{ background: "#ffffff" }}
                  enableDeclineButton
                  flipButtons
                  buttonText="ACCEPT"
                  declineButtonText="DECLINE"
                  buttonClasses="Consect_btn_accept button"
                  declineButtonClasses="Consect_btn_decline button white_btn"
                  containerClasses="abahdasdjgdfhjghjghghg"
                  // overlayClasses=""
                >
                  <div className="row">
                  <div className="col-md-2">
                  <img 
                    src={cookie}
                  
                  />
                  </div>
                  <div className="col m-auto">
                  <p
                    style={{ color: "#142270", fontSize: "16px",lineHeight:"1.6" }}
                  >Verinite uses cookies to deliver you a seamless and personalized experience. By clicking accept you agree with our 
                  <Link to="/privacy-policy/"> <span style={{ color: "#142270", fontSize: "16px",lineHeight:"1.6" }}><u><strong>Privacy policy</strong></u></span></Link> and 
                  <Link to="/terms-of-use/"><span style={{ color: "#142270", fontSize: "16px",lineHeight:"1.6" }}> <u><strong>Terms of service.</strong></u></span></Link></p>
                  </div>
                  </div>
                </CookieConsent>
              </div>
            </footer>
          )
        }}
      />

      <BackToTopItem />

    </>
  )
}
export default Footer
