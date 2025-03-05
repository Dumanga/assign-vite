import { useState, useEffect } from "react";

const Assignment27 = () => {
  const frameCount = 12;
  const frameSize = 220; //  220px x 220px
  const [frame, setFrame] = useState(0);
  const [direction, setDirection] = useState("forward");
  const [delay, setDelay] = useState(100);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setTimeout(() => {
      setFrame((prevFrame) => {
        if (direction === "forward") {
          return prevFrame === frameCount - 1 ? 0 : prevFrame + 1;
        } else {
          return prevFrame === 0 ? frameCount - 1 : prevFrame - 1;
        }
      });
    }, delay);

    return () => clearTimeout(interval);
  }, [frame, isPlaying, direction, delay]);

  const x = (frame % 3) * -frameSize;
  const y = Math.floor(frame / 3) * -frameSize;

  return (
    <div>
      <h1>Assignment 27</h1>
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
        <label>
          Direction:
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            style={{ margin: "5px", padding: "5px" }}
          >
            <option value="forward">Forward</option>
            <option value="backward">Backward</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Speed:
          <input
            type="range"
            min="50"
            max="500"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            style={{ margin: "5px" }}
          />
          {delay}ms
        </label>
      </div>

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
            onClick={() => setFrame(i)}
          >
            Frame {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          margin: "5px",
          padding: "8px",
          backgroundColor: isPlaying ? "red" : "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "Stop" : "Start"} Animation
      </button>

      <button
        onClick={() => {
          setFrame(0);
          setIsPlaying(false);
        }}
        style={{
          margin: "5px",
          padding: "8px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Assignment27;