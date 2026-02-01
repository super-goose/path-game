import React, { useId } from "react";
import { buildLayers } from "@/utils/build-layers";
import { pathsByTileOpenings } from "@/utils/paths-by-tile-openings";

/*
PATH COMMANDS
MoveTo: M, m
LineTo: L, l, H, h, V, v
Cubic Bézier Curve: C, c, S, s
Quadratic Bézier Curve: Q, q, T, t
Elliptical Arc Curve: A, a
ClosePath: Z, z
*/

const Path = ({ d, filled }) => {
  const idShadow = useId();
  const idPath = useId();
  const idFill = useId();
  const idColorFill = useId();

  return (
    <g>
      <path
        id={idShadow}
        d={d}
        fill="none"
        strokeWidth={20}
        stroke="var(--blackish)"
        strokeOpacity={0.5}
      />
      {/* <use href={`#${idShadow}`} /> */}
      <path
        id={idPath}
        d={d}
        fill="none"
        stroke={"var(--accent-color)"}
        strokeWidth={15}
      />
      {/* <use
        href={`#${idPath}`}
      /> */}
      <path
        id={idFill}
        d={d}
        fill="none"
        stroke="var(--blackish)"
        strokeWidth={10}
      />
      {/* <use
        href={`#${idFill}`}
      /> */}
      {filled && (
        <>
          <path
            id={idColorFill}
            d={d}
            fill="none"
            stroke={"var(--highlight-color)"}
            strokeWidth={9}
          />
          {/* <use
            href={`#${idColorFill}`}
          /> */}
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
          rotate={layer.rotate}
          flip={layer.flip}
          filled={layer.filled || !isBoardTile}
        />
      ))}
    </g>
  );
};
