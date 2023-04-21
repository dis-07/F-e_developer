import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import axios from '../helpers/axios';

const StartHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/')
      .then((data) => {
        setData(data);
      })
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Box sx={{ maxWidth: '1110px', margin: '0 auto', padding: '0' }}>
      <Grid
        container
        spacing={2}
        sx={{ mt: '100px', mb: '300px' }}
      >
        {data.map(({ id, image, title, description }) => (
          <>
            <Grid
              xs={6}
              md={6}
            >
              <Typography
                variant='body2'
                key={id}
              >
                <img
                  src={image}
                  alt='title'
                  width='357'
                  heigth='233'
                />
              </Typography>
            </Grid>
            <Grid
              xs={6}
              md={6}
              sx={{ display: 'flex', flexDirection: 'column' }}
              key={id}
            >
              <Typography
                variant='h1'
                sx={{
                  margin: '0',
                  fontWeight: '500',
                  fontSize: '48px',
                  lineHeight: '79px',
                  color: '#000000',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant='p'
                sx={{ display: 'block', mt: '34px', color: '#727272' }}
              >
                {description}
              </Typography>
              <Button
                variant='contained'
                sx={{
                  mt: '30px',
                  width: '225px',
                  height: '65px',
                  backgroundColor: '#34547A',
                  letterSpacing: '0.1em',
                  color: '#FFFFFF',
                }}
              >
                Написать мне
              </Button>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default StartHome;