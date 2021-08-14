import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <div className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </div>
        )}
      </ColorContext.Consumer>
    );
  }
}

// has to be called exactly "contextType"
// static contextType = LanguageContext;
//same as Button.contextType = LanguageContext

export default Button;
