import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkSkroll } from 'react-scroll';
import { Box, Grid } from '@mui/material';
import logo from '../assets/image/logo.png';

const Header = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        pb: '20px',
        backgroundColor: '#EEEFF1',
        marginBottom: '7px',
      }}
    >
      <Box sx={{ maxWidth: '1110px', margin: '0 auto' }}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link to='/'>
              <img
                src={logo}
                alt='Logo'
                width='200'
                height='100'
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
          ></Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
          >
            <Link
              to='/about'
              className='link'
            >
              Про нас
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
          >
            <LinkSkroll
              to='skroll'
              duration={500}
              offset={-50}
              spy={true}
              smooth={true}
              className='link'
            >
              Наші роботи
            </LinkSkroll>
          </Grid>
          <Grid
            item
            xs={6}
            md={2}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
          >
            <Link
              to='/contacts'
              className='link'
            >
              Контакти
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
