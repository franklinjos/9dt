/**
 * @module Cell
 * @description Cell component
 */

/** External packages */
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

/** Internal */
import { insetThree, elevationThree } from "../styles/shared";
import { colorPalette } from "../themes/color-palette";
import { TOKENTYPE } from "../common/constants";

const sharedCss = css`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;

const CellContainer = styled.div`
    background-color: ${colorPalette.alto};
    ${insetThree};
    ${sharedCss}
`;

const Token = styled.div`
    background-color: ${props => (props.token ? props.token : "transparent")};
    ${props => !!props.token && elevationThree};
    ${sharedCss}
`;

Cell.propTypes = {
    cell: PropTypes.shape({
        token: PropTypes.oneOf(Object.values(TOKENTYPE)),
        lastMove: PropTypes.shape({
            row: PropTypes.number.isRequired,
            col: PropTypes.number
        })
    }),
    onClick: PropTypes.func.isRequired,
    isLastPlayed: PropTypes.bool.isRequired
};

export function Cell({ cell, isLastPlayed, onClick }) {
    const className = isLastPlayed && "animated bounceInDown";
    return (
        <CellContainer
            {...cell}
            onClick={() => {
                onClick();
            }}
        >
            <Token {...cell} className={className} />
        </CellContainer>
    );
}
