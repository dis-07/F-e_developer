import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';

const WorkTemplates = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: '1110px',
          margin: '0 auto',
          padding: '0',
        }}
      >
        <Typography
          variant='h2'
          sx={{
            mt: '100px',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: '72px',
            lineHeight: '79px',
            color: '#000000',
          }}
        >
          Наші Проєкти
        </Typography>
      </Box>
    </>
  );
};

export default WorkTemplates;
