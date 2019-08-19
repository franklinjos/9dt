/**
 * @module StatusDisplay
 * @description Component to display game status
 */

/** External packages */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { GAMESTATUS } from "../common/constants";
import { playerShape } from "../common/utils";

const DisplayContainer = styled.div`
    margin: 0 0 10px 0;
    padding: 5px;
    min-height: 22px;
    border-radius: 10px;
    background-color: whitesmoke;
    border: 2px solid lightgray;
    font-weight: ${props =>
        props.gameStatus === GAMESTATUS.WON || props.gameStatus === GAMESTATUS.DRAW
            ? "bold"
            : "unset"};
    color: ${props => (props.gameStatus === GAMESTATUS.WON ? props.token : "unset")};
    width: 100%;
    text-align: ${props =>
        props.gameStatus === GAMESTATUS.WON || props.gameStatus === GAMESTATUS.DRAW
            ? "center"
            : "left"};
`;

StatusDisplay.propTypes = {
    activePlayer: PropTypes.shape(playerShape),
    gameStatus: PropTypes.oneOf(Object.values(GAMESTATUS))
};

export function StatusDisplay({ activePlayer, gameStatus }) {
    let className =
        gameStatus === GAMESTATUS.WON || gameStatus === GAMESTATUS.DRAW ? "animated zoomIn" : "";
    className = gameStatus === GAMESTATUS.PLAYING ? "animated pulse" : className;
    
    return (
        <DisplayContainer className={className} {...activePlayer} gameStatus={gameStatus}>
            {gameStatus === GAMESTATUS.WON &&
                activePlayer.name + " " + gameStatus.toUpperCase() + "!"}
            {gameStatus === GAMESTATUS.PLAYING && activePlayer.name + " " + gameStatus + "!"}
            {gameStatus === GAMESTATUS.DRAW && "Game " + gameStatus}
            {gameStatus === GAMESTATUS.ERROR && gameStatus.toUpperCase()}
        </DisplayContainer>
    );
}
