import React, { useState, useRef  } from 'react'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import {FloatButton} from 'antd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayback = () => {
      if (isPlaying) {
        console.log(audioRef.current)
        audioRef.current.pause();
      } else {
        console.log(audioRef.current)
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };

  return (

    <div>
    <FloatButton onClick={togglePlayback} icon = { <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} style={{color: "#ffaebc",}} />} tooltip={<div>Fleeting Moment</div>} />
    <audio ref={audioRef}>
        <source src="/music/FFXIV Endwalker - Fleeting Moment(P11 Theme).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    </div>
  )
}
