import React from 'react'

const Bankingbox = props => {
  const { faIconClass, title, description } = props
  return (
    <div className="banking_box">
      <div className="icon">
        <i className={faIconClass}></i>
      </div>
      <h6 className="mt_15">{title}</h6>
      <p className="mt_10 mx-auto">{description}</p>
    </div>
  )
}
export default Bankingbox
