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

  const TILE_SIZE = 100;

  const scale = flip ? "scale(1)" : "";
  return (
    <g
    // transform={[
    //   scale,
    //   `rotate(${rotate}, ${TILE_SIZE / 2}, ${TILE_SIZE / 2})`,
    // ]}
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
            stroke={light}
            strokeWidth={9}
          />
        </>
      )}
    </g>
  );
};

const Tile = ({ x, y, definition }) => {
  const layers = buildLayers(definition); //.splice(1, 1);
  console.log(layers);
  return (
    <g
      fill="none"
      transform={`scale(.2, .2) translate(${x * 100}, ${y * 100})`}
    >
      {layers.map((layer) => (
        <Path
          key={`${x},${y}->${layer.name}->${layer.rotate}->${layer.flip}`}
          d={pathsByTileOpenings(layer.name, layer.flip, layer.rotate)}
          light="blue"
          dark="darkblue"
          rotate={layer.rotate}
          flip={layer.flip}
          filled={layer.filled}
        />
      ))}
    </g>
  );
};

export const Board = () => {
  const t = {
    0: { out: 6, connected: true },
    1: { out: 4, connected: false },
    2: { out: 3, connected: false },
    3: { out: 2, connected: false },
    4: { out: 1, connected: false },
    5: { out: 7, connected: false },
    6: { out: 0, connected: true },
    7: { out: 5, connected: false },
    order: [6, 0, 3, 2, 5, 7, 1, 4],
  };
  // const t = generateTile();
  console.log(JSON.stringify(t, null, 2));

  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          <Tile x={0} y={0} definition={t} />
          <Tile x={0} y={1} definition={generateTile()} />
          <Tile x={0} y={2} definition={generateTile()} />
          <Tile x={0} y={3} definition={generateTile()} />
          <Tile x={1} y={0} definition={generateTile()} />
          <Tile x={1} y={1} definition={generateTile()} />
          <Tile x={1} y={2} definition={generateTile()} />
          <Tile x={1} y={3} definition={generateTile()} />
        </svg>
      </div>
    </section>
  );
};
