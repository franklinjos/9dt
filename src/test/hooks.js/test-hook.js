/* eslint-disable react/prop-types */
import React from "react";
// setup file
// import { configure, mount } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

export const TestHook = ({ callback }) => {
    return <div>{callback()}</div>;
};

// const testHook = callback => {
//     mount(<TestHook callback={callback} />);
// };
