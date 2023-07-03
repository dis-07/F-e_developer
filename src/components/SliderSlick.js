import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

import axios from '../helpers/axios';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 6,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 3,
      },
    },
  ],
};

const SliderSlick = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/sliders')
      .then((data) => {
        data.map(({ imageUrl }) => setData(imageUrl));
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
    <div id='skroll'>
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
          Наші можливості
        </Typography>
        <Box sx={{ mt: '50px', mb: '50px' }}>
          <Slider {...settings}>
            {data.map(({ id, url, name }) => (
              <Box
                sx={{ display: 'flex', justifyContent: 'center', mb: '30px' }}
              >
                <img
                  className='img'
                  src={`https://spectalux-back-end-b7762c2f3b71.herokuapp.com${url}`}
                  alt={name}
                  width='350'
                  height='300'
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default SliderSlick;
