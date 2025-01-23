import { Box, Container, Typography, Button } from "@mui/material";
import { useState } from "react";

const Assignment19 = () => {
  // empty 3x3 grid with null values
  const [data, setData] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  // start with X sign
  const [sign, setSign] = useState("X");

  const handleClick = (row, col) => {
    // create a copy of the current data
    let newData = [...data];

    // update the clicked cell with current sign
    newData[row][col] = sign;
    setData(newData);

    // switch sign for next turn
    setSign(sign === "X" ? "O" : "X");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center">
        <Typography variant="h4" mb={2}>
          Assignment 19
        </Typography>

        <Typography variant="h6" mb={3}>
          Current Turn: {sign}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* create rows */}
          {data.map((row, rowIndex) => (
            <Box
              key={rowIndex}
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              {/* create cells in every row */}
              {row.map((cell, colIndex) => (
                <Button
                  key={colIndex}
                  variant="contained"
                  sx={{
                    width: "80px",
                    height: "80px",
                    fontSize: "24px",
                    margin: "4px",
                    backgroundColor: "#f5f5f5",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                    "&:disabled": {
                      backgroundColor: "#fafafa",
                      color: "#000",
                    }
                  }}
                  onClick={() => handleClick(rowIndex, colIndex)}
                  disabled={cell !== null}
                >
                  {cell || " "}
                </Button>
              ))}
            </Box>
          ))}
        </Box>
        {/* <Button sx={{marginTop:6}} onClick={()=> window.location.reload()}>Refresh</Button> */}
      </Box>
    </Container>
  );
};

export default Assignment19;
