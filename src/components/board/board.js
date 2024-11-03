import React, { useId } from "react";
import style from "./board.module.css";
import { generateTile } from "@/utils/generate-tile";
import { Tile } from "../tile";

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
