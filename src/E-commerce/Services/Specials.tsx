import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import HappyDog from "./assets/HappyDog.png";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowRightPurple from "./assets/arrow-right-purple.png";
import Dog from "./assets/dog.png";
import Cat from "./assets/cat.png";

function Specials() {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    gap: "3vw",
                    alignItems: "center",
                    marginTop: "8vw",
                }}
            >
                <Box
                    sx={{
                        marginLeft: "10vw",
                        position: "relative",
                        width: "953px",
                        height: "500px",
                        backgroundColor: "#FCDCB5",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            backgroundColor: "#7C58D3",
                            width: "225px",
                            height: "70px",
                            borderRadius: "10px",
                            left: "35vw",
                            top: "4vw",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#FFFFFF",
                            zIndex: "1",
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "700" }}>
                            Up to 40% Off
                        </Typography>
                    </Box>
                    <img
                        src={HappyDog}
                        alt="Dog"
                        style={{
                            position: "relative",
                            right: "-23vw",
                            top: "6vw",
                        }}
                    />
                    <Box
                        sx={{
                            position: "relative",
                            top: "-12vw",
                            left: "3vw",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1vw",
                            width: "316px",
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: "46px",
                            }}
                        >
                            Сheck Out Our Specials
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                lineHeight: "26px",
                            }}
                        >
                            Massa placerat duis ultricies lacus. Aliquet
                            bibendum enim facilisis gravida neque convallis
                        </Typography>
                        <Button
                            disableElevation
                            disableFocusRipple
                            disableRipple
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                textTransform: "none",
                                backgroundColor: "transparent",
                                border: "none",
                                padding: "0px",
                                paddingTop: "1vw",
                                gap: "0.5vw",
                                boxShadow: "none",
                                color: "#7C58D3",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "30px",
                                }}
                            >
                                Shop Now
                            </span>
                            <IconButton
                                disableRipple
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    padding: "0",
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                }}
                            >
                                <img src={ArrowRightPurple} alt="ArrowRight" />
                            </IconButton>
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2.3vw",
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "10px",
                            width: "478px",
                            height: "230px",
                            backgroundColor: "#FFDA47",
                            justifyContent:"center",
                        }}
                    >
                        <Typography variant="h3"
                            sx={{
                                padding : "3vw",
                                fontWeight: "bolder",
                                lineHeight: "36px",
                                fontSize: "30px",
                                width: "272px",
                            }}>
                        Luxury Fashion Collection
                        <Button
                            disableElevation
                            disableFocusRipple
                            disableRipple
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                textTransform: "none",
                                backgroundColor: "transparent",
                                border: "none",
                                padding: "0px",
                                paddingTop: "1vw",
                                gap: "0.5vw",
                                boxShadow: "none",
                                color: "#7C58D3",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "30px",
                                }}
                            >
                                Shop Now
                            </span>
                            <IconButton
                                disableRipple
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    padding: "0",
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                }}
                            >
                                <img src={ArrowRightPurple} alt="ArrowRight" />
                            </IconButton>
                        </Button>
                        </Typography>
                        <img src={Dog} alt="Dog" style={{
                            position: "relative",
                            left: '17vw',
                            top: '-14vw',
                        }} />
                        
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "10px",
                            width: "478px",
                            height: "230px",
                            backgroundColor: "#FFDA47",
                        }}
                    >
                        <Box
                        sx={{
                            borderRadius: "10px",
                            width: "478px",
                            height: "230px",
                            backgroundColor: "#FFDA47",
                            justifyContent:"center",
                        }}
                    >
                        <Typography variant="h3"
                            sx={{
                                padding : "3vw",
                                fontWeight: "bolder",
                                lineHeight: "36px",
                                fontSize: "30px",
                                width: "272px",
                            }}>
                        Shop What’s Trending
                        <Button
                            disableElevation
                            disableFocusRipple
                            disableRipple
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                textTransform: "none",
                                backgroundColor: "transparent",
                                border: "none",
                                padding: "0px",
                                paddingTop: "1vw",
                                gap: "0.5vw",
                                boxShadow: "none",
                                color: "#7C58D3",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "30px",
                                }}
                            >
                                Shop Now
                            </span>
                            <IconButton
                                disableRipple
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    padding: "0",
                                    fontSize: "16px",
                                    lineHeight: "16px",
                                }}
                            >
                                <img src={ArrowRightPurple} alt="ArrowRight" />
                            </IconButton>
                        </Button>
                        </Typography>
                        <img src={Cat} alt="Cat" style={{
                            position: "relative",
                            left: '17vw',
                            top: '-14vw',
                        }} />
                    </Box>

                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Specials;
