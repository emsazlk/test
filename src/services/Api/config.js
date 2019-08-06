import history from 'utils/history';
import AuthModule from 'modules/auth';
import * as routes from 'config/routePaths';

const config = {
  timeout: 10000,
  validateStatus: status => {
    return status;
  }
};

const handleInterceptorsResponse = response => {

  if (response.data && !response.data.success && response.data.field == null) {

  }

  // server error
  if (response.status >= 400) {
  }

  if (response.status === 401) {
    AuthModule.localLogout();
  }

  if (response.status === 404) {
    history.push(routes.VIEW_NOT_FOUND);
  }

  if (response.status === 410) {
    AuthModule.localLogout();
  }

  if (response.status === 430) {
  }

  return response;
};

const handleInterceptorsError = error => {

  return { error, data: {} };
}

export {
  config as default,
  handleInterceptorsResponse,
  handleInterceptorsError
}
