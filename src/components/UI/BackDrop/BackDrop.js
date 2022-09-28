import React from 'react'
import './BackDrop.scss'

const backDrop = props =>
  props.show ? <div className="back-drop" onClick={props.clicked}></div> : null

export default backDrop
