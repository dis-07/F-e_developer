import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Root = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Root;
