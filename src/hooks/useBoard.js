import { useState } from "react";

import { createEmptyBoard, makeMove, validateBoard } from "../common/game-utils";

export function useBoard(size) {
    let brd = createEmptyBoard(size);
    validateBoard(brd);
    const [board, setBoard] = useState(brd);

    function placeToken(move, token) {
        // Clone board array
        let newBoard = board.map(row => row.map(cell => cell));
        let lastMove = makeMove(move, newBoard, token);
        if (lastMove) {
            setBoard(newBoard);
        }
        return lastMove;
    }

    function resetBoard() {
        setBoard(createEmptyBoard(size));
    }

    return [board, placeToken, resetBoard];
}
