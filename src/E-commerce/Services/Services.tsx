import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BgPurple from "./assets/bg-purple.png";
import WhBackGround from "./assets/bg-white.png";
import BottomRightPath from "./assets/Path.png";
import BottomRightPaws from "./assets/Paws.png";
import WalkingWDog from "./assets/WalkingWDog.png";
import ArrowRightYellow from "./assets/arrow-right-yellow.png";
import ArrowRightPurple from "./assets/arrow-right-purple.png";
import Grooming from "./assets/Grooming.png";
import Trophies from "./assets/trophie.png";
import Skull from "./assets/skull.png";
import DogHealth from "./assets/DogHealth.png";
import PetHouse from "./assets/PetHotel.png";

function Services() {
  return (
    <div>
      <Typography variant="h2"
                    sx={{
                        position: 'relative',
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#7C58D3",
                        lineHeight: "19px",
                        left: "49vw"
                    }}>
                    OUR SERVICES
      </Typography>
      <Typography variant="h1"
                    sx={{
                        position: 'relative',
                        fontWeight: 800,
                        fontSize: "46px",
                        color: "#0B0417",
                        lineHeight: "46px",
                        left: "39vw",
                        margin: '1vw 0px 3vw'
                    }}>
                    All Pet Care Services
      </Typography>
      <Box sx={{
        display:'flex',
        gap: '5vw',
        marginBottom : '3vh'
        }}>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${BgPurple})`,
        width: "437.42px",
        height: "294px",
      }}>
        <img
        src={BottomRightPath}
        alt="bottom right path"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
        }}
      />
      <img
        src={BottomRightPaws}
        alt="bottom right paws"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '20px',
        }}
      />
      <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={WalkingWDog} alt='WalkingWDog' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "cursive",
                                    fontSize: "24px",
                                    fontWeight: "800",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#FFFFFF",}}>Walking & Sitting</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#FFFFFF",
                        lineHeight: "26px",
                    }}
                >
                    Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi 
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#FFFFFF",
                        lineHeight: "26px",
                    }}
                >
                    From $15 / hour 
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#FFDA47',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightYellow} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      </Box>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${WhBackGround})`,
        width: "437.42px",
        height: "300px",
      }}>
          <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={Grooming} alt='Grooming' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "revert",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#0E081E",}}>Pet Grooming</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam 
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    From $39 / complex
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#7C58D3',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightPurple} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      
      </Box>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${WhBackGround})`,
        width: "437.42px",
        height: "300px",
      }}>
          <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={Trophies} alt='Trophies' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "revert",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#0E081E",}}>Pet Training</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat 
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    From $27 / hour 
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#7C58D3',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightPurple} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      </Box>
      </Box>
      <Box sx={{
        display:'flex',
        gap: '5vw'
        }}>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${WhBackGround})`,
        width: "437.42px",
        height: "300px",
      }}>
          <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={Skull} alt='Skull' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "revert",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#0E081E",}}>Pet Taxi</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    From $22  / trip 
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#7C58D3',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightPurple} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      
      </Box>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${WhBackGround})`,
        width: "437.42px",
        height: "300px",
      }}>
          <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={DogHealth} alt='DogHealth' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "revert",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#0E081E",}}>Health & Wellness</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam 
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    From $39/ visit 
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#7C58D3',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightPurple} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      </Box>
      <Box style={{
        position: 'relative',
        left: '10vw',
        backgroundImage: `url(${WhBackGround})`,
        width: "437.42px",
        height: "300px",
      }}>
          <Box
        style={{
          padding: "2vw", 
        }}
      >
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw',
            alignItems:'center'}}>
           <img src={PetHouse} alt='PetHouse' style={{width:'fit-content'}}/>
           <Typography sx={{fontFamily: "revert",
                                    fontSize: "24px",
                                    fontWeight: "700",
                                    lineHeight: "30px",
                                    letterSpacing: "0px",
                                    textAlign: "left",
                                    color: "#0E081E",}}>Pet Hotel</Typography>

          </Box>
          <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 300,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n 
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        paddingTop:"1vw",
                        fontWeight: 700,
                        fontSize: "17px",
                        color: "#1C103B",
                        lineHeight: "26px",
                    }}
                >
                    From $15 / night 
                </Typography>
                <Button
      disableElevation
      disableFocusRipple
      disableRipple
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        textTransform: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        padding: "0px",
        paddingTop: "1vw",
        gap: "0.5vw",
        boxShadow: 'none',
        color: '#7C58D3',
      }}
    >
      <span style={{
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "30px",
      }}>Get Service</span>
      <IconButton
        disableRipple
        style={{
          display: 'flex',
          alignItems: 'center',
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          padding: '0',
          fontSize: '16px',
          lineHeight: '16px',
        }}
      >
        <img src={ArrowRightPurple} alt='ArrowRight' />
      </IconButton>
    </Button>
          </Box>
      </Box>
      </Box>
    </div>
  );
}

export default Services;