import React, { useEffect, useState } from "react";
import ResponsivePlayer from "./components/ResponsivePlayer";
import "./styles/index.scss";

function App() {
  const [counter, setCounter] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [urls, setUrls] = useState([
    "/videos/video.mp4",
    "/videos/video-2.mp4",
    "/videos/video-3.mp4",
  ]);
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentVideoId, setCurrentVideoId] = useState(0);

  useEffect(() => {
    const time = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    return () => clearInterval(time);
  }, [counter]);

  const onPlay = () => {
    setCounter(100);
    changeUrl();
  };

  const changeUrl = () => {
    setIsPlay(false);
    setCurrentUrl(urls[currentVideoId]);
    setIsPlay(true);
    if (currentVideoId === urls.length - 1) {
      setCurrentVideoId(0);
    } else {
      setCurrentVideoId((prev) => prev + 1);
    }
  };

  
  return (
    <>
      <div className="container">
        {counter === 0 && isPlay ? (
          <p className="fail">вы не прошли интерактив</p>
        ) : (
          <>
            <ResponsivePlayer
              isPlay={isPlay}
              timer={counter}
              src={currentUrl}
              btnPlay={onPlay}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
