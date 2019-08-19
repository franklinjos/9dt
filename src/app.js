/**
 * @module App
 * @description App component
 */

/** External packages */
import React from "react";
import styled from "styled-components";

import "animate.css/animate.css";
// import "@blueprintjs/core/lib/css/blueprint.css";

/** Internal */
import { DropToken } from "./components/drop-token";
import { GlobalStyle } from "./styles/global";
import { colorPalette } from "./themes/color-palette";

/** App container */
const Container = styled.main`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    background-color: ${colorPalette.white};
    justify-items: center;
    width: 100vw;
    height: 100vh;
`;

/** App header */
const Header = styled.header`
    background-color: ${colorPalette.white};
    color: ${colorPalette.mineshaft};
    justify-self: center;
    font-size: 2rem;
    padding: 1rem;
`;

/** App footer */
const Footer = styled.footer`
    height: 1rem;
`;

/** App component */
function App() {
    //const moveHistory = [];
    return (
        <React.Fragment>
            <GlobalStyle />
            <Container>
                <Header></Header>
                <DropToken />
                <Footer></Footer>
            </Container>
        </React.Fragment>
    );
}

export default App;
