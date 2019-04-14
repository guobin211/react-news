import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import { AppRouter } from "./AppRouter";
import { dispatchToProps, store, storeToProps } from "./redux/store";
import registerServiceWorker from './registerServiceWorker';
import { Provider, connect } from 'react-redux';

const App = connect(storeToProps, dispatchToProps)(AppRouter);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

