import {
    emptyCell,
    createEmptyBoard,
    canMakeMove,
    makeMove,
    hasWon
} from "../../common/game-utils";
import { TOKENTYPE } from "../../common/constants";
const size = 2;
let board = createEmptyBoard(size);
beforeEach(() => {
    board = createEmptyBoard(size);
});

describe("game-utils", () => {
    test("should create an empty board of given size", () => {
        expect(board.length).toEqual(size);
        expect(board[0].length).toEqual(size);
        expect(board[0][0]).toEqual(emptyCell);
        expect(board[1][0]).toEqual(emptyCell);
        expect(board[0][1]).toEqual(emptyCell);
        expect(board[1][1]).toEqual(emptyCell);
    });

    test("should be able to check to  make move", () => {
        let canMove = canMakeMove(0, board);
        expect(canMove).toEqual(true);
        board[1][0] = {};
        canMove = canMakeMove(0, board);
        expect(canMove).toEqual(true);
        board[0][0] = {};
        canMove = canMakeMove(0, board);
        expect(canMove).toEqual(false);
        board[1][1] = {};
        canMove = canMakeMove(1, board);
        expect(canMove).toEqual(true);
        board[0][1] = {};
        canMove = canMakeMove(1, board);
        expect(canMove).toEqual(false);
    });

    test("should be able to  make move", () => {
        let move = 0;
        let position = makeMove(move, board, TOKENTYPE.RED);
        expect(position.column).toEqual(move);
        expect(board[1][0].token).toEqual(TOKENTYPE.RED);
        position = makeMove(move, board, TOKENTYPE.RED);
        expect(position.column).toEqual(move);
        expect(board[0][0].token).toEqual(TOKENTYPE.RED);
        position = makeMove(move, board, TOKENTYPE.RED);
        expect(position).toEqual(null);

        move = 1;
        position = makeMove(move, board, TOKENTYPE.BLUE);
        expect(position.column).toEqual(move);
        expect(board[1][1].token).toEqual(TOKENTYPE.BLUE);
        position = makeMove(move, board, TOKENTYPE.BLUE);
        expect(position.column).toEqual(move);
        expect(board[0][1].token).toEqual(TOKENTYPE.BLUE);
        position = makeMove(move, board, TOKENTYPE.BLUE);
        expect(position).toEqual(null);
    });

    test("should check hasWon status of board vertical", () => {
        let won = hasWon(board);
        expect(won).toEqual(false);
        let move = 0;
        makeMove(move, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(move, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(true);
    });

    test("should check hasWon status of board horizontal", () => {
        let won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(0, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(1, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(true);
    });

    test("should check hasWon status of board left diagnol", () => {
        let won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(1, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(0, board, TOKENTYPE.BLUE);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(0, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(true);
    });

    test("should check hasWon status of board right diagnol", () => {
        let won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(0, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(1, board, TOKENTYPE.BLUE);
        won = hasWon(board);
        expect(won).toEqual(false);
        makeMove(1, board, TOKENTYPE.RED);
        won = hasWon(board);
        expect(won).toEqual(true);
    });
});
