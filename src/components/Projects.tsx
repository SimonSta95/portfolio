import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { GitHub, OpenInNew } from '@mui/icons-material';

const Projects: React.FC = () => {

  return (
    <Box
      sx={{
        backgroundColor: '#1e1e2f',
        color: '#ffffff',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#FFD700',
            mb: 4,
            textAlign: 'center',
          }}
        >
          🚀 My Projects
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Project 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: '#2b2b42',
                borderRadius: '8px',
                boxShadow: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundColor: '#333',
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Placeholder for Project Image */}
                <Typography variant="h6" sx={{ color: '#B0BEC5' }}>
                  Project 1 Image
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#FFD700', mb: 1 }}>
                Project Title 1
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC', mb: 2 }}>
                Short description of the project goes here. This is a placeholder for your project description.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                {/* GitHub Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<GitHub />}
                  href="#"
                  target="_blank"
                >
                  GitHub
                </Button>
                {/* Live Demo Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<OpenInNew />}
                  href="#"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: '#2b2b42',
                borderRadius: '8px',
                boxShadow: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundColor: '#333',
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Placeholder for Project Image */}
                <Typography variant="h6" sx={{ color: '#B0BEC5' }}>
                  Project 2 Image
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#FFD700', mb: 1 }}>
                Project Title 2
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC', mb: 2 }}>
                Short description of the project goes here. This is a placeholder for your project description.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                {/* GitHub Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<GitHub />}
                  href="#"
                  target="_blank"
                >
                  GitHub
                </Button>
                {/* Live Demo Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<OpenInNew />}
                  href="#"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Project 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: '#2b2b42',
                borderRadius: '8px',
                boxShadow: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  backgroundColor: '#333',
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Placeholder for Project Image */}
                <Typography variant="h6" sx={{ color: '#B0BEC5' }}>
                  Project 3 Image
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#FFD700', mb: 1 }}>
                Project Title 3
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC', mb: 2 }}>
                Short description of the project goes here. This is a placeholder for your project description.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                {/* GitHub Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<GitHub />}
                  href="#"
                  target="_blank"
                >
                  GitHub
                </Button>
                {/* Live Demo Link Placeholder */}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ color: '#FFD700', borderColor: '#FFD700' }}
                  startIcon={<OpenInNew />}
                  href="#"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;