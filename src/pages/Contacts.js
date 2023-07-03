import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

import { ReactComponent as Mail } from '../assets/image/mail-logo.svg';
import { ReactComponent as Insagram } from '../assets/image/instagram.svg';
import { ReactComponent as Facebook } from '../assets/image/facebook-logo.svg';
import { ReactComponent as Telegram } from '../assets/image/telegram-logo.svg';
import { ReactComponent as Phone } from '../assets/image/phone-logo.svg';

const Contacts = () => {
  return (
    <>
      <Box>
        <Typography
          variantMapping={{ h1: 'h1' }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '48px',
            mt: '50px',
            mb: '50px',
          }}
        >
          Наші контакти:
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: '1110px', m: '0 auto' }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Link
              to='mailto:support@spectalux.tech'
              className='contact-lik'
            >
              <Mail
                width='100'
                height='70'
              />
              support@spectalux.tech
            </Link>
            <Link
              to='mailto:admin@spectalux.tech'
              className='contact-lik'
            >
              <Mail
                width='100'
                height='70'
              />
              admin@spectalux.tech
            </Link>
            <Link
              to='tel:380969569323'
              className='contact-lik'
            >
              <Phone
                width='100'
                height='70'
              />
              +380 96 956 93 23
            </Link>
            <Link
              to='tel:380982165665'
              className='contact-lik'
            >
              <Phone
                width='100'
                height='70'
              />
              +380 98 216 56 65
            </Link>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Link
              to='https://www.instagram.com/specta.lux'
              className='contact-lik'
            >
              <Insagram
                width='100'
                height='70'
              />
              Insagram
            </Link>
            <Link
              to=''
              className='contact-lik'
            >
              <Facebook
                width='100'
                height='70'
              />
              Facebook
            </Link>
            <Link
              to='https://t.me/spectralux'
              className='contact-lik'
            >
              <Telegram
                width='100'
                height='70'
              />
              Телеграм канал
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contacts;
