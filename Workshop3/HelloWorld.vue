<template>
  <div id="game">
  <h1>Tic Tac Toe</h1>
  <div v-for="(row, i) in board" :key="i" class="board-row">
  <button v-for="(cell, j) in row" :key="j" @click="makeMove(i, j)" class="game-button">
  {{ cell }}
  </button>
  </div>
  <h2>{{ message }}</h2>
  <button @click="resetBoard" class="reset-button">Start Over</button>
  </div>
 </template>
  

 

 <script>
 //import './styles.css';

 export default {
  data() {
  return {
  board: Array(3).fill().map(() => Array(3).fill(null)),
  xIsNext: true,
  message: 'Next player: X'
  }
  },
  methods: {
  checkWinner() {
  const lines = [
  [0, 0, 0, 1, 0, 2],
  [1, 0, 1, 1, 1, 2],
  [2, 0, 2, 1, 2, 2],
  [0, 0, 1, 0, 2, 0],
  [0, 1, 1, 1, 2, 1],
  [0, 2, 1, 2, 2, 2],
  [0, 0, 1, 1, 2, 2],
  [0, 2, 1, 1, 2, 0]
  ];
  for (let line of lines) {
  const [a, b, c, d, e, f] = line;
  if (
  this.board[a][b] &&
  this.board[a][b] === this.board[c][d] &&
  this.board[a][b] === this.board[e][f]
  ) {
  return this.board[a][b];
  }
  }
  return null;
  },
  makeMove(i, j) {
  if (this.board[i][j] || this.checkWinner()) {
  return;
  }
  this.board[i][j] = this.xIsNext ? 'X' : 'O';
  this.xIsNext = !this.xIsNext;
  const winner = this.checkWinner();
  if (winner) {
  this.message = 'Winner: ' + winner;
  } else {
  this.message = 'Next player: ' + (this.xIsNext ? 'X' : 'O');
  if (!this.xIsNext) {
  this.$nextTick(() => {
  this.makeComputerMove();
  });
  }
  }
  },
  makeComputerMove() {
  let available = [];
  for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
  if (!this.board[i][j]) {
  available.push([i, j]);
  }
  }
  }
  if (available.length) {
  const move = available[Math.floor(Math.random() * available.length)];
  this.makeMove(move[0], move[1]);
  }
  },
  resetBoard() {
  this.board = Array(3).fill().map(() => Array(3).fill(null));
  this.xIsNext = true;
  this.message = 'Next player: X';
  }
  }
 }
 </script>
