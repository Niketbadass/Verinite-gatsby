import React, { useState, useEffect } from "react";
import './audio.scss';
import test from '../../assets/img/wave.svg';
import pause from '../../assets/img/pause-solid.svg';
import play from '../../assets/img/play-solid.svg';
import { set } from "lodash";
import { message } from "antd";

// const useAudio = (url, audioPlay) => {



//   const [playing, setPlaying] = useState(false);
//   const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
//   const [temp, setTemp] = useState(0)
//   const [width, setWidth] = useState(0)
//   const [currentT, setCurrentT] = useState("")
//   const [duration, setDuration] = useState(0)
//   // audio.preload="auto"
//   // console.log(audio.currentTime)
//   // console.log(audio.duration)
//   useEffect(() => {
//     if (audioPlay == 2 && temp == 0) {

//       toggle()
//       setTemp(1)
//     }
//   }, [audioPlay]);



//   useEffect(() => {
//     if(playing){
//       audio.play();
//       setDuration(audio.duration)
//       console.log(duration)
//       setCurrentT(audio.currentTime)
//     }
//     else{
//       audio.pause()
//     }
//     // playing ? audio.play() : audio.pause();
//   },
//     [playing]
//   );
//   // useEffect(()=>{
//   //   setCurrentT(audio.currentTime)
//   //   // console.log(currentT)
//   // },[duration])
//   useEffect(()=>{
//     setCurrentT(audio.currentTime)
//     console.log(currentT)
//   })



//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];

//   };

const Player = ({ url, audioPlay }) => {
  // const [playing, toggle] = useAudio(url, audioPlay);
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));
  const [width, setWidth] = useState(0)
  // const [currentT, setCurrentT] = useState("")
  // const [duration, setDuration] = useState(0)
  const toggle = () => setPlaying(!playing);

  
  
  useEffect(() => {
    if (playing) {
      audio.play();
      
      // setTimeout
    }
    else {
      audio.pause()
    }
    // playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  useEffect(()=>{

  },[])
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  useEffect(()=>{
    // audio.currentTime&&setTimeout(()=>{
      setWidth( (audio.currentTime / audio.duration) * 100)
      // console.log(width)
    // },[500])
  },[audio.currentTime])
  return (
    <div className="mt_40 row mr-0 ml-0">
      {/* <button className="play-audio" onClick={toggle}>{playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button> */}

      <button className="play-audio" onClick={toggle}>
        {playing ?
          <img
            src={pause}
          />
          : <img
            src={play}
          />}
      </button>
      {playing?(
      <div className="audio-box">
        <div className="images-audio wave-icon1" style={{width:`${width}%`}}>
        </div>
        <div className="images-audio wave-icon">
        </div>
      </div>
      ):("")}
      

    </div>
  );
};

export default Player;