import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        onClick={handleClick}
        sx={{ 
          position: 'fixed', 
          bottom: 16, 
          right: 16,
          backgroundColor: theme.palette.mode === 'dark' ? '#00bfa5' : '#2979ff', // Tech-related colors
          '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? '#00897b' : '#2962ff', // Darker shades on hover
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: theme.palette.mode === 'dark' ? '#212121' : '#ffffff' }} />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;