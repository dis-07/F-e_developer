import { NavLink, useLocation } from 'react-router-dom';
import { Link as LinkSkroll } from 'react-scroll';
import { Box, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

import { ReactComponent as Logo } from '../assets/image/logo.svg';

const CustomButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  padding: 10px;

  font-size: 16px;
  color: #000000;
  &:hover {
    border: 1px solid #000000;
    background: rgb(56, 56, 141);
    color: #ffffff;
  }
`;

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
            <Grid
              item
              xs={8}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              {!isContactsPage && (
                <LinkSkroll
                  to='skroll'
                  duration={500}
                  offset={-50}
                  spy={true}
                  smooth={true}
                  className='link'
                >
                  Галерея
                </LinkSkroll>
              )}
            </Grid>
            <Grid
              item
              xs={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <NavLink
                to='/contacts'
                className='link'
              >
                Контакти
              </NavLink>
            </Grid>
            <Grid
              item
              xs={6}
              md={4}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <CustomButton href='https://spectalux-back-end-b7762c2f3b71.herokuapp.com/admin'>
                Login
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
