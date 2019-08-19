/**
 * @module DropToken
 * @description Drop Token takes place on a 4x4 grid.
 * A token is dropped along a column (labeled 0‑3) and said token goes to the lowest unoccupied row of the board.
 * A player wins when they have 4 tokens next to each other either along a row, in a column, or on adiagonal.
 * If the board is filled, and nobody has won then the game is a draw. Each player takes a turn,
 * starting with player 1, until the game reaches either win or draw.
 * If a player tries to put a token in a column that is already full, that results in an errorstate,
 * and the player must play again until they play a valid move.
 */

/** External packages */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** Internal */
import { Board, StartButton, Player, StatusDisplay } from ".";
import { PLAYERTYPE, TOKENTYPE, GAMESTATUS } from "../common/constants";
import { playerShape } from "../common/utils";
import { useGame } from "../hooks";

const GameContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    aside {
        width: 100%;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

DropToken.propTypes = {
    player1: PropTypes.shape(playerShape),
    player2: PropTypes.shape(playerShape)
};

DropToken.defaultProps = {
    player1: { id: "player1", name: "Player 1", type: PLAYERTYPE.USER, token: TOKENTYPE.RED },
    player2: {
        id: "system1",
        name: "98point6",
        type: PLAYERTYPE.SYSTEM,
        token: TOKENTYPE.BLUE
    }
};

export function DropToken({ player1, player2 }) {
    const [activePlayer, board, gameStatus, isValidMove, lastValidMove, play, startGame] = useGame(
        player1,
        player2
    );

    const className = isValidMove === false && "animated shake";
    return (
        <GameContainer>
            <Board
                className={className}
                board={board}
                lastMove={lastValidMove}
                onMove={(row, col) => {
                    if (
                        activePlayer &&
                        activePlayer.type === PLAYERTYPE.USER &&
                        gameStatus === GAMESTATUS.PLAYING
                    ) {
                        play(col);
                    }
                }}
            />
            <aside>
                <Player
                    active={activePlayer === player1 && gameStatus === GAMESTATUS.PLAYING}
                    player={player1}
                />
                <Player
                    active={activePlayer === player2 && gameStatus === GAMESTATUS.PLAYING}
                    player={player2}
                />
                <StatusDisplay activePlayer={activePlayer} gameStatus={gameStatus} />
                <StartButton
                    gameStatus={gameStatus}
                    onClick={playFirst => {
                        startGame(playFirst === false ? player2 : player1);
                    }}
                />
            </aside>
        </GameContainer>
    );
}
