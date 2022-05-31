import React from "react";
import ReactPlayer from "react-player";
import "../styles/responsivePlayer.scss";
import TimeBlock from "./TimeBlock";

const ResponsivePlayer = ({ src, timer, isPlay, btnPlay }) => {
  return (
    <>
      <div style={ isPlay === false ? { color: "white", background: "#000" } : { color: "#FF0059" }} className="player-wrapper" >
        <div
          className="timer left"
          style={isPlay === false ? { display: "none" } : { display: "block" }}
        >
          <TimeBlock img={"/img/time_left.svg"} imgFull={"/img/time_left-full.svg"} timer={timer}/>
        </div>

        <ReactPlayer
          playing={isPlay}
          className="react-player"
          url={src}
          width="100%"
          height="100%"
        />

        <button
          className={timer > 0 ? "btn-play animateMove" : "btn-play"}
          onClick={btnPlay}
        >
          <img src="/img/play_btn.svg" alt="" />
        </button>

        <div className="timer right" style={isPlay === false ? { display: "none" } : { display: "block" }}>
          <TimeBlock img={"/img/time_right.svg"} imgFull={"/img/time_right-full.svg"} timer={timer}/>
        </div>
      </div>
    </>
  );
};

export default ResponsivePlayer;
