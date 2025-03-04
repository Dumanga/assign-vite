import { useState, useRef } from "react";
import { Button, Box, Slider, Typography, Paper, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { toPng, toJpeg } from "html-to-image";

const Assignment25 = () => {
  const [image, setImage] = useState(null);
  const [filters, setFilters] = useState({
    brightness: 0,
    contrast: 0,
    saturate: 0,
    grayscale: 0,
    invert: 0,
    blur: 0,
  });
  const [imageFormat, setImageFormat] = useState("PNG");
  const [imageScale, setImageScale] = useState(1);
  const imageRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSliderChange = (filterName) => (event, newValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: newValue,
    }));
  };

  const resetFilters = () => {
    setFilters({
      brightness: 0,
      contrast: 0,
      saturate: 0,
      grayscale: 0,
      invert: 0,
      blur: 0,
    });
  };

  const generateFilterString = () => {
    const { brightness, contrast, saturate, grayscale, invert, blur } = filters;
    return `
      brightness(${100 + brightness}%) 
      contrast(${100 + contrast}%) 
      saturate(${100 + saturate}%) 
      grayscale(${Math.abs(grayscale)}%) 
      invert(${Math.abs(invert)}%) 
      blur(${Math.abs(blur)}px)
    `;
  };

  const downloadImage = () => {
    if (!imageRef.current) return;

    const options = {
      pixelRatio: parseInt(imageScale),
    };

    // Use toPng for PNG format and toJpeg for JPEG format
    const toImagePromise = imageFormat === "PNG" 
      ? toPng(imageRef.current, options)
      : toJpeg(imageRef.current, options);

    toImagePromise.then(dataUrl => {
      const link = document.createElement('a');
      link.download = `edited-img.${imageFormat.toLowerCase()}`;
      link.href = dataUrl;
      link.click();
    }).catch(error => {
      console.error('Error generating image:', error);
    });
  };

  return (
    <Box sx={{ p: 4, bgcolor: "white", minHeight: "100vh" }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageUpload} />
        </Button>
        <Typography variant="h6">ASG_2025_03_03_1</Typography>
        <Box display="flex" alignItems="center">
          <Button variant="contained" sx={{ mr: 1 }} onClick={() => setImage(null)}>
            Remove Image
          </Button>
          <Button variant="contained" sx={{ mr: 1 }} onClick={resetFilters}>
            Reset Filters
          </Button>
          
          <FormControl sx={{ minWidth: 100, mr: 1 }}>
            <InputLabel>Format</InputLabel>
            <Select
              value={imageFormat}
              label="Format"
              onChange={(e) => setImageFormat(e.target.value)}
              size="small"
            >
              <MenuItem value="PNG">PNG</MenuItem>
              <MenuItem value="JPEG">JPEG</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl sx={{ minWidth: 70, mr: 1 }}>
            <InputLabel>Scale</InputLabel>
            <Select
              value={imageScale}
              label="Scale"
              onChange={(e) => setImageScale(e.target.value)}
              size="small"
            >
              <MenuItem value={1}>x1</MenuItem>
              <MenuItem value={2}>x2</MenuItem>
              <MenuItem value={3}>x3</MenuItem>
              <MenuItem value={4}>x4</MenuItem>
            </Select>
          </FormControl>
          
          <Button variant="contained" onClick={downloadImage} disabled={!image}>
            Download
          </Button>
        </Box>
      </Box>
      <Box display="flex" gap={2}>
        <Paper
          ref={imageRef}
          sx={{
            width: "60%",
            height: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: generateFilterString(),
              }}
            />
          ) : (
            <Typography variant="body1">Firstly Upload a Image</Typography>
          )}
        </Paper>
        <Paper sx={{ width: "30%", p: 2 }}>
          {["brightness", "contrast", "saturate", "grayscale", "invert", "blur"].map((filterName) => (
            <Box key={filterName} mb={2}>
              <Typography variant="body2" gutterBottom>
                {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
              </Typography>
              <Slider
                value={filters[filterName]}
                onChange={handleSliderChange(filterName)}
                min={-100}
                max={100}
                step={1}
                valueLabelDisplay="auto"
                disabled={!image}
              />
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default Assignment25;