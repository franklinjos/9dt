import { css } from "styled-components";
import { colorPalette } from "../themes/color-palette";

const elevationZero = css`
    box-shadow: none;
`;

const elevationPointFive = css`
    box-shadow: 0 2px 2px 0 ${colorPalette.black12}, 0 0 2px 0 ${colorPalette.black12};
`;

const elevationOne = css`
    box-shadow: 0 1px 3px 0 ${colorPalette.black14}, 0 2px 2px 0 ${colorPalette.black12},
        0 0 2px 0 ${colorPalette.black12};
`;

const elevationTwo = css`
    box-shadow: 0 1px 5px 0 ${colorPalette.black14}, 0 3px 4px 0 ${colorPalette.black12},
        0 2px 4px 0 ${colorPalette.black10};
`;

const elevationThree = css`
    box-shadow: 0 1px 8px 0 ${colorPalette.black14}, 0 3px 4px 0 ${colorPalette.black12},
        0 3px 3px 0 ${colorPalette.black10};
`;

const elevationFour = css`
    box-shadow: 0 1px 10px 0 ${colorPalette.black14}, 0 4px 5px 0 ${colorPalette.black12},
        0 2px 4px 0 ${colorPalette.black10} !important;
`;

const elevationSix = css`
    box-shadow: 0 3px 5px 0 ${colorPalette.black14}, 0 1px 18px 0 ${colorPalette.black12},
        0 6px 10px 0 ${colorPalette.black10} !important;
`;
const elevationEight = css`
    box-shadow: 0 4px 5px 0 ${colorPalette.black14}, 0 3px 14px 3px ${colorPalette.black12},
        0 8px 10px 1px ${colorPalette.black10};
`;

const elevationTweleve = css`
    box-shadow: 0 7px 8px 0 ${colorPalette.black14}, 0 5px 22px 4px ${colorPalette.black12},
        0 12px 17px 2px ${colorPalette.black10};
`;

const insetThree = css`
    box-shadow: inset 0 1px 8px 0 ${colorPalette.black14}, inset 0 3px 4px 0 ${colorPalette.black12},
        inset 0 3px 3px 0 ${colorPalette.black10};
`;

const insetFour = css`
    box-shadow: inset 0 1px 10px 0 ${colorPalette.black14},
        inset 0 4px 5px 0 ${colorPalette.black12}, inset 0 2px 4px 0 ${colorPalette.black10};
`;

export {
    elevationZero,
    elevationPointFive,
    elevationOne,
    elevationTwo,
    elevationThree,
    elevationFour,
    elevationSix,
    elevationEight,
    elevationTweleve,
    insetThree,
    insetFour
};
