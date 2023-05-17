import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import { ReactComponent as Mail } from '../assets/image/mail-logo.svg';
import { ReactComponent as LinkedIn } from '../assets/image/linkedin-logo.svg';
import { ReactComponent as Instagram } from '../assets/image/instagram.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        pb: '20px',
        backgroundColor: '#9ab6ca',
        mt: 'auto',
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
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Link
              className='footer-mail'
              to='mailto:support@spectralux.com.ua'
            >
              <Mail
                width='50'
                height='40'
              />
              support@spectralux.com.ua
            </Link>
            <Typography
              sx={{ mt: '10px', ml: '10px', display: 'inline-flex' }}
              variantMapping={{ p: 'p' }}
            >
              (с) 2023
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Link
              className='footer-link'
              to='https://www.instagram.com/specta.lux'
            >
              <Instagram
                width='70'
                height='70'
              />
            </Link>
            <Link
              className='footer-link'
              to='https://www.linkedin.com/in/vladyslav-yefremenko-a9093a1b8/'
              target='_blank'
            >
              <LinkedIn
                width='70'
                height='70'
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
