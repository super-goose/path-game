import React, { useId } from "react";
import style from "./board.module.css";
import { generateTile } from "@/utils/generate-tile";
import { buildLayers } from "@/utils/build-layers";
import { pathsByTileOpenings } from "@/utils/paths-by-tile-openings";

/*
MoveTo: M, m
LineTo: L, l, H, h, V, v
Cubic Bézier Curve: C, c, S, s
Quadratic Bézier Curve: Q, q, T, t
Elliptical Arc Curve: A, a
ClosePath: Z, z
*/

const Path = ({ d, dark, light, filled, rotate, flip }) => {
  const idShadow = useId();
  const idPath = useId();
  const idFill = useId();
  const idColorFill = useId();

  const TILE_SIZE = 100;

  const dx_on_rotate = [90, 180].includes(rotate) ? TILE_SIZE : 0; // eslint-disable-line
  const dy_on_rotate = [180, 270].includes(rotate) ? TILE_SIZE : 0; // eslint-disable-line

  const scale = flip ? "scale(1)" : "";
  return (
    <g
      transform={[
        scale,
        `rotate(${rotate}, ${TILE_SIZE / 2}, ${TILE_SIZE / 2})`,
      ]}
    >
      <path id={idShadow} d={d} />
      <use
        href={`#${idShadow}`}
        fill="none"
        strokeWidth={20}
        stroke="#222"
        strokeOpacity={0.5}
      />
      <path id={idPath} d={d} />
      <use href={`#${idPath}`} fill="none" stroke={light} strokeWidth={15} />
      <path id={idFill} d={d} />
      <use href={`#${idFill}`} fill="none" stroke={"#222"} strokeWidth={10} />
      {filled && (
        <>
          <path id={idColorFill} d={d} />
          <use
            href={`#${idColorFill}`}
            fill="none"
            stroke={dark}
            strokeWidth={9}
          />
        </>
      )}
    </g>
  );
};

const Tile = ({ x, y, definition }) => {
  console.log(definition);
  const layers = buildLayers(definition).splice(1, 1);

  console.log("layers:", layers);
  return (
    <g fill="none">
      {layers.map((layer) => (
        <Path
          key={`${x},${y}->${layer.name}->${layer.rotate}->${layer.flip}`}
          d={pathsByTileOpenings(layer.name)}
          light="blue"
          dark="darkblue"
          rotate={layer.rotate}
          flip={layer.flip}
        />
      ))}
      {/* <Path d={pathsByTileOpenings("0-5")} dark="darkgreen" light="green" />

      <Path d={pathsByTileOpenings("0-1")} dark="darkred" light="red" />

      <Path d={pathsByTileOpenings("0-4")} light="blue" dark="darkblue" />

      <Path d={pathsByTileOpenings("0-3")} light="yellow" dark="#aaaa00" />

      <Path d={pathsByTileOpenings("0-2")} light="#00ffff" dark="#00aaaa" />

      <Path d={pathsByTileOpenings("0-6")} light="#ffaa00" dark="#aa6600" />

      <Path
        d={pathsByTileOpenings("0-7")}
        light="#ff00ff"
        dark="#aa00aa"
        filled
      /> */}
    </g>
  );
};

export const Board = () => {
  const t = {
    0: { out: 6, connected: false },
    1: { out: 3, connected: false },
    2: { out: 5, connected: false },
    3: { out: 1, connected: false },
    4: { out: 7, connected: false },
    5: { out: 2, connected: false },
    6: { out: 0, connected: false },
    7: { out: 4, connected: false },
    order: [6, 0, 5, 2, 7, 4, 1, 3],
  }; // generateTile();
  console.log(JSON.stringify(t));

  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          <Tile x={0} y={0} definition={t} />
        </svg>
      </div>
    </section>
  );
};
