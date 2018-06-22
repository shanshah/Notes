import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Routes from './src/Routes';
import App from './src/App';
import store from './src/store/store';


ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 20 }}>
      <Routes app={App} />
    </div>
  </Provider>, document.getElementById('app'),
);
