"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Tile } from "../tile";
import { getBoard } from "@/state/slices/board";
import { getScale } from "@/state/slices/settings";
import style from "./board.module.css";

export const Board = ({ nextCoords }) => {
  const board = useSelector(getBoard);
  const scale = useSelector(getScale);

  const boardDisplay = useMemo(() => {
    return Object.keys(board).map((coord) => {
      const [x, y] = coord.split(",");
      return { tile: board[coord], x: Number(x), y: Number(y) };
    });
  }, [board]);

  const scalePercent = scale * 100;
  return (
    <section>
      <div className={style.board} style={{ "--light-background": "#d1a97f" }}>
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
            rx={4}
            stroke="black"
            fill="none"
          />
          <rect
            x={15 * scale - 1}
            y={-4 * scale}
            width={20 * scale + 2}
            height={8 * scale}
            rx={1}
            stroke="black"
            fill="#91ba9d"
          />
        </svg>
      </div>
    </section>
  );
};
