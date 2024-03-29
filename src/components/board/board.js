import React, { useId } from "react";
import style from "./board.module.css";

/*
MoveTo: M, m
LineTo: L, l, H, h, V, v
Cubic Bézier Curve: C, c, S, s
Quadratic Bézier Curve: Q, q, T, t
Elliptical Arc Curve: A, a
ClosePath: Z, z
*/

const Path = ({ d, dark, light }) => {
  const idShadow = useId();
  const idPath = useId();
  const idFill = useId();

  return (
    <>
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
      <use href={`#${idFill}`} fill="none" stroke={dark} strokeWidth={10} />
    </>
  );
};

const Tile = ({ x, y }) => {
  const id0 = useId();
  const id1 = useId();

  const id2 = useId();
  const id3 = useId();

  const id4 = useId();
  const id5 = useId();

  const id6 = useId();
  const id7 = useId();

  const id8 = useId();
  const id9 = useId();

  return (
    <g fill="none" stroke-width="5">
      <Path d="M 25, 100 L 25, 0" dark="darkgreen" light="green" />

      <Path
        d="
        M 25, 100
        A 25,25 0,0,1 75,100"
        dark="darkred"
        light="red"
      />

      {/* <path
        id={id1}
        d="M 25,100 T 25,85 T 40,60 T 50,50 T 60,40 T 75,15 T 75,0"
      /> */}
      <Path
        d="
          M 25,100
          L 25,85
          Q 25,63 40,55
          L 50,50
          T 60,45
          Q 75,37 75,15
          L 75,0"
        light="blue"
        dark="darkblue"
      />

      <Path d="M 25,100 A 75,75 0,0,1 100,25" light="yellow" dark="#aaaa00" />

      <Path
        d="
          M 25,100
          A 25,25 0,0,1 50,75
          L 100,75
        "
        light="#00ffff"
        dark="#00aaaa"
      />

      <Path
        d="
          M 25,100
          L 25,50
          A 25,25 0,0,0 0,25
        "
        light="#ffaa00"
        dark="#aa6600"
      />

      <Path
        d="
          M 25,100
          A 25,25 0,0,0 0,75
        "
        light="#ff00ff"
        dark="#aa00aa"
      />

      {/*
        M 25, 100
        A 25,25 0,0,1 75,100"

      <circle cx="25" cy="100" r="1" strokeWidth={1} stroke="white" />
      <circle cx="25" cy="85" r="1" strokeWidth={1} stroke="white" />
      <circle cx="40" cy="60" r="1" strokeWidth={1} stroke="white" />
      <circle cx="50" cy="50" r="1" strokeWidth={1} stroke="white" />
      <circle cx="60" cy="40" r="1" strokeWidth={1} stroke="white" />
      <circle cx="75" cy="15" r="1" strokeWidth={1} stroke="white" />
      <circle cx="75" cy="0" r="1" strokeWidth={1} stroke="white" />
      */}
    </g>
  );
};

export const Board = () => {
  return (
    <section>
      <div className={style.board}>
        <svg viewBox="0, 0, 100, 100">
          <Tile x={0} y={0} />
        </svg>
      </div>
    </section>
  );
};
