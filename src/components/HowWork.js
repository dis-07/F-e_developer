import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

import PhotoCode from '../assets/image/code-expiriance.png';

const HowWork = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        pb: '100px',
        backgroundColor: '#EEEFF1',
      }}
    >
      <Box sx={{ maxWidth: '1110px', margin: '0 auto' }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid>
            <Typography
              variant='h2'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '50px',
                mb: '100px',
                fontSize: '48px',
                lineHeight: '56px',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              Как я работаю
            </Typography>
            <Typography
              variant='p'
              sx={{
                display: 'block',
                width: '500px',
                fontSize: '18px',
                mt: '50px',
                mb: '57px',
                textAlign: 'center',
                color: '#727272',
              }}
            >
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </Typography>
          </Grid>
          <img
            src={PhotoCode}
            alt='image code'
            width='1110'
            height='600'
            className='img'
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default HowWork;
