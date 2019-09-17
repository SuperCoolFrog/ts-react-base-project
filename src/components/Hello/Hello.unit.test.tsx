import * as React from "react";
import { shallow } from "enzyme";

import Hello from "./Hello";

it("renders", () => {
  const component = shallow(<Hello compiler="Typescript" framework="React" />);
  expect(component).toMatchSnapshot();
});
