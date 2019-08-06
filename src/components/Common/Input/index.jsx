import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import './style.css'


class Input extends PureComponent {
  render() {
    const { meta, disabled, labelName, input, type = "text", styleType, ...rest } = this.props;

    return (
      <div className={
        classNames("input", {
          "error": meta.touched && meta.error,
          "is-focused": meta.active,
          "is-disabled": disabled,
          "is-filled": input.value,
          "is-white-style": styleType === "white"
        })}>

        <input
          {...input}
          {...rest}
          type={type}
          placeholder={labelName}
          disabled={disabled}
        />

        {(meta.touched && meta.error) ? (
          <div className="error-text">
            {meta.error}
          </div>
        ) : null}

      </div>
    )
  }
}

Input.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  styleType: PropTypes.string,
  labelName: PropTypes.string
}

export default Input;