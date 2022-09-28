import React,{ useState, useEffect, useRef } from 'react'
import './audio.scss';
import './MissionBox.scss'
import arrow_img from '../../assets/img/arrow2.svg'
import Img from 'gatsby-image'
import pause from '../../assets/img/pause-solid.svg';
import play from '../../assets/img/play-solid.svg';
const MissionBox = props => {
  const [playing, setPlaying] = useState(false);
  const [currentTime,setCurrentTime]= useState(0)
  const [width, setWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    if (playing) {
      // if(audioRef.current.play()!==undefined)
      // audioRef.current.laod()
      audioRef.current.play().catch(e=>{
        console.log(e)
      }).then(e=>{
        audioRef.current.play()
      })
      // audio.play();
      
      // setTimeout
    }
    else {
      // console.log("",)
      if(audioRef.current.pause()!==undefined)
      audioRef.current.pause().catch(e=>{
        console.log(e)
      }).then(e=>{
        audioRef.current.pause()
      })
      // audio.pause()
    }
    // playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  useEffect(()=>{

  },[])
  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false));
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  useEffect(()=>{
    setWidth( (currentTime / duration) * 100)
  },[currentTime])
  const audioRef = useRef();



  return (
    <div className="row">
      <div className="col-lg-5 mt_30">
        <div className="mission_box">
          <h2>{props.title}</h2>
          <h6 className="mt_25">{props.content}</h6>
          <div >
            <div className="mt_40 row mr-0 ml-0">

              <button className="play-audio" onClick={toggle}>
                <audio
                  src={props.audio}
                  ref={audioRef}
                  onLoadedMetadata={e=>
                    setDuration(audioRef.current.duration)
                  }
                  onTimeUpdate={e=>
                  setCurrentTime(e.target.currentTime)
                  }
                />
                {playing ?
                  <img
                    src={pause}
                  />
                  : <img
                    src={play}
                  />}
              </button>
                <div className="audio-box">
                  <div className="images-audio wave-icon1" style={{ width: `${width}%` }}>
                  </div>
                  <div className="images-audio wave-icon">
                  </div>
                </div>


            </div>
            
          </div>
          {/* <Img fluid={props.playImageFluid} className="img-fluid play" /> */}
          <a href="/resource-listing?type=White%20Papers">
            {props.btnText} <img src={arrow_img} alt="" />
          </a>
        </div>
      </div>
      <div className="col-lg-7 mt_30">
        <Img fluid={props.missionImageFluid} className="img-fluid play" />
      </div>
    </div>
  )
}

export default MissionBox
