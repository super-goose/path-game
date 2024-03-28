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

const Tile = ({ x, y }) => {
  const id0 = useId();
  const id1 = useId();

  const id2 = useId();
  const id3 = useId();

  const id4 = useId();
  const id5 = useId();

  const id6 = useId();
  const id7 = useId();

  return (
    <g fill="none" stroke-width="5">
      <path id={id4} d="M 25, 100 L 25, 0" />
      <use href={`#${id4}`} fill="none" stroke="green" strokeWidth={15} />

      <path id={id5} d="M 25, 100 L 25, 0" />
      <use href={`#${id5}`} fill="none" stroke="darkgreen" strokeWidth={10} />

      <path id={id0} d="M 25, 100 A 25,25 0,0,1 75,100" />
      <use href={`#${id0}`} fill="none" stroke="red" strokeWidth={15} />

      <path
        id={id2}
        d="
        M 25, 100
        A 25,25 0,0,1 75,100"
      />
      <use href={`#${id2}`} fill="none" stroke="darkred" strokeWidth={10} />

      {/* <path
        id={id1}
        d="M 25,100 T 25,85 T 40,60 T 50,50 T 60,40 T 75,15 T 75,0"
      /> */}
      <path
        id={id1}
        d="
          M 25,100
          L 25,85
          Q 25,63 40,55
          L 50,50
          T 60,45
          Q 75,37 75,15
          L 75,0"
      />
      <use href={`#${id1}`} fill="none" stroke="blue" strokeWidth={15} />
      <path
        id={id3}
        d="
          M 25,100
          L 25,85
          Q 25,63 40,55
          L 50,50
          T 60,45
          Q 75,37 75,15
          L 75,0"
      />
      <use href={`#${id3}`} fill="none" stroke="darkblue" strokeWidth={10} />

      <path id={id6} d="M 25,100 A 75,75 0,0,1 100,25" />
      <use href={`#${id6}`} fill="none" stroke="yellow" strokeWidth={15} />

      <path id={id7} d="M 25,100 A 75,75 0,0,1 100,25" />
      <use href={`#${id7}`} fill="none" stroke="darkyellow" strokeWidth={10} />
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
