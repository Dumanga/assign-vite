import { useState } from "react";

const Assignment26 = () => {
  const frameCount = 12;
  const frameSize = 220; //  220px x 220px
  const [frame, setFrame] = useState(0);

  const handleFrameChange = (frame) => {
    setFrame(frame);
  };

  const x = (frame % 3) * -frameSize;
  const y = Math.floor(frame / 3) * -frameSize;

  return (
    <div>
      <h1>Assignment 26</h1>
      <div
        style={{
          width: `${frameSize}px`,
          height: `${frameSize}px`,
          backgroundImage: "url(./boy-walking.png)",
          backgroundPosition: `${x}px ${y}px`,
          backgroundSize: "660px 880px",
          backgroundRepeat: "no-repeat",
          margin: "10px",
        }}
      ></div>

      <div>
        {[...Array(frameCount)].map((_, i) => (
          <button
            key={i}
            style={{
              margin: "5px",
              padding: "8px",
              backgroundColor: frame === i ? "green" : "gray",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleFrameChange(i)}
          >
            Frame {i + 1}
          </button>

        ))}
      </div>
      <button onClick={() => setFrame(0)} 
      style={
        {
          margin: "5px",
          padding: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }
      }>Reset Frames</button>
    </div>
  );
};

export default Assignment26;
