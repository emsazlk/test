import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import history from 'utils/history';

import CommonModule from 'modules/common';
import * as routes from 'config/routePaths';


class Page404 extends Component {
  componentWillMount() {
    const { lastRoutePath, location: { pathname } } = this.props;

    if (pathname !== routes.VIEW_NOT_FOUND) {
      this.props.setLastRoutePath(pathname);
      history.replace(routes.VIEW_NOT_FOUND);
    }

    window.history.pushState('', '', lastRoutePath);
  }

  componentWillUpdate(nextProps) {
    window.history.pushState('', '', nextProps.lastRoutePath);
  }

  render() {
    return (
      <div className="page-body">
        <Link
          to={`${routes.HOME}`}
          className="btn">
          Go home
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lastRoutePath: state.common.lastRoutePath
  }
};

const mapDispatchToProps = {
  setLastRoutePath: CommonModule.setLastRoutePath
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page404);