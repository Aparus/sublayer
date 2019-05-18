import data from "./data";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { unstable_Box as Box } from "@material-ui/core/Box";
import { borders } from "@material-ui/system";

import React, { Component } from "react";

const styles = {
  avatar: {
    margin: 10
  },
  paper: {
    width: "50%",
    height: 250,
    margin: 20
  }
};

export class ScenePlayer extends Component {
  state = { currentTime: 0, currentPhrase: 0 };

  componentDidMount() {
    const { phrases } = data.scenes[0];

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
    const { actors: allActors } = data;
    const { actors: sceneActors, phrases } = data.scenes[0];
    const { currentPhrase } = this.state;
    const actors = sceneActors.map(actorId => allActors[actorId]);

    /*     const borderColor = actorId => (actorId === phrases[currentPhrase].actor ? "red" : null);
    const border = actorId => (actorId === phrases[currentPhrase].actor ? 5 : 0);

    const borderProps = {} */

    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            {actors.map(actor => {
              return (
                <Box
                  borderColor={actor.id === phrases[currentPhrase].actor ? "red" : undefined}
                  border={actor.id === phrases[currentPhrase].actor ? 5 : undefined}
                  key={actor.name}
                  clone
                >
                  <Avatar alt={actor.name} src={actor.avatar} className={classes.avatar} />
                </Box>
              );
            })}
          </Grid>
          {phrases[currentPhrase].text}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ScenePlayer);
