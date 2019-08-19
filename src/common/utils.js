import PropTypes from "prop-types";
import { TOKENTYPE, PLAYERTYPE } from "../common/constants";

export function checkArrayArg(name, value) {
    if (!value && !Array.isArray(value)) throw Error(`${name} is not an array (${value}).`);
}

export function checkNumArg(name, value) {
    if (!value && !Number.isInteger(value)) throw Error(`${name} is not a valid number ${value}.`);
}

export const playerShape = {
    type: PropTypes.oneOf(Object.values(PLAYERTYPE)).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    token: PropTypes.oneOf(Object.values(TOKENTYPE)).isRequired
};
