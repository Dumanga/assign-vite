/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import safe from "../assets/sounds/safe.mp3";
import boom from "../assets/sounds/boom.mp3";

const Minesweeper = () => {
  const gridSize = 10;

  // States
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);
  const [opened, setOpened] = useState([]);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const newItems = [];
    const newOpened = [];

    for (let i = 0; i < gridSize; i++) {
      const rowItems = [];
      const rowOpened = [];

      for (let j = 0; j < gridSize; j++) {
        const randomItem = Math.floor(Math.random() * 4); // max is 3(0123)
        rowItems.push(randomItem);
        rowOpened.push(false);
      }

      newItems.push(rowItems);
      newOpened.push(rowOpened);
    }

    setItems(newItems);
    setOpened(newOpened);
  }, []);

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleClick = (row, col) => {
    if (ended || opened[row][col]) return; // return if game ended or already opened cell

    const newOpened = [...opened];
    newOpened[row][col] = true;
    setOpened(newOpened);

    const value = items[row][col];

    if (value === 0) {
      // Bomb blast  - booom
      playSound(boom);
      setScore((prevScore) => prevScore - 5);
    } else {
      // safe cell
      playSound(safe)
      setScore((prevScore) => prevScore + value);
    }

    // check if all cells are opened
    const allOpened = newOpened.every((row) => row.every((cell) => cell));
    if (allOpened) {
      setEnded(true);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center">
        <Typography variant="h4">Minesweeper Game</Typography>
        <Typography variant="h6" sx={{marginTop: 3, marginBottom: 2}}>Score: {score}</Typography>
        <Box display="flex" flexDirection="column" alignItems="center">
          {items.map((row, rowIndex) => (
            <Box key={rowIndex} display="flex">
              {row.map((value, colIndex) => (
                <Button
                  key={colIndex}
                  variant="contained"
                  sx={{
                    width: 40,
                    height: 40,
                    m: 0.5,
                    backgroundColor: opened[rowIndex][colIndex]
                      ? value === 0
                        ? "red"
                        : "green"
                      : "blue",
                    color: opened[rowIndex][colIndex] ? "white" : "black",
                  }}
                  onClick={() => handleClick(rowIndex, colIndex)}
                >
                  {opened[rowIndex][colIndex] && (value === 0 ? "💣" : value)}
                </Button>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Minesweeper;
