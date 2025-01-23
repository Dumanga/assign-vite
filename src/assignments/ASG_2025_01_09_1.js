import  { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField } from '@mui/material';

const Assignment17 = () => {
  const [color1, setColor1] = useState('#FF0000');
  const [color2, setColor2] = useState('#0000FF');
  const [mixedColor, setMixedColor] = useState('#FF00FF');

  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Convert RGB to hex
  const rgbToHex = (r, g, b) => {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
  };

  // Mix colors
  const handlemixColors = () => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    if (rgb1 && rgb2) {
      // Add RGB values and clamp to 255
      const mixedR = Math.min(255, rgb1.r + rgb2.r);
      const mixedG = Math.min(255, rgb1.g + rgb2.g);
      const mixedB = Math.min(255, rgb1.b + rgb2.b);

      setMixedColor(rgbToHex(mixedR, mixedG, mixedB));
    }
  };

  // Update mixed color whenever input colors change
  useEffect(() => {
    handlemixColors();
  }, [color1, color2]);

  // Validate hex color input
  const handleColorChange = (setter) => (event) => {
    const value = event.target.value;
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      setter(value);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box textAlign="center">
        <Typography variant="h4" mb={2}>
          Assignment 17
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Color 1"
            value={color1}
            onChange={(e) => setColor1(e.target.value)}
            onBlur={handleColorChange(setColor1)}
            sx={{ mr: 2 }}
            placeholder="#FF0000"
          />
          <TextField
            label="Color 2"
            value={color2}
            onChange={(e) => setColor2(e.target.value)}
            onBlur={handleColorChange(setColor2)}
            placeholder="#0000FF"
          />
        </Box>

        {/* show mixed color */}
        <Box
          sx={{
            width: '100%',
            height: '100px',
            backgroundColor: mixedColor,
            mb: 2,
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />

        {/* show color information */}
        <Typography variant="body1" mb={2}>
          Mixed Color: {mixedColor}
        </Typography>

        {/* Gradient display */}
        <Box
          sx={{
            width: '100%',
            height: '100px',
            background: `linear-gradient(to right, ${color1}, ${mixedColor}, ${color2})`,
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </Box>
    </Container>
  );
};

export default Assignment17;