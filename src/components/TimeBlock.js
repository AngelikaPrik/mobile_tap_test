import React from "react";
import "../styles/responsivePlayer.scss"

const TimeBlock = ({img, imgFull, timer}) => {
  return (
    <>
      <div className="timer_num">{timer}</div>
      <div className="progress">
        <img src={img} alt="" />
        <div className="progress-line" style={{ height: `${timer}%` }}>
          <div className="item">
            <img src={imgFull} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeBlock;
