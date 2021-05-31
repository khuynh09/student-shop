import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { Card, CardMedia, CardContent, TextField, FormControl } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import banner from "./assets/BC_Peter_Background_Mirror.png"


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

  });

const Homepage= ({history, location, match}) => {
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
            <FormControl fullWidth className={classes.margin}>
                <TextField id="searchBar" label="Search" variant="outlined"></TextField>
            </FormControl>
        </div>
    );
};

export default Homepage;