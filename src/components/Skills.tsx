import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { Code, Storage, Cloud, Web, Build, Memory } from '@mui/icons-material';

const Skills: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2b2b42',
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
          🛠️ My Skills
        </Typography>

        {/* Skills Grid */}
        <Grid container spacing={4} justifyContent="center">
          {/* Programming Languages */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Code sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                Programming Languages
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                Java | TypeScript | JavaScript | COBOL
              </Typography>
            </Paper>
          </Grid>

          {/* Backend Technologies */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Build sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                Backend Technologies
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                Spring | Lobster_data | IBM ISeries/AS400
              </Typography>
            </Paper>
          </Grid>

          {/* Database Skills */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Storage sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                Database Technologies
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                SQL | NoSQL
              </Typography>
            </Paper>
          </Grid>

          {/* Frontend Technologies */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Web sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                Frontend Technologies
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                React
              </Typography>
            </Paper>
          </Grid>

          {/* DevOps & Cloud */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Cloud sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                DevOps & Cloud
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                DevOps
              </Typography>
            </Paper>
          </Grid>

          {/* Other Technologies */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                backgroundColor: '#1e1e2f',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <Memory sx={{ fontSize: 50, color: '#FFD700' }} />
              <Typography variant="h6" sx={{ color: '#B0BEC5', mt: 2 }}>
                Other Technologies
              </Typography>
              <Typography variant="body2" sx={{ color: '#CFD8DC' }}>
                IBM ISeries/AS400 | Lobster_data
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;