import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import { elevationFour } from "./shared";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    ${styledNormalize}
    :root{
        font-family: "Lato";
        font-size: 16px;
     
    }

    .popup-content {
        border-radius: 5px;
        border: none !important;
        ${elevationFour} ;
    }

`;
