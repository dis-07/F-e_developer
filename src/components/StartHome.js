import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

import axios from '../helpers/axios';
import MailForm from './MailForm';

const CustomButton = styled(Button)`
  margin-top: 30px;
  width: 225px;
  height: 65px;
  background-color: #3f51b5;
  letter-spacing: 0.1em;
  color: #ffffff;

  font-size: 16px;
  &:hover {
    border: 1px solid #000000;
    background: rgb(56, 56, 141);
    color: #ffffff;
  }
`;

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

const StartHome = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get('/home')
      .then((data) => {
        setData(data);
        setImage(data.imageUrl);
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
        <>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant='body2'
              key={data.id}
            >
              {image.map(({ name, url }) => (
                <img
                  src={`https://spectalux-back-end-b7762c2f3b71.herokuapp.com${url}`}
                  alt={name}
                  width='375'
                  heigth='240'
                />
              ))}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', flexDirection: 'column' }}
            key={data.id}
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
              {data.title}
            </Typography>
            <Typography
              variant='p'
              sx={{ display: 'block', mt: '34px', color: '#727272' }}
            >
              {data.description}
            </Typography>
            <CustomButton
              onClick={handleOpen}
              type='button'
            >
              Написати нам
            </CustomButton>
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
      </Grid>
    </Box>
  );
};

export default StartHome;
