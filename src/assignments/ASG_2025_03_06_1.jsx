/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const Assignment28 = () => {
  const frameCount = 9;
  const frameWidth = 130;
  const frameHeight = 185;
  const [frame, setFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setFrame((prev) => (prev + 1) % frameCount);
      }, 65);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div>
      <h1>Assignment 28</h1>
      <div
        style={{
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          backgroundImage: "url(./boy-walking-2.png)",
          backgroundPosition: `-${frame * frameWidth}px 0px`,
          backgroundSize: `${frameCount * frameWidth}px ${frameHeight}px`,
          backgroundRepeat: "no-repeat",
          margin: "10px",
        }}
      ></div>

      <button
        style={{
          margin: "5px",
          padding: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onMouseDown={() => setIsPlaying(true)}
        onMouseUp={() => setIsPlaying(false)}
        onMouseOut={() => setIsPlaying(false)}
      >
        Play
      </button>
    </div>
  );
};

export default Assignment28;
