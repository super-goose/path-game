import React from "react";
import { Tile } from "../tile";
import { RotateButton } from "./rotate-button";

const TileSpace = ({ tile, sprites, index, rotateCCW, rotateCW, playTile }) => (
  <div className="tile-space">
    <RotateButton direction="cw" onClick={() => rotateCW(index)} />
    <Tile sprites={sprites} tile={tile} onClick={() => playTile(index)} />
    <RotateButton direction="ccw" onClick={() => rotateCCW(index)} />
  </div>
);

export const NextUp = ({ sprites, hand, rotateCCW, rotateCW, playTile }) => (
  <div className="container">
    {hand.map((tile, i) => (
      <TileSpace
        key={`tilespace-${tile.order.join("-")}`}
        index={i}
        sprites={sprites}
        tile={tile}
        rotateCCW={rotateCCW}
        rotateCW={rotateCW}
        playTile={playTile}
      />
    ))}
  </div>
);
