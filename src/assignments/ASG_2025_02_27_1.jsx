/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, Card, CardContent, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Assignment23 = () => {
  const [selectedColor, setSelectedColor] = useState({
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)'
  });
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // Load the image
  useEffect(() => {
    const image = new Image();
    image.src = './sample.png';
    image.crossOrigin = 'Anonymous';
    
    image.onload = () => {
      setIsImageLoaded(true);
      drawImageOnCanvas(image);
    };
    
    return () => {
      // Clean the image 
      image.onload = null;
    };
  }, []);
  
  const drawImageOnCanvas = (image) => {
    const canvas = document.getElementById('color-picker-canvas');
    if (!canvas || !image) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
  
  const getColorFromPosition = (x, y) => {
    const canvas = document.getElementById('color-picker-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const pixelData = ctx.getImageData(x, y, 1, 1).data;
    
    const r = pixelData[0];
    const g = pixelData[1];
    const b = pixelData[2];
    
    //  RGB - HEX
    const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    
    return { hex, rgb };
  };
  
  const handleCanvasClick = (e) => {
    const canvas = document.getElementById('color-picker-canvas');
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const color = getColorFromPosition(x, y);
    if (color) {
      setSelectedColor(color);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  
  return (
    <Box sx={{ p: 3, maxWidth: '1000px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Color Picker
      </Typography>
      
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        <Box sx={{ flex: 2 }}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 2, 
              textAlign: 'center',
              overflow: 'auto'
            }}
          >
            <canvas
              id="color-picker-canvas"
              onClick={handleCanvasClick}
              style={{ maxWidth: '100%', cursor: 'crosshair' }}
            />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Click anywhere on the image to pick a color
            </Typography>
          </Paper>
        </Box>
        
        <Box sx={{ flex: 1 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Selected Color
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Paper
                  elevation={1}
                  sx={{
                    width: '100%',
                    height: '100px',
                    backgroundColor: selectedColor.hex,
                    mb: 2,
                    border: '1px solid #ddd'
                  }}
                />
              </Box>
              
              <Stack spacing={2}>
                <Paper 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1">
                    HEX: {selectedColor.hex}
                  </Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(selectedColor.hex)}
                    aria-label="copy hex value"
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Paper>
                
                <Paper 
                  sx={{ 
                    p: 2, 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <Typography variant="body1">
                    RGB: {selectedColor.rgb}
                  </Typography>
                  <IconButton 
                    size="small" 
                    onClick={() => copyToClipboard(selectedColor.rgb)}
                    aria-label="copy rgb value"
                  >
                    <ContentCopyIcon fontSize="small" />
                  </IconButton>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Assignment23;