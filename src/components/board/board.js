"use client";
import React, { useEffect, useId, useMemo } from "react";
import style from "./board.module.css";
import { generateTile } from "@/utils/generate-tile";
import { Tile } from "../tile";
import { placeTileOnBoard } from "@/state/slices/board";
import { useDispatch, useSelector } from "react-redux";

const getBoard = ({ board }) => board.board;

export const Board = () => {
  const dispatch = useDispatch();
  const board = useSelector(getBoard);

  const boardDisplay = useMemo(() => {
    return Object.keys(board).map((coord) => {
      const [x, y] = coord.split(",");
      return { tile: board[coord], x: Number(x), y: Number(y) };
    });
  }, [board]);

  useEffect(() => {
    const t = {
      0: { out: 6, connected: false },
      1: { out: 5, connected: false },
      2: { out: 3, connected: false },
      3: { out: 2, connected: false },
      4: { out: 7, connected: false },
      5: { out: 1, connected: false },
      6: { out: 0, connected: false },
      7: { out: 4, connected: false },
      order: [6, 0, 3, 2, 5, 7, 1, 4],
    };
    // const t = generateTile();
    console.log(JSON.stringify(t, null, 2));
    dispatch(placeTileOnBoard(t));
  }, [dispatch]);

  console.log({ boardDisplay, board });
  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          {boardDisplay.map(({ tile, x, y }) => (
            <Tile
              key={`${x},${y}:${'tile.order.join("-")'}`}
              x={x}
              y={y}
              definition={tile}
            />
          ))}
          {/* <Tile x={0} y={1} definition={generateTile()} />
          <Tile x={0} y={2} definition={generateTile()} />
          <Tile x={0} y={3} definition={generateTile()} />
          <Tile x={1} y={0} definition={generateTile()} />
          <Tile x={1} y={1} definition={generateTile()} />
          <Tile x={1} y={2} definition={generateTile()} />
          <Tile x={1} y={3} definition={generateTile()} /> */}
        </svg>
      </div>
    </section>
  );
};
