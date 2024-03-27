import React, { useRef, useEffect } from "react";
import { TILE_SIZE, drawStageTile } from "../../utils/canvas-drawing";
// import { buildLayers } from "../utils/build-layers";

export const Tile = ({ sprites, tile, onClick }) => {
  const stage = useRef(null);
  const stageElement = useRef(null);

  useEffect(() => {
    stage.current = stageElement.current.getContext("2d");
    stage.current.imageSmoothingEnabled = false;
  }, []);

  useEffect(() => {
    stage.current.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
    // const layers = buildLayers(tile);
    // layers.forEach((layer) => {
    //   drawStageTile(stage.current, sprites, layer);
    // });
  }, [sprites, tile]);

  return (
    <div className="tile" onClick={onClick}>
      <canvas
        width={TILE_SIZE}
        height={TILE_SIZE}
        ref={stageElement}
        style={{ border: "1px solid #223" }}
      />
    </div>
  );
};
