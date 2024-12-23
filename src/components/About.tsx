import React from 'react';
import { Box, Typography, Container, Stack, Grid } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

const About: React.FC = () => {

  return (
    <Box
      sx={{
        background: '#2b2b42',
        color: '#ffffff',
        py: { xs: 6, md: 10 },
        position: 'relative',
      }}
    >
      <Container>
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Short Bio */}
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              fontWeight: 'medium',
              color: '#CFD8DC',
            }}
          >
            I’m a <strong>Fullstack Developer</strong> with a strong foundation in both <strong>front-end</strong> and <strong>back-end technologies</strong>. I’m passionate about crafting scalable, efficient, and user-friendly applications that bridge the gap between design and functionality.
          </Typography>

          {/* Journey Highlights */}
          <Grid container spacing={4} sx={{ maxWidth: '900px', mt: 2 }}>
            {/* Trainee Fullstack Developer */}
            <Grid item xs={12} md={4}>
              <Stack
                alignItems="center"
                spacing={2}
                sx={{
                  p: 3,
                  border: '1px solid #FFD700',
                  borderRadius: '8px',
                  background: '#1e1e2f',
                  textAlign: 'center',
                }}
              >
                <CodeIcon sx={{ fontSize: 48, color: '#FFD700' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#B0BEC5' }}>
                  🚀 Trainee Fullstack Developer
                </Typography>
                <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                  Built and deployed a <strong>custom web application</strong> using <strong>Java</strong>, <strong>Spring</strong>, and <strong>DevOps practices</strong>.
                </Typography>
              </Stack>
            </Grid>

            {/* Frontend Developer */}
            <Grid item xs={12} md={4}>
              <Stack
                alignItems="center"
                spacing={2}
                sx={{
                  p: 3,
                  border: '1px solid #FFD700',
                  borderRadius: '8px',
                  background: '#1e1e2f',
                  textAlign: 'center',
                }}
              >
                <WorkOutlineIcon sx={{ fontSize: 48, color: '#FFD700' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#B0BEC5' }}>
                  💻 Frontend Developer
                </Typography>
                <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                  Contributed to an <strong>ERP web application</strong> using <strong>AngularJS</strong>, focusing on <strong>feature implementation</strong> and <strong>bug fixes</strong>.
                </Typography>
              </Stack>
            </Grid>

            {/* Junior Software Developer */}
            <Grid item xs={12} md={4}>
              <Stack
                alignItems="center"
                spacing={2}
                sx={{
                  p: 3,
                  border: '1px solid #FFD700',
                  borderRadius: '8px',
                  background: '#1e1e2f',
                  textAlign: 'center',
                }}
              >
                <BuildIcon sx={{ fontSize: 48, color: '#FFD700' }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#B0BEC5' }}>
                  🔧 Junior Software Developer
                </Typography>
                <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                  Worked with <strong>low-code platforms</strong> like <strong>Lobster_data</strong> and <strong>Lobster_pro</strong> to maintain <strong>legacy systems</strong>.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;