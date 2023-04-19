import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const NotFound = () => {
  return (
    <Box sx={{ maxWidth: '1110px', height: '100vh', margin: '0 auto' }}>
      <Typography
        variantMapping={'p'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',

          textTransform: 'uppercase',
          fontSize: '48px',
          color: '#9999ef',
        }}
      >
        Ups... Page not found
        <Link
          to='/'
          className='link'
        >
          Back to home page
        </Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
