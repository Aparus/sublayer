import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MuiAvatar from "@material-ui/core/Avatar";

const styles = {
  avatar: {
    width: 100,
    height: 100
  },
  box: {
    border: "1px solid white",
    borderRadius: "10%",
    margin: 10,
    padding: 5
  },
  active: {
    borderColor: "red"
  }
};

export class Avatar extends Component {
  render() {
    const { classes, actor } = this.props;
    return (
      <div className={`${classes.box} ${this.props.active ? classes.active : ""}`}>
        <MuiAvatar alt={actor.name} src={actor.avatar} className={classes.avatar} />
        <Grid container justify="center" alignItems="center">
          {actor.name}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Avatar);
