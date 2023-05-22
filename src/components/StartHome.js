import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Modal, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import axios from '../helpers/axios';
import MailForm from './MailForm';

const StartHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: 'background.paper',
    border: '1px solid #000000',
    boxShadow: 24,
    p: 4,
  };
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
              xs={12}
              md={6}
            >
              <Typography
                variant='body2'
                key={id}
              >
                <img
                  src={image}
                  alt='title'
                  width='375'
                  heigth='240'
                />
              </Typography>
            </Grid>
            <Grid
              xs={12}
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
                onClick={handleOpen}
                type='button'
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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <MailForm handleCloseForm={handleClose} />
                </Box>
              </Modal>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
};

export default StartHome;
