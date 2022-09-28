import React from 'react'

const BigButton = props => {
  const { btnText, btnClass,link,click,target, } = props
  return (
    <a href={link?link:null}  target={target?"_blank":"_self"} className={`button ${btnClass}`} onClick={click?click:null}>
      {btnText}
    </a>
  )
}
export default BigButton
