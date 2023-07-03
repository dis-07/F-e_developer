/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';

import axios from '../helpers/axios';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const HowWork = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/about')
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
    <>
      <Box
        sx={{
          pt: '30px',
          pb: '100px',
          backgroundColor: '#EEEFF1',
        }}
      >
        <Box sx={{ maxWidth: '1110px', margin: '0 auto' }}>
          <Grid
            item
            xs={12}
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            key={data.id}
          >
            <Grid
              item
              xs={12}
            >
              <Typography
                variant='h2'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: '50px',
                  mb: '50px',
                  fontSize: '48px',
                  lineHeight: '56px',
                  textAlign: 'center',
                  color: '#000000',
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variantMapping={{ p: 'p' }}
                sx={{
                  display: 'flex',
                  maxWidth: '50%',
                  fontSize: '18px',
                  margin: '0 auto',
                  textAlign: 'center',
                  color: '#727272',
                }}
              >
                {data.description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HowWork;
