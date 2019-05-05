import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <WelcomeScreen
      time={this.props.gameTime}
      errorCount={this.props.errorCount}
    />;
  }
}

App.propTypes = {
  gameTime: Number,
  errorCount: Number
};
