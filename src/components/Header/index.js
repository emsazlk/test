import React, { Component } from 'react';
import * as routes from 'config/routePaths';
import MODULE_AUTH from 'modules/auth';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './style.css';

class Header extends Component {

  onClickLogout = () => {
    const { localLogout } = this.props;

    localLogout()
  }


  render() {

    return (
      <header className="header">
        <div className="container">
          <div className="header-container">
            <div className="header-box header-box-left">
              <Link to={routes.HOME} className="header-link">
                HOME
            </Link>
              <Link to={routes.CURRENCY_CONVERTER} className="header-link">
                CURRENCY CONVERSION
            </Link>
            </div>
            <div className="header-box">
              <div onClick={this.onClickLogout} className="header-link">
                LOGOUT
            </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


export default connect(
  state => ({
  }),
  dispatch => ({
    localLogout: () => dispatch(MODULE_AUTH.localLogout())
  })
)(Header);