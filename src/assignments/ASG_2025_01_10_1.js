import { useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const Assignment18 = () => {
  const [time, setTime] = useState(0);
  const [colors, setColor] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const unshiftColor = () => {
    const random = Math.random();
    const randomColor = random < 0.5 ? "blue" : "red";
    setColor([randomColor, ...colors]);
  };

  useEffect(() => {
    if (gameOver) return;

    const timeout = setTimeout(() => {
      if (colors.length >= 6) {
        setGameOver(true);
        return;
      }
      setTime(time + 1);
      unshiftColor();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time, colors, gameOver]);

  const handleClick = (color) => {
    if (gameOver) return;

    if (colors[colors.length - 1] === color) {
      setColor(colors.slice(0, -1));
      setScore(score + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center">
        <Typography variant="h4" mb={2}>
          Assignment 18
        </Typography>
        {!gameOver ? (
          <>
            <Typography variant="h6" mb={2}>
              Score: {score}
            </Typography>
            <div>
              <div style={{ display: "flex", gap: "2px", justifyContent: "center" }}>
                {colors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: color,
                    }}
                  ></div>
                ))}
              </div>
              <Box mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleClick("blue")}
                  sx={{ mr: 2, backgroundColor: "blue" }}
                >
                  Blue
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleClick("red")}
                  sx={{ backgroundColor: "red" }}
                >
                  Red
                </Button>
              </Box>
            </div>
          </>
        ) : (
          <><Typography variant="h5" color="error" mt={4}>
              Game Over! Final Score: {score}
            </Typography><Button
              variant="contained"
              onClick={()=> window.location.reload()}
              sx={{
                bgcolor: "green",
                "&:hover": { bgcolor: "darkgreen" },
                marginTop: "20px",
              }}
            >
                Play Again
              </Button></>
        )}
      </Box>
    </Container>
  );
};

export default Assignment18;
