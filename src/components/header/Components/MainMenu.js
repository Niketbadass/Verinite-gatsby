import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Map } from 'react-lodash'
import _ from 'lodash'

import Dropdown from './DropDown'
import AngleDown from '../../icons/AngleDown'

const MainMenu = props => {
  return (


    <StaticQuery
      query={graphql`
          query PageMenu {
            allWordpressMenusMenusItems {
              nodes {
                name
                id
                items {
                  url
                  title
                  wordpress_id
                  acf {
                    menu_text
                  }
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
        return (
          <div className="main-menu temp-margin-top-fix">
            <ul id="menu" className={props.toggle ? 'open' : ''}>


              <li className="nav-item dropdown" >
                <Link

                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Domains
                   <AngleDown />
                </Link>
                <Dropdown head="BY Domains" menuItems={_.filter(data.allWordpressMenusMenusItems.nodes, o => o.name === 'Domains')[0].items} />
              </li>
              <li className="nav-item dropdown" >
                <Link

                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Industries
                   <AngleDown />
                </Link>
                <Dropdown head="BY Industries" menuItems={_.filter(data.allWordpressMenusMenusItems.nodes, o => o.name === 'Industries')[0].items} />
              </li>
              <li className="nav-item dropdown" >
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Services
                   <AngleDown />
                </Link>
                <Dropdown head="BY SERVICES" menuItems={_.filter(data.allWordpressMenusMenusItems.nodes, o => o.name === 'Services')[0].items} />
              </li>
              <li className="nav-item dropdown" >
                <Link
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  Resources
                   <AngleDown />
                </Link>
                <Dropdown head="BY Resources" menuItems={_.filter(data.allWordpressMenusMenusItems.nodes, o => o.name === 'Resources')[0].items} />
              </li>
              <li className="nav-item dropdown" >
                <Link
                  to="/life-verinite/"
                  className="nav-link dropdown-toggle"
                >
                  Culture
                  {/* <AngleDown /> */}
                </Link>
              </li>
              <li className="nav-item dropdown" >
                <Link
                  to="/contact-us/"
                  className="nav-link dropdown-toggle"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )
      }}
    />

  )
}

export default MainMenu
