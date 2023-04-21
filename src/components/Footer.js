import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

import { Link } from 'react-router-dom';

import { ReactComponent as GitHub } from '../assets/image/github-logo.svg';
import { ReactComponent as LinkedIn } from '../assets/image/linkedin-logo.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        pb: '20px',
        backgroundColor: '#9ab6ca',
      }}
    >
      <Box sx={{ maxWidth: '1110px', margin: '0 auto' }}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={4}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='p'
              sx={{ mb: '10px' }}
            >
              Vladyslav Yefremenko
            </Typography>
            <Typography variant='p'>(с) 2023</Typography>
          </Grid>
          <Grid
            item
            xs={4}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
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
            <Link
              className='footer-link'
              to='https://github.com/dis-07'
              target='_blank'
            >
              <GitHub
                width='50'
                height='50'
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
