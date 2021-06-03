import { React, useState } from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import {
    Card,
    CardMedia,
    CardContent,
    TextField,
    FormControl,
    Button,
    isWidthUp,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

import banner from "./assets/BC_Peter_Background_Mirror.png";

import Carousel from "react-bootstrap/Carousel";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

// import CardBody from "components/Card/CardBody.js";

// import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

// import { cardTitle } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
    banner: {
        // maxWidth: 345,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    media: {
        height: 200,
    },

    margin: {
        margin: 12.5,
        width: 350,
    },

    filterGroup: {
        maxWidth: "350px",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 12.5,
        marginRight: 12.5,
    },

    filterButton: {
        fontSize: "xx-small",
    },

    item: {
        display: "inline-block",
        textAlign: "center",
        padding: 14,
        textDecoration: "none",
        margin: "0px 10px",
    },

    scrollmenu: {
        overflow: "auto",
        whiteSpace: "nowrap",
    },

    header: {
        marginLeft: 10,
    },

    grad: {
        display: "flex",
    },
});

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Homepage = ({ location, match }) => {
    let history = useHistory();
    const [index, setIndex] = useState(0);
    const [isGrad, setIsGrad] = useState(false);
    const [isMoveOut, setIsMoveOut] = useState(false);
    const [isRoom, setIsRoom] = useState(false);
    const [searchResults, setSearchResults] = useState("");

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const classes = useStyles();
    return (
        <div style={{ paddingTop: "20px" }}>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="info">
                    New Posting by Top Seller <b>peteranteater</b>
                </Alert>
            </Snackbar>
            <div>
                <Card className={classes.banner}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://pbs.twimg.com/media/EU8r314U4AAf7qo.jpg"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Welcome back Peter!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <FormControl fullWidth className={classes.margin}>
                    <TextField
                        autoComplete="off"
                        onChange={(event) => {
                            setSearchResults(event.target.value);
                            if (
                                event.target.value == "grad" ||
                                event.target.value == "graduation"
                            )
                                setIsGrad(true);
                            else {
                                setIsGrad(false);
                            }
                        }}
                        id="searchBar"
                        label="Search"
                        variant="outlined"
                    ></TextField>
                </FormControl>
                <div className={classes.filterGroup}>
                    <Button
                        onClick={() => {
                            setIsRoom(!isRoom);
                        }}
                        className={classes.filterButton}
                        variant="outlined"
                        style={{
                            color: isRoom ? "white" : "#f28482",
                            background: isRoom ? "#f28482" : "none",
                        }}
                    >
                        Room for Rent
                    </Button>
                    <Button
                        onClick={() => {
                            setIsMoveOut(!isMoveOut);
                        }}
                        className={classes.filterButton}
                        variant="outlined"
                        style={{
                            color: isMoveOut ? "white" : "#84a59d",
                            background: isMoveOut ? "#84a59d" : "none",
                        }}
                    >
                        Move out Sale
                    </Button>
                    <Button
                        onClick={() => {
                            setIsGrad(!isGrad);
                        }}
                        className={classes.filterButton}
                        variant="outlined"
                        style={{
                            color: isGrad ? "white" : "#f6bd60",
                            background: isGrad ? "#f6bd60" : "none",
                        }}
                    >
                        Graduation
                    </Button>
                </div>
            </div>
            {searchResults && (
                <h3 className={classes.header}>
                    Showing results for "{searchResults}"
                </h3>
            )}
            {!isGrad ? (
                <div className={classes.initial}>
                    <h2 className={classes.header}>Recommended Items</h2>

                    <div className={classes.scrollmenu}>
                        <Card
                            onClick={() => {
                                history.push("listing/0");
                            }}
                            style={{ width: 300 }}
                            className={(classes.banner, classes.item)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Custom Stoles!
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        $ Price Ranges
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card
                            onClick={() => {
                                history.push("listing/1");
                            }}
                            style={{ width: 300 }}
                            className={(classes.banner, classes.item)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        America's Majestic Canyon
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        $15 (Used)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card
                            onClick={() => {
                                history.push("listing/2");
                            }}
                            style={{ width: 300 }}
                            className={(classes.banner, classes.item)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://d27x836h90buu9.cloudfront.net/609c4dc4f11b2b0dde5260cd/mijems/df043e30-c8bc-45a5-b446-830850a775f7.jpeg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Give Liberty
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        $10 (Used)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div>
                        <h2 className={classes.header}>Class Materials</h2>
                        <div className={classes.scrollmenu}>
                            <Card
                                onClick={() => {
                                    history.push("listing/3");
                                }}
                                style={{ width: 300 }}
                                className={(classes.banner, classes.item)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://stemeducationworks.com/wp-content/uploads/IoT-Kit_1000x769.jpg"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                        >
                                            CS147 IOT Kit
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="textSecondary"
                                            component="p"
                                        >
                                            $20 (Used)
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card
                                onClick={() => {
                                    history.push("listing/1");
                                }}
                                style={{ width: 300 }}
                                className={(classes.banner, classes.item)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                        >
                                            America's Majestic Canyon
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="textSecondary"
                                            component="p"
                                        >
                                            $15 (Used)
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card
                                onClick={() => {
                                    history.push("listing/5");
                                }}
                                style={{ width: 300 }}
                                className={(classes.banner, classes.item)}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://images-na.ssl-images-amazon.com/images/I/41o0pNCYaBL.jpg"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                        >
                                            CS122A Intro to Databases
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="textSecondary"
                                            component="p"
                                        >
                                            $8 (Used)
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className={classes.grad}>
                        <Card
                            onClick={() => {
                                history.push("listing/0");
                            }}
                            style={{ width: 300 }}
                            className={classes.banner}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Custom Stoles!
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        $ Price Ranges
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card
                            onClick={() => {
                                history.push("listing/6");
                            }}
                            style={{ width: 300 }}
                            className={classes.banner}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="http://www.hunterandsarahphotography.com/wp-content/uploads/2020/02/3-Tips-for-the-Best-UVA-Graduation-Pictures-Hunter-and-Sarah-Photography-Cover.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Graduation Photoshoot
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        Starting at $120/hr
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className={classes.grad}>
                        <Card
                            onClick={() => {
                                history.push("listing/7");
                            }}
                            style={{ width: 300 }}
                            className={classes.banner}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.etsystatic.com/8587178/r/il/daedb5/1261080445/il_570xN.1261080445_8ciu.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Custom Cap Art
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        Starting at $30
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card
                            onClick={() => {
                                history.push("listing/8");
                            }}
                            style={{ width: 300 }}
                            className={classes.banner}
                        >
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://i.pinimg.com/originals/a9/a3/d5/a9a3d5876168df4f3942edcc39ebd25c.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                    >
                                        Homemade Graduation Leis
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="textSecondary"
                                        component="p"
                                    >
                                        $10
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homepage;
