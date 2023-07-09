import Box from '@mui/material/Box';
import dogPic from './assets/dog.png';
import Typography from '@mui/material/Typography';
import Callus from './assets/callus.png';
import Discount from './assets/divide.png';
import Shipping from './assets/shipping-fast.png';
import Verified from './assets/verified.png';

function HomepageBody() {
  return (
    <>
       <Box
         sx={{
           width: '761px',
           height: '830px',
           top: '141px',
           right: '5vw',
           position: 'absolute',
         }}
       >
         <img src={dogPic} />
       </Box>
       <div style={{
         padding: '10vw 10vw 0px 10vw',
         width: '30%',
         display: 'flex',
         flexDirection: 'column',
         gap: "1vw",
       }}>
       <Typography variant="h2" sx={{ fontWeight: 700, fontSize: '16px', color: '#7C58D3', lineHeight: '19px' }}>
         WE CARE FOR YOUR PET
       </Typography>
       <Typography variant="h1" sx={{ fontWeight: 800, fontSize: '68px', color: '#0E081E', lineHeight: '71px' , fontFamily : "Nunito" }}>
       We Help You Care for Animals with Nutrition
       </Typography>
       <Typography variant="h3" sx={{ fontWeight: 400, fontSize: '18px', color: '#1C103B', lineHeight: '26px' }}>
       All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.
       </Typography>
      </div>
      <Box display="flex" padding="3vw 0px 0px 9.5vw" width="30%">
  <Box display="flex" alignItems="center" flexDirection="row" gap='3vw'>
    <Box sx={{ flexDirection: 'column' }}>
      <Box display="flex" alignItems="center">
        <Box border="2px solid #EBE5F7" borderRadius="10px" width={60} height={60} display="flex" justifyContent="center" alignItems="center" margin={1} sx={{ backgroundColor: '#FBF9FF' }}>
          <img src={Shipping} alt="Shipping fast" />
        </Box>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{
  fontFamily: 'Nunito',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Trust & Safety</Box>
          <Box sx={{
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '23px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Velit euismod pellentes</Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box border="2px solid #EBE5F7" borderRadius="10px" width={60} height={60} display="flex" justifyContent="center" alignItems="center" margin={1} sx={{ backgroundColor: '#FBF9FF' }}>
          <img src={Callus} alt="Call Us"  />
        </Box>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{
  fontFamily: 'Nunito',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Support</Box>
          <Box sx={{
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '23px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Egestas quis ipsum velit </Box>
        </Box>
      </Box>
    </Box>
    <Box sx={{ flexDirection: 'column' }}>
      <Box display="flex" alignItems="center">
        <Box border="2px solid #EBE5F7" borderRadius="10px" width={60} height={60} display="flex" justifyContent="center" alignItems="center" margin={1} sx={{ backgroundColor: '#FBF9FF' }}>
          <img src={Discount} alt="Discount" />
        </Box>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{
  fontFamily: 'Nunito',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Discounts</Box>
          <Box sx={{
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '23px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Bibendum ut tristique</Box>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box border="2px solid #EBE5F7" borderRadius="10px" width={60} height={60} display="flex" justifyContent="center" alignItems="center" margin={1} sx={{ backgroundColor: '#FBF9FF' }}>
          <img src={Verified} alt="Verified" />
        </Box>
        <Box sx={{ flexDirection: 'column' }}>
          <Box sx={{
  fontFamily: 'Nunito',
  fontSize: '22px',
  fontWeight: 'bold',
  lineHeight: '30px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Guarantee</Box>
          <Box sx={{
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '23px',
  letterSpacing: '0px',
  textAlign: 'left'
}}>Convallis tellus id interdum</Box>
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
    </>
  );
}

export default HomepageBody;