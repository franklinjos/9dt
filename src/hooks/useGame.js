import { useState, useEffect } from "react";
import axios from "axios";

import { useBoard } from "./";
import { GAMESTATUS, PLAYERTYPE } from "../common/constants";
import { hasWon } from "../common/game-utils";

export function useGame(player1, player2) {
    const [board, placeToken, resetBoard] = useBoard(4);
    const [lastValidMove, setLastMove] = useState(null);
    const [activePlayer, setActivePlayer] = useState(null);
    const [gameStatus, setGameStatus] = useState(GAMESTATUS.NOTSTARTED);
    const [moves, setMoves] = useState([]);
    const [isValidMove, setIsValidMove] = useState(null);

    const play = function(move) {
        const lstMove = placeToken(move, activePlayer.token);
        if (lstMove) {
            setLastMove(lstMove);
            setIsValidMove(true);
        } else {
            setIsValidMove(false);
        }
    };

    const startGame = (player = player1) => {
        if (gameStatus !== GAMESTATUS.NOTSTARTED) {
            resetBoard();
            setMoves([]);
            setIsValidMove(null);
            setLastMove(null);
        }

        setActivePlayer(player);
        setGameStatus(GAMESTATUS.PLAYING);
    };

    useEffect(() => {
        if (lastValidMove) {
            setMoves(prev => [...prev, lastValidMove.column]);
            if (!hasWon(board)) {
                setActivePlayer(prev => (prev === player1 ? player2 : player1));
            } else {
                setGameStatus(GAMESTATUS.WON);
            }
        }
    }, [lastValidMove]);

    useEffect(() => {
        if (gameStatus === GAMESTATUS.PLAYING && moves.length === board.length * board.length) {
            setGameStatus(GAMESTATUS.DRAW);
        }
    }, [moves, gameStatus, board.length]);

    useEffect(() => {
        async function fetchData() {
            if (activePlayer && activePlayer.type === PLAYERTYPE.SYSTEM) {
                let url =
                    "https://w0ayb2ph1k.execute-api.us-west-2.amazonaws.com/production?moves=" +
                    JSON.stringify(moves);
                try {
                    let result = await axios.get(url);
                    setTimeout(() => {
                        play(result.data[result.data.length - 1]);
                    }, 800);
                } catch (ex) {
                    setGameStatus(GAMESTATUS.ERROR);
                }
            }
        }
        fetchData();
    }, [activePlayer]);

    return [activePlayer, board, gameStatus, isValidMove, lastValidMove, play, startGame];
}
