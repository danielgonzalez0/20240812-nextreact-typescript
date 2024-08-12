/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import clsx from "clsx";
import {ComponentPropsWithoutRef, PropsWithChildren } from "react";

// 🦁 Supprime ce commentaire et définis correctement les types pour ce composant
type SquareProps = {
isWinningSquare?: boolean;
}&ComponentPropsWithoutRef<"button">;

const Square = ({isWinningSquare, children, ...props}:PropsWithChildren<SquareProps>) => {
  // 🦁 Remplace ça par les props définies en haut
  return (
    <button
      className={clsx("square", {
        "winning-square": isWinningSquare, // 🦁 Remplace ça par la prop isWinningSquare
      })}
      {...props}
      onClick={() => {console.log("Square clicked")}}
    >
      {children}
    </button>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Square isWinningSquare={true}>X</Square>
      <Square isWinningSquare={false}>X</Square>
      <Square isWinningSquare={true}>O</Square>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h2>TicTacToe</h2>
      <Game />
    </div>
  );
}
