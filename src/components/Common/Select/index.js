import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from './style.js';
import './style.css'

class SelectForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      options: [],
    }

  }

  componentDidMount() {
    const { options, input: { onChange }, meta: { initial } } = this.props;

    const options_select = options.map(item => ({ label: item, value: item }));
    let init = null;

    if (initial && initial.length !== 0) {
      let isValue = options_select.filter(item => item.label === initial);

      if (isValue[0]) init = isValue[0];
    }

    this.setState({
      selectedOption: init ? init : null,
      options: options_select,
    })

    init && onChange(init.label)

  }

  handleChange = selectedOption => {

    const { input: { onChange } } = this.props;

    this.setState({
      selectedOption: selectedOption,
    });
    onChange(selectedOption.label);

  };

  render() {
    const { selectedOption, options, isOpen } = this.state;
    const { meta, isSearchable, disabled, labelName, input } = this.props;


    const containerClasses = classNames("select", {
      "error": meta.touched && meta.erro,
      "is-focused": meta.active,
      "is-filled": input.value
    });

    return (
      <div className={containerClasses}>

        <Select
          value={selectedOption}
          menuIsOpen={isOpen}
          isDisabled={disabled}
          onChange={this.handleChange}
          onMenuOpen={this.handleMenuOpen}
          onMenuClose={this.handleMenuClose}
          options={options}
          className="select"
          classNamePrefix="select"
          styles={styles}
          placeholder={labelName}
          isSearchable={isSearchable}
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

SelectForm.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired
  ]))
}


export default SelectForm;