import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Routes;
