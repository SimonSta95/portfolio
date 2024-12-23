import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar: React.FC= () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#1e1e2f', boxShadow: 'none' }}>
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1 }}
        >
          Simon Staß
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
          <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
          <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
          <Button color="inherit" onClick={() => scrollToSection('projects')}>Projects</Button>
          <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;