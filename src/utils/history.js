import { createBrowserHistory } from 'history';

const history = createBrowserHistory({});

history.listen((location, action) => {  
  window.scrollTo(0, 1);
});

export default history;
