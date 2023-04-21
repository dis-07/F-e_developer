import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

import axios from '../helpers/axios';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderSlick = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/stoks')
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
          Наші Проєкти
        </Typography>
        <Box sx={{ mt: '50px', mb: '50px' }}>
          <Slider {...settings}>
            {data.map(({ id, title, image, urladress }) => (
              <Box sx={{ mb: '30px' }}>
                <Link
                  key={id}
                  to={urladress}
                >
                  <img
                    className='img'
                    src={image}
                    alt={title}
                    width='540'
                    height='350'
                  />
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default SliderSlick;
