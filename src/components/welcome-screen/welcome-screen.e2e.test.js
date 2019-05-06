import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`<WelcomeScreen />`, () => {
  const handleClick = jest.fn();

  it(`test click on button`, () => {
    const wrapper = shallow(
        <WelcomeScreen time={0} errorCount={0} onWelcomButtonClick={handleClick} />
    );

    const welcomButton = wrapper.find(`button`);
    welcomButton.simulate(`click`);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
