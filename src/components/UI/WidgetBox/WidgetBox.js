import React from 'react'
import { Map } from 'react-lodash'
import { Link } from 'gatsby'

const WidgetBoxItem = props => {
  return (
    <div className="widget_box">
      {props.headlink?
      <a href={props.headlink}>
      <h6>{props.name}</h6>
      </a>
      :(<h6>{props.name}</h6>)}
      
      <ul>
        <Map
          collection={props.box_items}
          iteratee={item => (
            <li key={item.wordpress_id}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          )}
        ></Map>
      </ul>
    </div>
  )
}
export default WidgetBoxItem
