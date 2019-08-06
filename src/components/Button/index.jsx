import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import './style.css';

class Button extends PureComponent {
  render() {
    const { isLoading, children, textColor, styleButton, ...rest } = this.props;

    return (
      <button
        className={classNames("button icon-inherit", {
          "style-white": styleButton === "white",
          "style-cancel": styleButton === "cancel",
          "style-back": styleButton === "back",
        })}
        {...rest}
        style={textColor && { "color": textColor }}
      >
        {isLoading ? <div>Loading</div> : children}
      </button>
    )
  }
}

Button.propTypes = {
  textColor: PropTypes.string,
  isLoading: PropTypes.bool,
  styleButton: PropTypes.string
}

export default Button;