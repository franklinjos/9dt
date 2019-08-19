/**
 * @module Player
 * @description Component to display player
 */

/** External packages */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { playerShape } from "../common/utils";
import { elevationThree } from "../styles/shared";

const PlayerContainer = styled.div`
    display: flex;
    margin: 0 0 10px 0;
    padding: 5px;
    min-height: 30px;
    border-radius: 10px;
    background-color: whitesmoke;
    border: 5px solid white;
    width: 100%;
    border: 2px solid lightgray;
    .token {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin : 5px;
        ${elevationThree}
        background-color: ${props => props.player.token};
        opacity : ${props => (props.active ? 1 : 0.2)};
    }
    align-items: center;
`;

Player.propTypes = {
    player: PropTypes.shape(playerShape),
    active: PropTypes.bool.isRequired
};

export function Player({ player, active }) {
    return (
        <PlayerContainer player={player} active={active}>
            <div className="token" />
            <div>{player.name}</div>
        </PlayerContainer>
    );
}
