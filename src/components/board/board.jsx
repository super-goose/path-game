"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Tile } from "../tile";
import { getScale, getBoard, getEntries } from "@/state/slices/board";
import style from "./board.module.css";
import { getEntryRectProps } from "@/utils/entry-rect-props";

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
              rx={1}
              stroke="black"
              fill="var(--highlight-color)"
              {...getEntryRectProps({
                entry,
                scale,
              })}
            />
          ))}
        </svg>
      </div>
    </section>
  );
};
