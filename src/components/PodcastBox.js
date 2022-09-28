import React, { useEffect, useState, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import pause from '../assets/img/pause-solid.svg';
import play from '../assets/img/play-solid.svg';
import wave from '../assets/img/wave2.svg'

import ReactHtmlParser from 'react-html-parser'

const BlogCard = props => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio());
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0)
  const [width, setWidth] = useState(0)
  const [duration, setDuration] = useState(0)
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    if (playing) {
      
      // if(audioRef.current.play()!==undefined)
      // audioRef.current.laod()
      audioRef.current.play().catch(e => {
        // console.log(e)
      }).then(e => {
        console.log("audio",
        audioRef.current)
        audioRef.current.play()
      })
      // audio.play();

      // setTimeout
    }
    else {
      // console.log("",)
      if (audioRef.current.pause() !== undefined)
        audioRef.current.pause().catch(e => {
          console.log(e)
        }).then(e => {
          audioRef.current.pause()
        })
      // audio.pause()
    }
    // playing ? audio.play() : audio.pause();
  },
    [playing]
  );
  useEffect(() => {

  }, [])
  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setPlaying(false));
    return () => {
      audioRef.current.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  useEffect(() => {
    setWidth((currentTime / duration) * 100)
  }, [currentTime])
  const audioRef = useRef();
  useEffect(() => {
    props.btnToggle ? audio.play() : audio.pause();
  },
    [props.btnToggle]
  );
  const { image: imageFile, title, socialClass, slug } = props

  const imageClassName = 'blog_img'

  return (
    <div
      className="col-lg-4 col-md-6 mt_30"
    // key={post.wordpress_id}
    >
      <div className="blog_box ">
        <div
          className="blog_img overflow-hidden"
        >
          <img
            src={
              props.image
            }
          />
        </div>
        <h6>{ReactHtmlParser(props.title)}</h6>
        <div
          className="mt_10"
          // dangerouslySetInnerHTML={{ __html:  }}
          style={{
            width: '303px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        />
        {/* <p className="blog_podcast_p mt_10">By {post.author.name}</p> */}
        <div className="blog_podcast">
          <audio
            src={props.url}
            ref={audioRef}
            onLoadedMetadata={e =>
              setDuration(audioRef.current.duration)
            }
            onTimeUpdate={e =>
              setCurrentTime(e.target.currentTime)
            }
          />
          <button className="audio_podcast_btn" onClick={toggle}>

            {playing ?
              <img
                src={pause}
              />
              : <img
                src={play}
              />}
          </button>
          <div className="audio-box">
            <div className="images-audio2 wave-icon1" style={{ width: `${width}%` }}>
            </div>
            <div className="images-audio2 wave-icon">
            </div>
          </div>
          {/* <img
            src={wave}
            className="wave-icon"
            alt="verinite"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default BlogCard
