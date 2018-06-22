import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import App from './App';

import Loadable from 'react-loadable';

function MyLoadingComponent() {
  return <div>Loading...</div>;
};

const App = Loadable({
  loader: () => import('./App'),
  loading: MyLoadingComponent,
});

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Routes;
