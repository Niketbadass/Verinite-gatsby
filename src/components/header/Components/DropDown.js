import React from 'react'
import { Map } from 'react-lodash'
import { Link } from 'gatsby'
const DropDown = props => {

  return (
    <div className="dropdown-menu">
      <div className="row justify-content-center">
        {/* <Map
          collection={content}
          iteratee={data => ( */}
            <div className="col-md-12">
              <h5>{props.head}</h5>
              <Map
                collection={props.menuItems}
                iteratee={item => (
                  <ul key={item.id}>
                   
                    <li>
                    <Link 
                      to={item.url}
                      className="headerLink"
                      >
                      <p>{item.title}</p>
                      <span>{item.acf.menu_text}</span>

                    </Link>

                    </li>
                  </ul>
                )}
              ></Map>
            </div>
        {/* //   )}
        // ></Map> */}
      </div>
    </div>
  )
}

export default DropDown
