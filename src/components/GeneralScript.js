import React, { Component } from "react";
import Scene from "./Scene";
import data from "./data";
import Typography from "@material-ui/core/Typography";

export class GeneralScript extends Component {
  render() {
    let { scenes } = data;
    scenes = Object.keys(scenes).map(id => ({ id, ...scenes[id] })); //object to array, with key inside

    return (
      <div>
        {scenes.map(scene => {
          return (
            <div>
              <Scene scene={scene} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default GeneralScript;
