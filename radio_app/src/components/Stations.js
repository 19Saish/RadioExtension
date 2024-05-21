import React, { useEffect, useState } from "react";
import RadioStations from "../RadioStations.json";

const Stations = () => {
  const [currentStation, setCurrentStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  // const [isReady, setIsReady] = useState(false)

  const [volume, setVolume] = useState(50);

  // const selectStation = (station) => {
  //   if (audio) {
  //     audio.pause();
  //   }
  //   const newAudio = new Audio(station?.RadioLink);
  //   setAudio(newAudio);
  //   setCurrentStation(station);
  //   newAudio.play();
  //   setIsPlaying(!isPlaying);
  // };

  useEffect(() => {
    const newAudio = new Audio(currentStation?.RadioLink);
    setAudio(newAudio);
  }, [currentStation]);

  const handlePlay = () => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handlePause = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(!isPlaying);
    }
  };


  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const styles = {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "10px",
  };

  const buttonStyles = {
    height: "80px",
    backgroundColor: "#F5F5DC",
    display: "flex",
    justifyContent: "end",
    cursor: "pointer",
  };

  const button = {
    backgroundColor: "#EED9C4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    width: "100%",
    cursor: "pointer",
  };

  const playBtn = {
    width: "200px",
    height: "60px",
    backgroundColor: "#EED9C4",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={styles}>
        {RadioStations.map((station, index) => (
          <div
            key={index}
            style={buttonStyles}
            onClick={() => setCurrentStation(station)}
          >
            <img src={station?.ImageLink} alt={station?.StationTitle} />
            <div style={button}>{station?.StationTitle}</div>
          </div>
        ))}
      </div>
      {currentStation && (
        <div>
          <h2 style={{}}>Now Playing: {currentStation?.StationTitle}</h2>
          <button style={playBtn} onClick={handlePlay}>
            Play
          </button>
          <button style={playBtn} onClick={handlePause}>
            Pause
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={handleVolume}
          />
        </div>
      )}
    </div>
  );
};

export default Stations;
