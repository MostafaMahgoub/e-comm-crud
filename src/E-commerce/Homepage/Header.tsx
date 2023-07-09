import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FbIcon from "./assets/icon fb.png";
import InstaIcon from "./assets/icon insta.png";
import TwitterIcon from "./assets/icon twitter.png";
import WhatsIcon from "./assets/icon whatsapp.png";
import envelope from "./assets/envelope.png";
import phoneAlt from "./assets/phone-alt.png";
import Petopialogo from "./assets/Petopialogo.png";
import shoppingCart from "./assets/shopping-cart.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Header() {
    const tabStyles = {
        color: "#392C53",
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1vw",
        margin: "0px 1vw",
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="relative"
                sx={{
                    height: "4vh",
                    backgroundColor: "#9C5BF5",
                    boxShadow: "none",
                }}
            >
                <Toolbar sx={{ top: "-12px", margin: "0px 8vw" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Box sx={{ display: "flex", gap: "1vw" }}>
                            <img src={FbIcon} alt="Facebook" style={{
                                width: "fit-content",
                                height: "fit-content",
                            }} />
                            <img src={InstaIcon} alt="Instagram" style={{
                                width: "fit-content",
                                height: "fit-content",
                            }}/>
                            <img src={TwitterIcon} alt="Twitter" style={{
                                width: "fit-content",
                                height: "fit-content",
                            }}/>
                            <img src={WhatsIcon} alt="WhatsApp" style={{
                                width: "fit-content",
                                height: "fit-content",
                            }}/>
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1vw",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            <img src={phoneAlt} alt="phone" />
                            <Typography variant="body1">
                                0000-123456789
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                marginLeft: "10px",
                            }}
                        >
                            <img src={envelope} alt="envelope" />
                            <Typography variant="body1">
                                info@example.com
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <AppBar
                position="relative"
                sx={{
                    height: "6vh",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                }}
            >
                <Toolbar sx={{ top: "2vh", margin: "0px 8vw" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Box>
                            <img src={Petopialogo} alt="Petopia" />
                        </Box>
                    </Typography>
                    <center style={{ flexGrow: 1 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexGrow: 1,
                            }}
                        >
                            <Tabs
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                                indicatorColor="secondary"
                            >
                                <Tab label="Home" sx={tabStyles} />
                                <Tab label="Services" sx={tabStyles} />
                                <Tab label="Shop" sx={tabStyles} />
                                <Tab
                                    label="Blog"
                                    sx={{ ...tabStyles, color: "#DCFF02" }}
                                />
                                <Tab
                                    label="Pages"
                                    sx={{ ...tabStyles, color: "#DCFF02" }}
                                />
                            </Tabs>
                        </Box>
                    </center>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1vw",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#FFFFFF",
                                color: "#1C103B",
                                fontFamily: "Nunito",
                            }}
                        >
                            <Typography
                                variant="button"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                <img src={shoppingCart} alt="Shopping Cart" />
                                (1 item)
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
