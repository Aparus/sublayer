import data from "./data";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "./Avatar";

import React, { Component } from "react";

const styles = {
  paper: {
    width: "50%",
    height: 250,
    margin: 20
  },
  dialog: {
    marginTop: 30
  }
};

export class ScenePlayer extends Component {
  state = { currentTime: 0, currentPhrase: 0 };

  componentDidMount() {
    let { phrases } = data.scenes[0];
    phrases = Object.keys(phrases).map(id => ({ id, ...phrases[id] })); //object to array, with key inside

    const timer = setInterval(() => {
      const { currentTime, currentPhrase } = this.state;
      if (currentTime > 12) clearInterval(timer);
      this.setState({ currentTime: this.state.currentTime + 0.1 });
      if (currentTime > phrases[currentPhrase].timeEnd) {
        this.setState({ currentPhrase: currentPhrase + 1 });
      }
    }, 100);
  }

  render() {
    const { classes } = this.props;
    let allActors = data.actors;
    allActors = Object.keys(allActors).map(id => ({ id, ...allActors[id] })); //object to array, with key inside
    const { actors: sceneActors, phrases } = data.scenes[0];
    const { currentPhrase } = this.state;
    const actors = allActors.filter(elem => sceneActors.includes(elem.id));

    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            {actors.map(actor => {
              return <Avatar actor={actor} active={actor.id === phrases[currentPhrase].actor} />;
            })}
          </Grid>
          <Grid container justify="center" alignItems="center" className={classes.dialog}>
            {phrases[currentPhrase].text}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ScenePlayer);
