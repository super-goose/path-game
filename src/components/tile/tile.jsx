import React, { useRef, useEffect, useId } from "react";
import { TILE_SIZE, drawStageTile } from "../../utils/canvas-drawing";
import { buildLayers } from "@/utils/build-layers";
import { pathsByTileOpenings } from "@/utils/paths-by-tile-openings";

/*
MoveTo: M, m
LineTo: L, l, H, h, V, v
Cubic Bézier Curve: C, c, S, s
Quadratic Bézier Curve: Q, q, T, t
Elliptical Arc Curve: A, a
ClosePath: Z, z

light="green" dark="darkgreen"
light="red" dark="darkred"
light="blue" dark="darkblue"
light="yellow" dark="#aaaa00"
light="#00ffff" dark="#00aaaa"
light="#ffaa00" dark="#aa6600"
light="#ff00ff" dark="#aa00aa"
/> 
*/

const Path = ({ d, dark, light, filled, flip }) => {
  const idShadow = useId();
  const idPath = useId();
  const idFill = useId();
  const idColorFill = useId();

  return (
    <g>
      <path id={idShadow} d={d} />
      <use
        href={`#${idShadow}`}
        fill="none"
        strokeWidth={20}
        stroke="#222"
        strokeOpacity={0.5}
      />
      <path id={idPath} d={d} />
      <use
        href={`#${idPath}`}
        fill="none"
        stroke={"#3b7e95"}
        strokeWidth={15}
      />
      <path id={idFill} d={d} />
      <use href={`#${idFill}`} fill="none" stroke={"#222"} strokeWidth={10} />
      {filled && (
        <>
          <path id={idColorFill} d={d} />
          <use
            href={`#${idColorFill}`}
            fill="none"
            // stroke={"#91ba9d"}
            stroke={"#3C3C63"}
            strokeWidth={9}
          />
        </>
      )}
    </g>
  );
};

export const Tile = ({ x, y, scale, definition }) => {
  const layers = buildLayers(definition);
  const isBoardTile = !isNaN(x) && !isNaN(y) && !isNaN(scale);

  const translate = isBoardTile
    ? `scale(${scale}, ${scale}) translate(${x * 100}, ${y * 100})`
    : "";

  return (
    <g fill="none" transform={translate}>
      {layers.map((layer) => (
        <Path
          key={`${x},${y}->${layer.name}->${layer.rotate}->${layer.flip}`}
          d={pathsByTileOpenings(layer.name, layer.flip, layer.rotate)}
          light="#008fdd"
          dark="#006094"
          rotate={layer.rotate}
          flip={layer.flip}
          filled={layer.filled || !isBoardTile}
        />
      ))}
    </g>
  );
};
