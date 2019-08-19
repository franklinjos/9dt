/**
 * @module StartButton
 * @description Component to start game
 */

/** External packages */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Popup from "reactjs-popup";

import { GAMESTATUS } from "../common/constants";
import { colorPalette } from "../themes/color-palette";

const START = "Start game";
const RESTART = "Restart game";
const REPLAY = "Play again";

const StyledButton = styled.button`
    margin: 0 0 10px 0;
    padding: 10px;
    min-height: 30px;
    border-radius: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
    color: ${colorPalette.white};
    background: ${colorPalette.mineshaft1};
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`;

const StyledYesNoButton = styled.button`
    margin: 0;
    padding: 2px;
    min-height: 20px;
    border-radius: 10px;
    width: 100%;
    border-radius: 10px;
    border: none;
    font-size: 0.75rem;
    color: ${colorPalette.white};
    background: ${colorPalette.silver};
    font-size: 1rem;
    outline: none;
    cursor: pointer;
`;

StartButton.propTypes = {
    gameStatus: PropTypes.oneOf(Object.values(GAMESTATUS)),
    onClick: PropTypes.func.isRequired
};

export function StartButton({ gameStatus, onClick }) {
    const display =
        gameStatus === GAMESTATUS.NOTSTARTED
            ? START
            : gameStatus === GAMESTATUS.PLAYING
            ? RESTART
            : REPLAY;

    return gameStatus === GAMESTATUS.NOTSTARTED ? (
        <Popup trigger={<StyledButton>{display}</StyledButton>}>
            <div style={{ padding: "10px" }} key="text">
                <p>Do you want to play first?</p>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                    <StyledYesNoButton style={{ marginRight: 10 }} onClick={() => onClick(true)}>
                        Yes
                    </StyledYesNoButton>
                    <StyledYesNoButton onClick={() => onClick(false)}>No</StyledYesNoButton>
                </div>
            </div>
        </Popup>
    ) : (
        <StyledButton onClick={() => onClick()}>{display}</StyledButton>
    );
}
