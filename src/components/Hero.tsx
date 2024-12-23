import React from 'react';
import { Box, Typography, Button, Container, Stack, Avatar } from '@mui/material';
import meImage from '../assets/me.png'

const Hero: React.FC = () => {

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e1e2f, #2b2b42)',
        color: '#ffffff',
        py: { xs: 8, md: 14 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container>
        <Stack spacing={4} alignItems="center">
          {/* Profile Image */}
          <Avatar
            src={meImage}
            alt="Simon Staß"
            sx={{
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              border: '4px solid #FFD700',
            }}
          />
          
          {/* Text Content */}
          <Typography variant="h2" fontWeight="bold">
            👋 Hi, I’m Simon Staß
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '600px', color: '#CFD8DC' }}>
            Fullstack Developer | Software Engineer
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', color: '#B0BEC5' }}>
            I craft scalable, efficient, and user-friendly web applications that bridge the gap
            between design and functionality.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#1e1e2f',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#e6c200' },
            }}
          >
            🚀 Let’s build something amazing together!
          </Button>
        </Stack>
      </Container>

      {/* SVG Divider for Smooth Transition */}
      <Box
        component="svg"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
        }}
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1200,0 L600,100 Z"
          style={{ fill: '#2b2b42' }}
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;