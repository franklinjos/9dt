import { TOKENTYPE } from "./constants";
import { checkArrayArg, checkNumArg } from "./utils";

export const emptyCell = {};

export function createEmptyBoard(boardSize) {
    checkNumArg("boardSize", boardSize);
    return Array.from(Array(boardSize), () => Array(boardSize).fill(emptyCell));
}

export function createBoardFromMoves(moves, boardSize, firstMove = TOKENTYPE.RED) {
    checkNumArg("boardSize", boardSize);
    checkArrayArg("moves", moves);
    moves.forEach(move => validateMove(move, boardSize));
    let token = firstMove;
    const board = createEmptyBoard(boardSize);
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i];
        makeMove(move, board, token);
        /** Toggle token between moves */
        token = token === TOKENTYPE.RED ? TOKENTYPE.BLUE : TOKENTYPE.RED;
    }
    return board;
}

export function canMakeMove(move, board) {
    validateBoard(board);
    validateMove(move);
    if (board[0][move] !== emptyCell) return false;

    return true;
}

export function makeMove(move, board, token) {
    if (!canMakeMove(move, board)) return null;

    for (let row = board.length - 1; row >= 0; row--) {
        if (board[row][move] === emptyCell) {
            board[row][move] = { token };
            return { row, column: move };
        }
    }
}

export function hasWon(board) {
    validateBoard(board);

    for (let size = 0; size < board.length; size++) {
        if (checkBoard(board, size, 0, 0, 1)) return true;
        if (checkBoard(board, 0, size, 1, 0)) return true;
    }

    if (checkBoard(board, 0, 0, 1, 1)) return true;
    if (checkBoard(board, 0, board.length - 1, 1, -1)) return true;
    return false;
}

export function validateBoard(board) {
    checkArrayArg("board", board);
    if (board.length < 2) throw Error("Board size should be greater than 1.");
    checkArrayArg("board[0]", board[0]);
    if (board.length !== board[0].length)
        throw Error(
            `Board should be square. Row size: '${board.length}' Column size: '${board[0].length}' `
        );
}

function checkBoard(board, row, col, rowIncrement, colIncrement) {
    let firstCell = board[row][col];
    let size = board.length;

    function checkUtil(r, c) {
        if (inBounds(size, r, c)) {
            if (board[r][c] === emptyCell || board[r][c].token !== firstCell.token) {
                return false;
            }
            return checkUtil(r + rowIncrement, c + colIncrement);
        }
        return true;
    }

    return checkUtil(row, col);
}

function inBounds(size, row, col) {
    if (row >= 0 && row < size && col >= 0 && col < size) {
        return true;
    }

    return false;
}

function validateMove(move, boardSize) {
    checkNumArg("move", move);
    if (move < 0 || move >= boardSize)
        throw Error(`Move out of bounds. Board size: '${boardSize}' Move: '${move}'`);
}
