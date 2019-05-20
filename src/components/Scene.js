import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Phrase from "./Phrase";

const styles = {
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 100,
    backgroundSize: "contain"
  }
};

function MediaControlCard(props) {
  const { classes, scene } = props;
  let { phrases } = scene;
  phrases = Object.keys(phrases).map(id => ({ id, ...phrases[id] })); //object to array, with key inside

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cover} image={scene.cover} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h5" color="textSecondary">
            {scene.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {scene.description}
          </Typography>
          <div className={classes.phrases}>
            {phrases.map(phrase => {
              return (
                <div>
                  <Phrase phrase={phrase} />
                </div>
              );
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

MediaControlCard.propTypes = {
  scene: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaControlCard);
