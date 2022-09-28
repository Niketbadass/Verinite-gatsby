import React from 'react'
import { Link } from 'gatsby'

const Servicebox = props => {
  const { icon, title, description,read } = props
  return (
    <div class="banking_box">
      <div class="icon">
      <img
        src={icon}
        class="service_boxIcon"
        />
      </div>
      <h6 class="mt_15">{title}</h6>
      <p class="mt_10 mx-auto">{description}</p>
      {read?(
        <Link to={`${read}`}>
        <p class="mt_10 mx-auto">read more..</p>
      </Link>
    
      
      ):("")}
    </div>
  )
}
export default Servicebox
