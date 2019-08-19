import React from "react";
import { emptyCell } from "../../common/game-utils";
import { useBoard } from "../../hooks/useBoard";
import { TestHook } from "./test-hook";
import renderer, { act } from "react-test-renderer";

beforeEach(() => {});
describe("useBoard hook", () => {
    test("should be able to initialize board with size 4", () => {
        const size = 4;
        let board;

        act(() => {
            renderer.create(
                <TestHook
                    callback={() => {
                        [board] = useBoard(4);
                    }}
                />
            );
        });

        expect(board.length).toEqual(size);
        expect(board[0].length).toEqual(size);
        expect(board[0][0]).toEqual(emptyCell);
        expect(board[1][0]).toEqual(emptyCell);
        expect(board[0][1]).toEqual(emptyCell);
        expect(board[1][1]).toEqual(emptyCell);
    });
});
