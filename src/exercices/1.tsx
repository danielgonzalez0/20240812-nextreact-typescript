/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import clsx from 'clsx';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { calculateNextValue, calculateStatus } from '../lib/tictactoe/helpers';

// 🦁 Supprime ce commentaire et définis correctement les types pour ce composant
type SquareProps = {
  isWinningSquare?: boolean;
} & ComponentPropsWithoutRef<'button'>;

const Square = ({
  isWinningSquare,
  children,
  ...props
}: PropsWithChildren<SquareProps>) => {
  // 🦁 Remplace ça par les props définies en haut
  return (
    <button
      className={clsx('square', {
        'winning-square': isWinningSquare, // 🦁 Remplace ça par la prop isWinningSquare
      })}
      {...props}
      onClick={() => {
        console.log('Square clicked');
      }}
    >
      {children}
    </button>
  );
};

//component Board

type SquareValue = 'X' | 'O' | null;
type BoardProps = {
  squares: SquareValue[];
  onClick?: (index: number) => void;
  winningSquares?: number[];
};

const Board = ({ squares, onClick, winningSquares }: BoardProps) => {
  return (
    <div className="game-board">
      {squares.map((square, i) => (
        <Square
          key={`square-${i}`}
          onClick={() => onClick?.(i)}
          isWinningSquare={winningSquares?.includes(i)}
        >
          {square}
        </Square>
      ))}
    </div>
  );
};

// component GameInfo

type GameInfoProps = {
  status: string;
};

const GameInfo = ({ status }: GameInfoProps) => {
  return (
    <div className="game-info">
      <p>{status}</p>
    </div>
  );
};

//component Game

const getDefaultSquares = (): SquareValue[] => [
  null,
  null,
  null,
  null,
  null,
  null,
  'O',
  null,
  'X',
];

const Game = () => {
  const squares = getDefaultSquares();
  const nextPlayer = calculateNextValue(squares);
  const status = calculateStatus(squares, nextPlayer);

  return (
    <div className="game">
      <GameInfo status={status} />
      <Board
        squares={squares}
        onClick={(i) => console.log(i)}
        winningSquares={[6, 8]}
      />
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
