import React from 'react'

import LinkedIn from '../../icons/Linkedin'
import Twitter from '../../icons/Twitter'
import Facebook from '../../icons/Facebook'

const SocialIcons = props => {
  return (
    <div className="social_icons">
      {props.from === 'footer' ? (
        <h6 className="text-uppercase text-white mb_20">let’s connect</h6>
      ) : (
        ''
      )}
      <a href={props.social && props.social.linkedin} target="_blank">
        <LinkedIn />
      </a>
      <a href={props.social && props.social.twitter} target="_blank">
        <Twitter />
      </a>
      <a href={props.social && props.social.facebook} target="_blank">
        <Facebook />
      </a>
    </div>
  )
}

export default SocialIcons
