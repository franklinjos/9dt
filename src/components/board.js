/**
 * @module Board
 * @description Board component
 */

/** External packages */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/** Internal */
import { Cell } from "./cell";
import { elevationThree } from "../styles/shared";
import { colorPalette } from "../themes/color-palette";

const gridGap = 10;

/** CSS Grid container component for board */
const BoardContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.size}, calc(30vw / ${props => props.size}));
    grid-template-columns: repeat(${props => props.size}, calc(30vw / ${props => props.size}));
    grid-gap: ${gridGap}px;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${colorPalette.wildsand};
    border: 2px solid lightgrey;
    color: ${colorPalette.mineshaft};
    ${elevationThree};
    width: calc(30vw + ${props => gridGap * (props.size - 1)}px);
    height: calc(30vw + ${props => gridGap * (props.size - 1)}px);
`;

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    className: PropTypes.string,
    lastMove: PropTypes.shape({ row: PropTypes.number, column: PropTypes.number }),
    onMove: PropTypes.func.isRequired
};

export function Board({ board, className, lastMove, onMove }) {
    const lastPlayedIndex = lastMove ? lastMove.row * board.length + lastMove.column : -1;
    return (
        <BoardContainer className={className} size={board.length}>
            {board.map((row, rIndex) => {
                return row.map((cell, cIndex) => {
                    const index = rIndex * board.length + cIndex;
                    return (
                        <Cell
                            key={index}
                            isLastPlayed={lastPlayedIndex === index}
                            cell={cell}
                            onClick={() => {
                                onMove(rIndex, cIndex);
                            }}
                        />
                    );
                });
            })}
        </BoardContainer>
    );
}
