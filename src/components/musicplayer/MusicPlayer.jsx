import React, { useEffect, useRef, useState } from "react";
import "./musicplayer.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";
export default function MusicPlayer() {
  const audios = [
    "assets/musics/DaJazzBlues-DougMaxwell.mp3",
    "assets/musics/PianoWaltzLoop-WindowsofKen.mp3",
    "assets/musics/ClaudioTheWorm-TheGreenOrbs.mp3",
  ];
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return (
    <div className="music_container">
      <p className="music_title">
        {audios[count].split("/musics/")[1].slice(0, -4)}
      </p>
      <audio src={audios[count]} ref={audioRef} />
      <div className="btns">
        <button
          onClick={() => {
            setPlay(false);
            if (count === 0) {
              setCount(audios.length - 1);
            } else {
              setCount(count - 1);
            }
          }}
        >
          <GrFormPrevious />
        </button>
        <button
          onClick={() => {
            if (play) {
              setPlay(false);
            } else {
              setPlay(true);
            }
          }}
        >
          {play ? <FaRegStopCircle /> : <AiFillPlayCircle />}
        </button>
        <button
          onClick={() => {
            setPlay(false);
            if (count === audios.length - 1) {
              setCount(0);
            } else {
              setCount(count + 1);
            }
          }}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
}
