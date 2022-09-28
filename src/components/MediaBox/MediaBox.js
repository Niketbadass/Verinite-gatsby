import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import MediaModal from '../UI/MediaModal/Modal'
import BackgroundImage from './BackgroundImage'
import './MediaBox.scss'
import Play from '../icons/Play'

const MediaBox = props => {
  const [modalshow, setModalshow] = useState(false)
  

  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`video_box   align-items-end justify-content-center text-center ${
            props.class ? props.class : ''
          }
          ${modalshow?"d-none":"d-flex"}
          `}
        >
          {props.showMissionBoxBackground && <BackgroundImage />}
          <div className={`${
            modalshow?"d-none":""
          }`}>
            <button
              onClick={() => setModalshow(!modalshow)}
              className={`${props.play ? props.play : 'play-video'}`}
            >
              <Play />
            </button>
            <h3 className="text-white">{props.videoText}</h3>
          </div>
          
          {/* <MediaModal
            modalShow={modalshow}
            channelType={props.channelType}
            videoId={props.videoId}
            closeModal={() => setModalshow(!modalshow)}
          /> */}
        </div>
        <div className="player-div">
        <div className={`${modalshow?"d-block":"d-none"}`}>
          <button
           onClick={() => setModalshow(!modalshow)} 
          >X</button>
          <ReactPlayer 
          url={props.videoUrl}
          playing={modalshow}
          className="player-style"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaBox
