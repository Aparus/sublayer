import data from "./data";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { unstable_Box as Box } from "@material-ui/core/Box";

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
  render() {
    const { classes } = this.props;
    const { actors: allActors } = data;
    const { actors: sceneActors } = data.scenes[0];
    const actors = sceneActors.map(actorId => allActors[actorId]);
    return (
      <div>
        <Paper className={classes.paper}>
          <Grid container justify="center" alignItems="center">
            {actors.map((actor, index) => {
              const borderColor = index == 1 ? "red" : "";
              const border = index == 1 ? 5 : 0;
              const borderProps = { borderColor, border };

              return (
                <Box {...borderProps} key={actor.name} clone>
                  <Avatar alt={actor.name} src={actor.avatar} className={classes.avatar} />
                </Box>
              );
            })}
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ScenePlayer);
