"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Tile } from "../tile";
import { getBoard, getEntries } from "@/state/slices/board";
import { getScale } from "@/state/slices/settings";
import style from "./board.module.css";

export const Board = ({ nextCoords }) => {
  const board = useSelector(getBoard);
  const scale = useSelector(getScale);
  const entries = useSelector(getEntries);

  const boardDisplay = useMemo(() => {
    return Object.keys(board).map((coord) => {
      const [x, y] = coord.split(",");
      return { tile: board[coord], x: Number(x), y: Number(y) };
    });
  }, [board]);

  const scalePercent = scale * 100;
  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          {boardDisplay.map(({ tile, x, y }) => (
            <Tile
              key={`${x},${y}:${tile.order.join("-")}`}
              scale={scale}
              x={x}
              y={y}
              definition={tile}
            />
          ))}
          <rect
            x={nextCoords.x * scalePercent}
            y={nextCoords.y * scalePercent}
            width={scalePercent /*TILE_SIZE*/}
            height={scalePercent /*TILE_SIZE*/}
            rx={16 / (1 / scale)}
            stroke="black"
            strokeWidth={4 * scale}
            fill="none"
          />
          {entries.map((entry) => (
            <rect
              key={`entry-${entry}`}
              x={15 * scale - 1}
              y={-4 * scale}
              width={20 * scale + 2}
              height={8 * scale}
              rx={1}
              stroke="black"
              strokeWidth={4 * scale}
              fill="var(--highlight-color)"
            />
          ))}
        </svg>
      </div>
    </section>
  );
};
