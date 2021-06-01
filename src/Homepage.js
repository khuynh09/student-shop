import {React, useState} from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Card, CardMedia, CardContent, TextField, FormControl, Button } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import banner from "./assets/BC_Peter_Background_Mirror.png"


import Carousel from "react-bootstrap/Carousel";


// import CardBody from "components/Card/CardBody.js";

// import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

// import { cardTitle } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles({
    banner: {
    
      maxWidth: 345,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 10,
    },
    media: {
      height: 200,
    },

    margin: {
        margin: 12.5,
        width: 350
    },

    filterGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 12.5,
        marginRight: 12.5
    },

    filterButton: {
        fontSize: "xx-small"
    },

    item: {
        display: "inline-block",
        textAlign: "center",
        padding: 14,
        textDecoration: "none",
        margin:"0px 10px",
    },

    scrollmenu: {
        overflow: "auto",
        whiteSpace: "nowrap",
    },

    header: {
        marginLeft: 10
    },

    grad: {
        display: "flex"
    }

  });




const Homepage= ({history, location, match}) => {
    const [index, setIndex] = useState(0);
    const [isGrad, setIsGrad] = useState(false);
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const classes = useStyles();
    return (
        <div>
            <div>
                <Card className={classes.banner}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://pbs.twimg.com/media/EU8r314U4AAf7qo.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Welcome back Peter!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
            <div>
                <FormControl fullWidth className={classes.margin}>
                    <TextField autoComplete='off' onChange={(event) => {if(event.target.value == "grad") setIsGrad(true); else{
                        setIsGrad(false)
                    }}}id="searchBar" label="Search" variant="outlined"></TextField>
                </FormControl>
                <div className={classes.filterGroup} >
                    <Button className={classes.filterButton} variant="outlined" style={{color: "#f28482"}}>Room for Rent</Button>
                    <Button className={classes.filterButton}  variant="outlined" style={{color: "#84a59d"}}>Move out Sale</Button>
                    <Button onClick={() => {setIsGrad(!isGrad)}}className={classes.filterButton} variant="outlined" style={{color: "#f6bd60"}}>Graduation</Button>
                </div>
            </div>
            {!isGrad ? 
            (<div className={classes.initial}>
                <h2 className={classes.header}>Recommended Items</h2>

                <div className={classes.scrollmenu} >
                    <Card style={{width: 300}}className={classes.banner, classes.item}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Custom Stoles!
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    $ Price Ranges
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card style={{width: 300}}className={classes.banner , classes.item}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    America's Majestic Canyon
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    $15 (Used)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card style={{width: 300}}className={classes.banner, classes.item}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://d27x836h90buu9.cloudfront.net/609c4dc4f11b2b0dde5260cd/mijems/df043e30-c8bc-45a5-b446-830850a775f7.jpeg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Give Liberty 
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    $10 (Used)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

                <div>
                    <h2 className={classes.header}>Class Materials</h2>
                    <div className={classes.scrollmenu} >
                        <Card style={{width: 300}}className={classes.banner, classes.item}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://stemeducationworks.com/wp-content/uploads/IoT-Kit_1000x769.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        CS147 IOT Kit
                                    </Typography>
                                    <Typography gutterBottom variant="textSecondary" component="p">
                                        $20 (Used)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{width: 300}}className={classes.banner , classes.item}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://i.pinimg.com/originals/d1/29/47/d12947612508acc731392e1ee29ad8f0.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        America's Majestic Canyon
                                    </Typography>
                                    <Typography gutterBottom variant="textSecondary" component="p">
                                        $15 (Used)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{width: 300}}className={classes.banner, classes.item}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image="https://images-na.ssl-images-amazon.com/images/I/41o0pNCYaBL.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        CS122A Intro to Databses
                                    </Typography>
                                    <Typography gutterBottom variant="textSecondary" component="p">
                                        $8 (Used)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>):
            (<div>
                <h3 className={classes.header}>Showing results for "grad"</h3>
                <div className={classes.grad}>
                    <Card style={{width: 300}}className={classes.banner}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://preview.redd.it/atqedolddew41.jpg?auto=webp&s=a0f39259db9045f95a51085c5d0b890885add0ca"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Custom Stoles!
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    $ Price Ranges
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card style={{width: 300}}className={classes.banner}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="http://www.hunterandsarahphotography.com/wp-content/uploads/2020/02/3-Tips-for-the-Best-UVA-Graduation-Pictures-Hunter-and-Sarah-Photography-Cover.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Graduation Photoshoot
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    Starting at $120/hr
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className={classes.grad}>
                    <Card style={{width: 300}}className={classes.banner}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://i.etsystatic.com/8587178/r/il/daedb5/1261080445/il_570xN.1261080445_8ciu.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Custom Cap Art 
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    Starting at $30
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card style={{width: 300}}className={classes.banner}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="https://i.pinimg.com/originals/a9/a3/d5/a9a3d5876168df4f3942edcc39ebd25c.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h3">
                                    Homemade Graduation Leis
                                </Typography>
                                <Typography gutterBottom variant="textSecondary" component="p">
                                    $10 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>)}
        </div>
    );
};

export default Homepage;