import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
// import Logo from '../assets/images/_Logo.png'
import Logo from '../assets/images/Logoo.jpg'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{ sm: '122px', xs:'40px'}, mt:{ sm:'32px', xs:'20px'}, justifyContent:'none'}} 
    px='20px'
    >
      <Link to='/'>
        <img src={Logo} alt="logo" style={{ width:'60px', height:'50px', margin:'0 20px' }}/>
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to="/" style={{textDecoration:'none', borderBottom:'3px solid #D88127', color:'slategray'}}>Home</Link>
        <a href="#exercises" style={{ textDecoration:'none', color:'slategray'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar