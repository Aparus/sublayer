import data from "./data";

import React, { Component } from "react";

export class ScenePlayer extends Component {
  render() {
    const { actors: allActors } = data;
    const { actors: sceneActors } = data.scenes[0];
    const actors = sceneActors.map(actorId => allActors[actorId]);
    return (
      <div>
        <ul>
          {actors.map(actor => (
            <li key={actor.name}>
              {actor.name}
              <img src={actor.avatar} alt={actor.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ScenePlayer;
