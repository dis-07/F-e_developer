import { NavLink, useLocation } from 'react-router-dom';
import { Link as LinkSkroll } from 'react-scroll';
import { Box, Grid } from '@mui/material';
import { ReactComponent as Logo } from '../assets/image/logo.svg';

const Header = () => {
  const location = useLocation();

  const isContactsPage = location.pathname === '/contacts';

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
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <NavLink
              to='/'
              className='logo'
            >
              <Logo
                width='100'
                height='100'
              />
              SpectaLux
            </NavLink>
          </Grid>
          <Grid
            spacing={2}
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <NavLink
              to='/about'
              className='link'
            >
              Про нас
            </NavLink>
            {!isContactsPage && (
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
            )}
            <NavLink
              to='/contacts'
              className='link'
            >
              Контакти
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
