import React from "react";
import "./TicTacToe.css";

const board = ["x", null, "o", "o", "x", null, "x", "o", null];

const TicTacToe = () => {
  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className = 'board'>
        {board.map((item, index) => {
          return <h3 key={index}>{item}</h3>;
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
