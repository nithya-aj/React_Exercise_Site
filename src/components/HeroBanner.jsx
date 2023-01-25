import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner1.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' }
    }} position="relative" p='20px'>
      <Typography color='#D88127' fontWeight='600' fontSize='26px' >
        Fitness Club
      </Typography>
      <Typography fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' }
        }}
        mb='23px' mt='30px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
        Check out the most effective exercises.
      </Typography>
      <Button variant='outlined' style={{ color: '#D88127' }} href='#exercises'>Explore exercises</Button>
      <Typography fontWeight={600} color='#ff2625' fontSize='200px' ml='16rem'
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs:'none' },
          marginTop:'-4rem'
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner