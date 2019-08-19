import React from "react";
import { useGame } from "../../hooks/";
import { GAMESTATUS, PLAYERTYPE, TOKENTYPE } from "../../common/constants";
import { emptyCell } from "../../common/game-utils";
import { TestHook } from "./test-hook";
import renderer, { act } from "react-test-renderer";

let activePlayer, board, gameStatus, isValidMove, lastValidMove, play, startGame;
let player1 = { id: "p1", name: "p1", token: TOKENTYPE.RED, type: PLAYERTYPE.USER };
let player2 = { id: "p2", name: "p2", token: TOKENTYPE.BLUE, type: PLAYERTYPE.USER };
beforeEach(() => {
    renderer.create(
        <TestHook
            callback={() => {
                [
                    activePlayer,
                    board,
                    gameStatus,
                    isValidMove,
                    lastValidMove,
                    play,
                    startGame
                ] = useGame(
                    { id: "p1", name: "p1", token: TOKENTYPE.RED, type: PLAYERTYPE.USER },
                    { id: "p2", name: "p2", token: TOKENTYPE.BLUE, type: PLAYERTYPE.USER }
                );
            }}
        />
    );
});

describe("useGame hook", () => {
    test("should be able to initialize game with NOTSTARTED status", () => {
        expect(activePlayer).toBeNull;
        expect(board.length).toEqual(4);
        expect(board[0].length).toEqual(4);
        expect(gameStatus).toEqual(GAMESTATUS.NOTSTARTED);
        expect(lastValidMove).toBeNull;
        expect(isValidMove).toBeNull;
    });

    test("should be able start game with player1 as active player by default and gameStatus 'PLAYING'", () => {
        act(() => {
            startGame();
        });
        expect(activePlayer).toEqual(player1);
        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);
    });

    test("should be able start game explicitly passing a player", () => {
        act(() => {
            startGame(player2);
        });
        expect(activePlayer).toEqual(player2);
        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);
    });

    test("should be able to play game by alternating two players", () => {
        act(() => {
            startGame(player2);
        });

        expect(activePlayer).toEqual(player2);
        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);
        let move = 0;
        act(() => {
            play(move);
        });

        expect(isValidMove).toEqual(true);
        expect(lastValidMove.column).toEqual(move);
        expect(lastValidMove.row).toEqual(3);
        expect(board[3][move].token).toEqual(TOKENTYPE.BLUE);
        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);

        expect(activePlayer).toEqual(player1);
        act(() => {
            play(move);
        });
        expect(lastValidMove.column).toEqual(move);
        expect(lastValidMove.row).toEqual(2);
        expect(board[2][move].token).toEqual(TOKENTYPE.RED);
        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);
    });

    test("should be able restart game while playing", () => {
        act(() => {
            startGame(player2);
        });

        expect(gameStatus).toEqual(GAMESTATUS.PLAYING);
        expect(activePlayer).toEqual(player2);
        let move = 0;
        act(() => {
            play(move);
        });
        expect(lastValidMove.column).toEqual(move);
        expect(lastValidMove.row).toEqual(3);
        expect(board[3][move].token).toEqual(TOKENTYPE.BLUE);

        expect(activePlayer).toEqual(player1);
        act(() => {
            play(move);
        });
        expect(lastValidMove.column).toEqual(move);
        expect(lastValidMove.row).toEqual(2);
        expect(board[2][move].token).toEqual(TOKENTYPE.RED);

        act(() => {
            startGame();
        });

        expect(activePlayer).toEqual(player1);
        expect(board[3][move]).toEqual(emptyCell);
        expect(board[2][move]).toEqual(emptyCell);
        expect(lastValidMove).toBeNull;
    });
});
