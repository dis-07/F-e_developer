import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { Link } from 'react-router-dom';

import Logo from '../assets/image/logo.png';

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
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
            xs={6}
            md={4}
          >
            <Link>
              <img
                src={Logo}
                alt='logo'
                width='200'
                height='100'
              />
            </Link>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
            xs={6}
            md={2}
          >
            <Link
              to='/'
              className='link'
            >
              Home
            </Link>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
            xs={6}
            md={2}
          >
            <Link
              to='/about'
              className='link'
            >
              About me
            </Link>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
            xs={6}
            md={2}
          >
            <Link
              to='/portfolio'
              className='link'
            >
              Portfolio
            </Link>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              pb: '35px',
            }}
            xs={6}
            md={2}
          >
            <Link
              to='contacts'
              className='link'
            >
              Contacts
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
