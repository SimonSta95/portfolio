import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

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
        size="small"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#FFD700', // Golden color that matches the rest of your site
          '&:hover': {
            backgroundColor: '#e6c200', // Darker golden shade on hover
          },
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: '#1e1e2f' }} /> {/* Dark color for the icon to stand out */}
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;