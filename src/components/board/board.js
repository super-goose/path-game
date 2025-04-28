"use client";
import React, { useMemo } from "react";
import style from "./board.module.css";
import { Tile } from "../tile";
import { getBoard, getNext } from "@/state/slices/board";
import { useSelector } from "react-redux";
import { keyToCoords } from "@/utils/transformers";
import { getScale } from "@/state/slices/settings";

export const Board = () => {
  const board = useSelector(getBoard);
  const next = useSelector(getNext);
  const scale = useSelector(getScale);

  const nextCoords = useMemo(() => {
    return keyToCoords(next);
  }, [next]);

  const boardDisplay = useMemo(() => {
    return Object.keys(board).map((coord) => {
      const [x, y] = coord.split(",");
      return { tile: board[coord], x: Number(x), y: Number(y) };
    });
  }, [board]);

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
            x={nextCoords.x * scale * 100}
            y={nextCoords.y * scale * 100}
            width={scale * 100 /*TILE_SIZE*/}
            height={scale * 100 /*TILE_SIZE*/}
            rx={4}
            stroke="black"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};
